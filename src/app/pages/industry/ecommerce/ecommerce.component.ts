import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-ecommerce', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class EcommerceComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.ecommerce.title, SEO.ecommerce.description); }
  config: IndustryPageConfig = {
    badge: 'Unified Commerce Platform', heroTitle: 'The Operating System', heroTitleHighlight: 'for Modern Retail.',
    heroDesc: 'Unify your storefront, marketplace, and warehouse into a single source of truth. Power your omnichannel retail operations with Microsoft Dynamics 365.',
    heroCta: 'Book Free Audit', heroImage: '/images/retail/hero-commerce.webp',
    capabilitiesTitle: 'Specialized Retail Solutions',
    capabilities: [
      { title: 'Real-time Inventory', desc: 'Sync stock across 50+ channels instantly with live visibility across all stores, warehouses, and online channels.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>' },
      { title: 'Unified Profiles', desc: 'Combine in-store and online customer history into a single 360-degree view for personalized engagement.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' },
      { title: 'AI Fulfillment', desc: 'Auto-route orders for 2-day delivery with AI-powered replenishment to avoid stockouts and overstocking.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
      { title: 'Global Tax Engine', desc: 'Automate VAT, GST, and Sales Tax across all jurisdictions with built-in compliance for 40+ countries.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>' },
      { title: 'Loyalty & CRM', desc: 'Drive repeat purchases with integrated loyalty programs and deep customer insights tied to every transaction.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>' },
      { title: 'Financial Integration', desc: 'Automatic posting of sales, returns, and payments to general ledger across all channels simultaneously.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
    ],
    industriesTitle: 'Retail Segments',
    industries: ['Fashion Retail', 'Electronics Retail', 'Grocery & Supermarkets', 'Furniture Stores', 'Pharmacies', 'Online Marketplaces'],
    stat1Value: '35%', stat1Label: 'Sales Growth', stat2Value: '28%', stat2Label: 'Inventory Reduction',
    workflowTitle: 'Retail Operations Flow',
    steps: [
      { step: '01', title: 'Product Setup', desc: 'Create products with variants, pricing, and category hierarchy.' },
      { step: '02', title: 'Channel Configuration', desc: 'Set up stores, online channels, and POS terminals.' },
      { step: '03', title: 'Inventory Replenishment', desc: 'AI-driven replenishment across all locations.' },
      { step: '04', title: 'Sales & Checkout', desc: 'Process sales across POS, web, and mobile seamlessly.' },
      { step: '05', title: 'Reporting & Analytics', desc: 'Real-time dashboards for sales, inventory, and customer data.' },
    ],
    compareRows: [
      { feature: 'Channel Management', standard: 'Separate Systems', dynamics: 'Unified Omnichannel' },
      { feature: 'Inventory Visibility', standard: 'Batch Updates', dynamics: 'Real-time Across All Channels' },
      { feature: 'Customer Data', standard: 'Siloed CRM', dynamics: 'Integrated Loyalty & CRM' },
      { feature: 'Replenishment', standard: 'Manual Orders', dynamics: 'AI-driven Auto-replenishment' },
    ],
    formTitle: 'Ready to', formSubTitle: 'Modernize?',
    formDesc: 'Schedule a session with our solutions architects to audit your retail workflow and discover hidden efficiencies.',
  };
}
