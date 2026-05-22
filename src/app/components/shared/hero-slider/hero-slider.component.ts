import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { heroSlides } from '../../../data/app.data';
import Swiper from 'swiper';
import { Autoplay, Pagination, Parallax, EffectCreative } from 'swiper/modules';

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
  private swiper?: Swiper;

  ngOnInit() {
    setTimeout(() => {
      this.swiper = new Swiper('.nowara-hero-swiper', {
        modules: [Autoplay, Pagination, Parallax, EffectCreative],
        effect: 'creative',
        creativeEffect: {
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-6%', 0, -600],
            rotate: [0, 75, 0],
          },
          next: {
            origin: 'right center',
            translate: ['6%', 0, -600],
            rotate: [0, -75, 0],
          },
        },
        parallax: true,
        autoplay: { delay: 5500, disableOnInteraction: false },
        speed: 1100,
        loop: true,
        grabCursor: true,
        pagination: { el: '.swiper-pagination', clickable: true },
      });
    }, 100);
  }

  ngOnDestroy() {
    this.swiper?.destroy();
  }

  openModal(brochure: string, tag: string) {
    this.activeBrochure = brochure;
    this.activeTag = tag;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }
}
