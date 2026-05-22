import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({
  selector: 'app-case-study-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  template: `
<div class="min-h-screen bg-white">
  <!-- HERO -->
  <div class="relative h-64 overflow-hidden">
    <img src="/images/casestudy/case-studies-erpimage.webp" alt="Case Studies" class="w-full h-full object-cover"/>
    <div class="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
      <h1 class="text-5xl font-black text-white">Case Studies</h1>
    </div>
  </div>

  <!-- CASE STUDY GRID -->
  <div class="max-w-7xl mx-auto px-6 lg:px-20 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div *ngFor="let cs of displayedCases" class="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all group">
        <div class="h-52 overflow-hidden">
          <img [src]="cs.img" [alt]="cs.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-bold text-slate-900 mb-4">{{cs.title}}</h3>
          <a [routerLink]="['/case-study-details', cs.id]"
             class="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-secondary transition-colors">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- PAGINATION -->
    <div *ngIf="totalPages > 1" class="flex justify-center gap-3 mt-16">
      <button *ngFor="let p of pages" (click)="currentPage = p"
              [class]="'px-5 py-2 rounded-xl font-bold text-sm transition-all ' + (currentPage === p ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200')">
        {{p}}
      </button>
    </div>
  </div>
</div>
  `,
})
export class CaseStudyListComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.caseStudy.title, SEO.caseStudy.description); }
  caseStudyList = [
    { id: '1', title: 'Food & Beverages (South Africa)', img: '/images/casestudy/case-studies foodbeverage.webp' },
    { id: '2', title: 'Dynamics 365 Business Central', img: '/images/casestudy/case-studies-erpimage.webp' },
    { id: '3', title: 'LS Central For Pharmacy', img: '/images/casestudy/case-studies-img3.webp' },
    { id: '4', title: 'Nowara Brochure', img: '/images/casestudy/casestudiesimg-4.webp' },
    { id: '5', title: 'Microsoft Dynamics ERP For the Pharmacy Industry', img: '/images/casestudy/casestudies-img5.webp' },
  ];
  currentPage = 1;
  itemsPerPage = 6;

  get displayedCases() {
    return this.caseStudyList.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }
  get totalPages() { return Math.ceil(this.caseStudyList.length / this.itemsPerPage); }
  get pages() { return Array.from({ length: this.totalPages }, (_, i) => i + 1); }
}
