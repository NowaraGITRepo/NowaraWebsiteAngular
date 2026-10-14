import {
  Component, OnInit, OnDestroy, AfterViewInit,
  ChangeDetectorRef, NgZone, ElementRef, ViewChild, ViewEncapsulation,
  inject, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';
import { homeCards } from '../../../data/app.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, RouterLink, SafeHtmlPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  @ViewChild('cardTrack') cardTrack!: ElementRef<HTMLDivElement>;

  cards       = homeCards;
  sliderCards = [...homeCards, ...homeCards]; // 2× for seamless loop
  isOpen      = false;
  cardAccents = ['#3b82f6', '#06b6d4', '#7c3aed', '#10b981', '#f97316', '#e11d48'];

  serviceImages = [
    { src: '/images/Swiper/slider-image.webp',                                    label: 'Dynamics 365 Business Central' },
    { src: '/images/Swiper/people-analyzing-checking-finance-graphs-office.webp', label: 'Dynamics 365 CRM' },
    { src: '/images/Swiper/pexels-photo-590022.webp',                             label: 'Finance & Operations' },
    { src: '/images/Swiper/pexels-photo-3183153.webp',                            label: 'ERP Consulting' },
    { src: '/images/Swiper/pexels-photo-3861964.webp',                            label: 'Power BI Analytics' },
    { src: '/images/Swiper/pexels-photo-669615.webp',                             label: 'AX / NAV Migration' },
  ];

  currentImgIndex = 0;
  fading          = false;

  private timer?: ReturnType<typeof setInterval>;
  private cleanupPointer?: () => void;

  // ── Slider state ──────────────────────────────────────────
  private sliderX     = 0;
  private rafId       = 0;
  private sliderActive = false;
  private readonly SPEED  = 1.8;   // px per frame (~108 px/s at 60 fps)
  private readonly CARD_W = 252;   // 236px card + 16px gap (gap-4 = 16px) — keep in sync with the CSS

  // ── Image rotator ─────────────────────────────────────────
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => this.advance(), 3500);
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        this.runSlider();
        this.initCardLight();
      });
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    this.sliderActive = false;
    if (isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.rafId);
      this.cleanupPointer?.();
    }
  }

  /** Feeds the pointer position to the hovered card (--mx / --my) for its soft light. */
  private initCardLight() {
    const track = this.cardTrack?.nativeElement;
    if (!track) return;
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest?.('.nx-card') as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    };
    track.addEventListener('pointermove', onMove, { passive: true });
    this.cleanupPointer = () => track.removeEventListener('pointermove', onMove);
  }

  // ── Auto-scroll loop ──────────────────────────────────────
  private runSlider() {
    this.sliderActive = true;
    const tick = () => {
      if (!this.sliderActive) return;
      const el = this.cardTrack?.nativeElement;
      if (el) {
        this.sliderX += this.SPEED;
        const half = el.scrollWidth / 2;
        if (this.sliderX >= half) this.sliderX -= half;
        el.style.transform = `translateX(-${this.sliderX}px)`;
      }
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  pauseSlider() {
    this.sliderActive = false;
    if (isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.rafId);
    }
  }

  resumeSlider() {
    if (isPlatformBrowser(this.platformId) && !this.sliderActive) {
      this.ngZone.runOutsideAngular(() => this.runSlider());
    }
  }

  slideLeft() {
    this.pauseSlider();
    const el = this.cardTrack?.nativeElement;
    if (!el) { this.resumeSlider(); return; }
    this.sliderX = Math.max(0, this.sliderX - this.CARD_W);
    el.style.transition = 'transform 0.35s cubic-bezier(0.22,1,0.36,1)';
    el.style.transform  = `translateX(-${this.sliderX}px)`;
    setTimeout(() => { el.style.transition = ''; this.resumeSlider(); }, 380);
  }

  slideRight() {
    this.pauseSlider();
    const el = this.cardTrack?.nativeElement;
    if (!el) { this.resumeSlider(); return; }
    this.sliderX += this.CARD_W;
    const half = el.scrollWidth / 2;
    if (this.sliderX >= half) this.sliderX -= half;
    el.style.transition = 'transform 0.35s cubic-bezier(0.22,1,0.36,1)';
    el.style.transform  = `translateX(-${this.sliderX}px)`;
    setTimeout(() => { el.style.transition = ''; this.resumeSlider(); }, 380);
  }

  // ── Image rotator helpers ─────────────────────────────────
  private advance() {
    setTimeout(() => {
      this.ngZone.run(() => {
        this.fading = true;
        this.cdr.detectChanges();
      });
      setTimeout(() => {
        this.ngZone.run(() => {
          this.currentImgIndex = (this.currentImgIndex + 1) % this.serviceImages.length;
          this.fading          = false;
          this.cdr.detectChanges();
        });
      }, 700);
    }, 0);
  }

  selectImage(index: number) {
    if (index === this.currentImgIndex) return;
    clearInterval(this.timer);
    setTimeout(() => {
      this.ngZone.run(() => { this.fading = true; this.cdr.detectChanges(); });
      setTimeout(() => {
        this.ngZone.run(() => {
          this.currentImgIndex = index;
          this.fading          = false;
          this.cdr.detectChanges();
        });
        this.ngZone.runOutsideAngular(() => {
          this.timer = setInterval(() => this.advance(), 3500);
        });
      }, 700);
    }, 0);
  }

  openModal()  {
    this.isOpen = true;
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = 'hidden';
  }
  closeModal() {
    this.isOpen = false;
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = '';
  }
}