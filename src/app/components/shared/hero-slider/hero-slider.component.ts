import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { heroSlides } from '../../../data/app.data';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero-slider.component.html',
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  slides = heroSlides;
  isModalOpen = false;
  activeBrochure = '';
  activeTag = '';
  private swiper: any;
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Dynamic import — keeps Swiper out of the initial bundle
      setTimeout(async () => {
        const { default: Swiper } = await import('swiper');
        const { Autoplay, Pagination, Parallax, EffectCreative } = await import('swiper/modules');
        this.swiper = new Swiper('.nowara-hero-swiper', {
          modules: [Autoplay, Pagination, Parallax, EffectCreative],
          effect: 'creative',
          creativeEffect: {
            prev: { shadow: true, origin: 'left center',  translate: ['-6%', 0, -600], rotate: [0,  75, 0] },
            next: {              origin: 'right center', translate: [ '6%', 0, -600], rotate: [0, -75, 0] },
          },
          parallax: true,
          autoplay: { delay: 5500, disableOnInteraction: false },
          speed: 1100,
          loop: true,
          grabCursor: true,
          pagination: { el: '.swiper-pagination', clickable: true },
          a11y: {
            enabled: true,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
          },
          watchSlidesProgress: true,
          on: {
            init: (swiper: any) => this.fixAriaHiddenFocus(swiper),
            slideChange: (swiper: any) => this.fixAriaHiddenFocus(swiper),
          },
        });
      }, 200);
    }
  }

  ngOnDestroy() {
    this.swiper?.destroy();
  }

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

  /** Make buttons/links inside aria-hidden Swiper clones unfocusable */
  private fixAriaHiddenFocus(swiper: any) {
    if (!swiper?.el) return;
    swiper.el.querySelectorAll('[aria-hidden="true"] button, [aria-hidden="true"] a')
      .forEach((el: HTMLElement) => el.setAttribute('tabindex', '-1'));
    swiper.el.querySelectorAll('.swiper-slide-active button, .swiper-slide-active a')
      .forEach((el: HTMLElement) => el.removeAttribute('tabindex'));
  }
}
