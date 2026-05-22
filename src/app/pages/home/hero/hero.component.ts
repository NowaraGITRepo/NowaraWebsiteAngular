import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';
import { homeCards } from '../../../data/app.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  cards       = homeCards;
  isOpen      = false;
  cardAccents = ['#3b82f6', '#06b6d4', '#7c3aed', '#10b981', '#f97316', '#e11d48'];

  serviceImages = [
    { src: '/images/Swiper/slider-image.webp',                                    label: 'Enterprise ERP' },
    { src: '/images/Swiper/pexels-photo-3183153.webp',                            label: 'Cloud Solutions' },
    { src: '/images/Swiper/people-analyzing-checking-finance-graphs-office.webp', label: 'Power BI Analytics' },
    { src: '/images/Swiper/pexels-photo-1181244.webp',                            label: 'Mobile Development' },
    { src: '/images/Swiper/pexels-photo-1181263.webp',                            label: 'Software Engineering' },
    { src: '/images/Swiper/pexels-photo-1092671.webp',                            label: 'Web Technology' },
    { src: '/images/Swiper/pexels-photo-3861964.webp',                            label: 'Data Visualization' },
  ];

  currentImgIndex = 0;
  fading          = false;

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    // Run timer OUTSIDE Angular zone — prevents change detection on every tick.
    // We manually call detectChanges() only when state actually changes.
    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => this.advance(), 3500);
    });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  private advance() {
    // Defer to next tick so we never mutate state mid-CD cycle (prevents NG0100)
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

    // Defer to avoid mutating state mid-CD cycle
    setTimeout(() => {
      this.ngZone.run(() => {
        this.fading = true;
        this.cdr.detectChanges();
      });

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

  openModal()  { this.isOpen = true;  document.body.style.overflow = 'hidden'; }
  closeModal() { this.isOpen = false; document.body.style.overflow = ''; }
}
