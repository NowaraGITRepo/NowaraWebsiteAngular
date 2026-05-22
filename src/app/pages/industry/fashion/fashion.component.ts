import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-fashion', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class FashionComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.fashion.title, SEO.fashion.description); }
  config: IndustryPageConfig = {
    badge: 'Luxury Technology for Apparel', heroTitle: 'Fashion', heroTitleHighlight: 'Refined.',
    heroDesc: 'In an industry defined by micro-trends and seasonality, manage size-color-style matrices across global supply chains with surgical precision.',
    heroCta: 'Book a Demo', heroImage: '/images/fashion/shopping.webp',
    capabilitiesTitle: 'Fashion ERP Capabilities',
    capabilities: [
      { title: 'Product Lifecycle', desc: 'From initial sketch to tech-pack, track every design iteration and raw material cost. Reduces development cycles by 30%.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>' },
      { title: 'Unified Commerce', desc: 'Connect your flagship stores, e-commerce, and pop-ups with a single inventory pool. Supports multi-currency and international shipping.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>' },
      { title: 'Trend Analytics', desc: 'Predict next season\'s winners with AI-driven insights on size and color demand. Minimize markdowns by optimizing size curves.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
      { title: 'SKU Matrix Management', desc: 'Manage style, colour, and size combinations with variant-level tracking across all collections.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"/></svg>' },
      { title: 'Seasonal Collection Planning', desc: 'Plan and manage seasonal lines with pre-season and in-season buying tools and open-to-buy controls.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
      { title: 'Multi-Channel Sales', desc: 'Sell across wholesale, retail, and eCommerce with unified inventory and omnichannel synchronization.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>' },
    ],
    industriesTitle: 'Fashion Segments',
    industries: ['Apparel Brands', 'Textile Mills', 'Garment Exporters', 'Footwear Brands', 'Luxury Fashion', 'Fast Fashion Retailers'],
    stat1Value: '40%', stat1Label: 'Faster Time-to-Market', stat2Value: '30%', stat2Label: 'Inventory Accuracy',
    workflowTitle: 'Fashion Production Flow',
    steps: [
      { step: '01', title: 'Collection Design', desc: 'Create styles with colour/size matrix and tech packs.' },
      { step: '02', title: 'Sourcing & Sampling', desc: 'Source fabrics, approve samples, and confirm BOM costs.' },
      { step: '03', title: 'Production Planning', desc: 'Release production orders to in-house or outsourced factories.' },
      { step: '04', title: 'Quality & AQL', desc: 'Perform AQL inspections at factory and on receipt.' },
      { step: '05', title: 'Warehouse & Distribution', desc: 'Allocate, pick, and dispatch to channels.' },
    ],
    compareRows: [
      { feature: 'SKU Management', standard: 'Spreadsheets', dynamics: 'Matrix-based Variant Control' },
      { feature: 'Collection Planning', standard: 'Manual Boards', dynamics: 'Integrated PLM Module' },
      { feature: 'Multi-Channel', standard: 'Separate Systems', dynamics: 'Unified Channel Management' },
      { feature: 'Factory Tracking', standard: 'Email & Calls', dynamics: 'Real-time Production Portal' },
    ],
    formTitle: 'Ready to Scale', formSubTitle: 'Your Label?',
    formDesc: 'Request a personal demo with our fashion ERP consultants to see how Dynamics 365 transforms your apparel business.',
  };
}
