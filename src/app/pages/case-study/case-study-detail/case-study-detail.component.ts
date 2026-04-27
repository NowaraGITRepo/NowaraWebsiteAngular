import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface CaseStudy {
  id: string;
  title: string;
  img: string;
  overview: string;
}

@Component({
  selector: 'app-case-study-detail',
  standalone: true,
  imports: [NgIf, RouterLink],
  template: `
<div class="min-h-screen bg-white">
  <div *ngIf="!caseStudy" class="text-center py-32">
    <h2 class="text-3xl font-black text-slate-900 mb-4">Case Study Not Found</h2>
    <a routerLink="/case-study" class="text-primary font-bold hover:underline">← Back to Case Studies</a>
  </div>

  <div *ngIf="caseStudy">
    <!-- HERO IMAGE -->
    <div class="relative h-64 md:h-96 overflow-hidden">
      <img [src]="caseStudy.img" [alt]="caseStudy.title" class="w-full h-full object-cover"/>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
        <div class="max-w-7xl w-full mx-auto px-6 lg:px-20 pb-12">
          <a routerLink="/case-study" class="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm transition-colors mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12"/></svg>
            Back to Case Studies
          </a>
          <h1 class="text-3xl md:text-5xl font-black text-white">{{caseStudy.title}}</h1>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="max-w-4xl mx-auto px-6 py-16">
      <div class="bg-blue-50 border-l-4 border-primary rounded-r-2xl p-8 mb-12">
        <h2 class="text-xl font-black text-slate-900 mb-2">Overview</h2>
        <p class="text-slate-700 leading-relaxed whitespace-pre-line">{{caseStudy.overview}}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
          <p class="text-3xl font-black text-primary mb-1">100%</p>
          <p class="text-sm text-slate-500 font-medium">Data Integrity</p>
        </div>
        <div class="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
          <p class="text-3xl font-black text-primary mb-1">Zero</p>
          <p class="text-sm text-slate-500 font-medium">Downtime</p>
        </div>
        <div class="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
          <p class="text-3xl font-black text-primary mb-1">3x</p>
          <p class="text-sm text-slate-500 font-medium">ROI Improvement</p>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a routerLink="/contact-us" class="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary transition-colors inline-block shadow-lg">
          Start a Similar Project
        </a>
      </div>
    </div>
  </div>
</div>
  `,
})
export class CaseStudyDetailComponent implements OnInit {
  caseStudy: CaseStudy | null = null;

  private data: CaseStudy[] = [
    { id: '1', title: 'Food & Beverages (South Africa)', img: '/images/casestudy/case-studies foodbeverage.webp', overview: 'The Food & Beverage industry in South Africa operates in a highly competitive market with strict quality standards and complex supply chain requirements. Managing procurement, production, and distribution efficiently is critical to maintaining product freshness and controlling operational costs.\n\nTo stay competitive, organizations in this sector require real-time visibility into inventory levels, demand patterns, and production planning, enabling them to respond quickly to market changes and customer expectations.' },
    { id: '2', title: 'Dynamics 365 Business Central', img: '/images/casestudy/case-studies-erpimage.webp', overview: 'Many growing businesses struggle with disconnected systems that limit visibility across finance, sales, and operations. Manual processes often lead to delays, reporting inaccuracies, and reduced operational efficiency.\n\nMicrosoft Dynamics 365 Business Central provides a unified platform that streamlines business processes, improves decision-making, and supports scalable growth through automation and real-time insights.' },
    { id: '3', title: 'LS Central For Pharmacy', img: '/images/casestudy/case-studies-img3.webp', overview: 'Pharmacy businesses face unique challenges such as regulatory compliance, batch tracking, and expiry management. Manual systems make it difficult to maintain accuracy while handling high transaction volumes.\n\nLS Central for Pharmacy enables centralized control over inventory, pricing, and compliance while ensuring efficient store operations and improved customer service across multiple locations.' },
    { id: '4', title: 'Nowara Brochure', img: '/images/casestudy/casestudiesimg-4.webp', overview: 'Organizations often require a consolidated overview of their solutions, services, and industry expertise to effectively communicate value to prospective clients. Disparate marketing materials can dilute brand messaging.\n\nThe Nowara Brochure presents a clear and structured representation of offerings, helping businesses understand solution capabilities and how they align with industry-specific requirements.' },
    { id: '5', title: 'Microsoft Dynamics ERP For the Pharmacy Industry', img: '/images/casestudy/casestudies-img5.webp', overview: 'The pharmacy industry demands precise inventory control, regulatory compliance, and seamless integration between retail and back-office operations. Legacy systems often fail to support these complex requirements.\n\nMicrosoft Dynamics ERP empowers pharmacy businesses with end-to-end visibility, automated processes, and data-driven insights that enhance operational efficiency and support sustainable growth.' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.caseStudy = this.data.find(d => d.id === id) || null;
  }
}
