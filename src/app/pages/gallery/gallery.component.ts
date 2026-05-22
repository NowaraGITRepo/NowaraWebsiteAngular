import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { SEO } from '../../data/seo-data';

interface GalleryImage {
  id: number;
  category: string;
  src: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
<div class="min-h-screen bg-white">
  <!-- HERO -->
  <div class="relative h-72 overflow-hidden">
    <img src="/images/gallery/11.webp" alt="Company Team" class="w-full h-full object-cover"/>
    <div class="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
      <h1 class="text-5xl font-black text-white">Our <span class="text-blue-400">Gallery</span></h1>
    </div>
  </div>

  <!-- TABS -->
  <div class="flex justify-center gap-4 py-8 px-6 flex-wrap">
    <button *ngFor="let cat of categories" (click)="selectedTab = cat"
            [class]="'px-6 py-2.5 rounded-full font-bold text-sm transition-all ' + (selectedTab === cat ? 'bg-primary text-white shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200')">
      {{cat}}
    </button>
  </div>

  <!-- GALLERY GRID -->
  <div class="max-w-7xl mx-auto px-6 lg:px-20 pb-20">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div *ngFor="let img of filteredImages" (click)="activeImage = img"
           class="relative rounded-2xl overflow-hidden group cursor-pointer h-48 md:h-60">
        <img [src]="img.src" [alt]="img.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
        <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/50 transition-all flex items-end">
          <span class="text-white font-bold text-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">{{img.title}}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- LIGHTBOX -->
  <div *ngIf="activeImage" (click)="activeImage = null"
       class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
    <div (click)="$event.stopPropagation()" class="relative max-w-4xl max-h-[90vh]">
      <button (click)="activeImage = null" class="absolute -top-10 right-0 text-white hover:text-slate-300 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <img [src]="activeImage.src" [alt]="activeImage.title" class="max-h-[85vh] max-w-full object-contain rounded-2xl"/>
      <p class="text-white text-center mt-4 font-medium">{{activeImage.title}}</p>
    </div>
  </div>
</div>
  `,
})
export class GalleryComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.gallery.title, SEO.gallery.description); }
  selectedTab = 'All';
  activeImage: GalleryImage | null = null;
  categories = ['All', 'Office', 'Events', 'Projects'];

  allImages: GalleryImage[] = [
    { id: 1, category: 'Office', src: '/images/gallery/11.webp', title: 'Office' },
    { id: 2, category: 'Office', src: '/images/gallery/2.webp', title: 'Office' },
    { id: 3, category: 'Events', src: '/images/gallery/3.webp', title: 'Annual Meetup 2025' },
    { id: 4, category: 'Events', src: '/images/gallery/4.webp', title: 'Events' },
    { id: 5, category: 'Events', src: '/images/gallery/6.webp', title: 'Events' },
    { id: 6, category: 'Office', src: '/images/gallery/24.webp', title: 'Office' },
    { id: 7, category: 'Events', src: '/images/gallery/14.webp', title: 'Annual Meetup 2025' },
    { id: 8, category: 'Events', src: '/images/gallery/15.webp', title: 'Annual Meetup 2025' },
    { id: 9, category: 'Events', src: '/images/gallery/17.webp', title: 'Annual Meetup 2025' },
    { id: 10, category: 'Events', src: '/images/gallery/20.webp', title: 'Annual Meetup 2025' },
    { id: 11, category: 'Events', src: '/images/gallery/21.webp', title: 'Annual Meetup 2025' },
    { id: 12, category: 'Events', src: '/images/gallery/24.webp', title: 'Annual Meetup 2025' },
    { id: 13, category: 'Events', src: '/images/gallery/27.webp', title: 'Annual Meetup 2025' },
    { id: 14, category: 'Projects', src: '/images/gallery/28.webp', title: 'Annual Meetup 2025' },
  ];

  get filteredImages() {
    return this.selectedTab === 'All' ? this.allImages : this.allImages.filter(img => img.category === this.selectedTab);
  }
}
