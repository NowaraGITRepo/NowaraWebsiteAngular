import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { heroSlides } from '../../../data/app.data';
import Swiper from 'swiper';
import { Autoplay, Pagination, Parallax } from 'swiper/modules';

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
        modules: [Autoplay, Pagination, Parallax],
        parallax: true,
        autoplay: { delay: 6000, disableOnInteraction: false },
        speed: 1400,
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
