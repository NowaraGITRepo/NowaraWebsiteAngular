import {
  Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation,
  ElementRef, ViewChild, NgZone, inject, PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { heroSlides } from '../../../data/app.data';

/** Each preset is a different way of leaving one slide and entering the next. */
const TRANSITIONS = [
  { prev: { shadow: true, translate: ['-28%', 0, -1], opacity: 0.5 }, next: { translate: ['100%', 0, 0] } },
  { prev: { translate: [0, 0, -1], scale: 1.12, opacity: 0 }, next: { translate: [0, 0, 0], scale: 0.94, opacity: 0 } },
  { prev: { shadow: true, origin: 'left center', translate: ['-8%', 0, -500], rotate: [0, 70, 0] },
    next: { origin: 'right center', translate: ['8%', 0, -500], rotate: [0, -70, 0] } },
  { prev: { shadow: true, translate: [0, '-30%', -1], opacity: 0.4 }, next: { translate: [0, '100%', 0] } },
];

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  slides = heroSlides;
  isModalOpen = false;
  activeBrochure = '';
  activeTag = '';
  showEventPopup = false;

  activeIndex = 0;
  progressKey = 0;
  readonly autoplayDelay = 5500;

  @ViewChild('hero', { static: true }) heroRef!: ElementRef<HTMLElement>;

  private swiper: any;
  private platformId = inject(PLATFORM_ID);
  private zone = inject(NgZone);
  private teardown: Array<() => void> = [];
  private raf = 0;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.initPointer();

    setTimeout(async () => {
      const { default: Swiper } = await import('swiper');
      const { Autoplay, EffectCreative } = await import('swiper/modules');

      this.swiper = new Swiper('.nx-hero-swiper', {
        modules: [Autoplay, EffectCreative],
        effect: 'creative',
        creativeEffect: { limitProgress: 1, ...TRANSITIONS[0] },
        autoplay: { delay: this.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true },
        speed: 1200,
        loop: true,
        grabCursor: true,
        watchSlidesProgress: true,
        a11y: { enabled: true, prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide' },
        on: {
          init: (s: any) => this.fixAriaHiddenFocus(s),
          slideChange: (s: any) => {
            this.activeIndex = s.realIndex;
            this.progressKey++;
            this.fixAriaHiddenFocus(s);
          },
          slideChangeTransitionEnd: (s: any) => this.applyTransition(s, (s.realIndex + 1) % TRANSITIONS.length),
        },
      });
    }, 200);
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.teardown.forEach(fn => fn());
      cancelAnimationFrame(this.raf);
    }
    this.swiper?.destroy();
  }

  goTo(i: number) { this.swiper?.slideToLoop(i); }
  next() { this.swiper?.slideNext(); }
  prev() { this.swiper?.slidePrev(); }

  openModal(brochure: string, tag: string) {
    this.activeBrochure = brochure;
    this.activeTag = tag;
    this.isModalOpen = true;
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = '';
  }

  closeEventPopup() { this.showEventPopup = false; }

  /**
   * Mouse interaction (desktop only). Writes smoothed pointer values to CSS variables on the
   * section: --mx/--my (px) drive the warm spotlight, --px/--py (-1..1) drive the photo
   * parallax and the AI card tilt. Runs outside Angular, so no change detection per move.
   */
  private initPointer() {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return;

    const hero = this.heroRef.nativeElement;
    let tx = 0, ty = 0, cx = 0, cy = 0, px = 0, py = 0, spx = 0, spy = 0, stopTimer: any;

    const place = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      px = (tx / r.width - 0.5) * 2;
      py = (ty / r.height - 0.5) * 2;
    };

    const tick = () => {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      spx += (px - spx) * 0.07;
      spy += (py - spy) * 0.07;
      hero.style.setProperty('--mx', cx.toFixed(1) + 'px');
      hero.style.setProperty('--my', cy.toFixed(1) + 'px');
      hero.style.setProperty('--px', spx.toFixed(3));
      hero.style.setProperty('--py', spy.toFixed(3));
      this.raf = requestAnimationFrame(tick);
    };

    const onEnter = (e: MouseEvent) => {
      clearTimeout(stopTimer);
      place(e);
      cx = tx; cy = ty;
      cancelAnimationFrame(this.raf);
      this.raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      if (this.isModalOpen) { hero.classList.remove('is-pointer'); return; }
      hero.classList.add('is-pointer');
      place(e);
    };

    const onLeave = () => {
      hero.classList.remove('is-pointer');
      px = py = 0;
      // let the parallax glide back to centre, then stop the loop
      stopTimer = setTimeout(() => cancelAnimationFrame(this.raf), 1200);
    };

    this.zone.runOutsideAngular(() => {
      hero.addEventListener('mouseenter', onEnter);
      hero.addEventListener('mousemove', onMove, { passive: true });
      hero.addEventListener('mouseleave', onLeave);
    });
    this.teardown.push(() => {
      hero.removeEventListener('mouseenter', onEnter);
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    });
  }

  private applyTransition(swiper: any, index: number) {
    const t = TRANSITIONS[index];
    swiper.params.creativeEffect.prev = t.prev;
    swiper.params.creativeEffect.next = t.next;
  }

  private fixAriaHiddenFocus(swiper: any) {
    if (!swiper?.el) return;
    swiper.el.querySelectorAll('[aria-hidden="true"] button, [aria-hidden="true"] a')
      .forEach((el: HTMLElement) => el.setAttribute('tabindex', '-1'));
    swiper.el.querySelectorAll('.swiper-slide-active button, .swiper-slide-active a')
      .forEach((el: HTMLElement) => el.removeAttribute('tabindex'));
  }
}