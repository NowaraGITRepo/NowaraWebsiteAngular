import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';

@Component({ selector: 'app-supermarket', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class SupermarketComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() {
    this.seo.update({
      title: 'ERP for Supermarkets & Grocery Retail — Dynamics 365 | Nowara Infotech',
      description: 'Nowara Infotech delivers Microsoft Dynamics 365 ERP for supermarkets and grocery retail. Manage inventory, POS, promotions, and supply chain on one platform.',
      keywords: 'supermarket ERP, grocery ERP, retail ERP India UAE, Dynamics 365 supermarket, LS Central grocery',
    }, 'supermarket-erp');
  }
  config: IndustryPageConfig = {
    badge: 'Grocery & Supermarket ERP',
    heroTitle: 'Run Every Aisle',
    heroTitleHighlight: 'on One Platform.',
    heroDesc: 'From fresh produce and cold-chain logistics to loyalty programs and multi-store operations — Nowara Infotech brings Microsoft Dynamics 365 to grocery retail.',
    heroCta: 'Book Free Consultation',
    heroImage: '/images/retail/hero-commerce.webp',
    capabilitiesTitle: 'Supermarket ERP Capabilities',
    capabilities: [
      { title: 'Multi-Store POS',          desc: 'Centralised POS management across all branches with real-time sales sync and offline mode for uninterrupted operations.',         icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>' },
      { title: 'Fresh & Perishables',       desc: 'Automated expiry tracking, FIFO rotation, and waste management for fresh produce, dairy, bakery, and meat departments.',           icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/></svg>' },
      { title: 'Supplier Management',       desc: 'Streamline purchase orders, GRN, and vendor payments. Automate replenishment triggers based on real-time stock levels.',            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>' },
      { title: 'Promotions & Pricing',      desc: 'Run category-level promotions, combo deals, and member pricing with automated billing rules applied at checkout.',                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>' },
      { title: 'Loyalty & Membership',      desc: 'Built-in loyalty points, tiered memberships, and cashback programs that drive repeat footfall and higher basket size.',           icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>' },
      { title: 'Financial Consolidation',   desc: 'Merge P&L, inventory valuation, and vendor payables across all stores into a single financial view for the head office.',       icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
    ],
    industriesTitle: 'Supermarket Segments We Serve',
    industries: [
      'Hypermarkets & Supermarkets', 'Convenience Stores', 'Wholesale Cash & Carry',
      'Organic & Specialty Grocery', 'Online Grocery Delivery', 'Multi-brand Retail Chains',
    ],
    stat1Value: '40%', stat1Label: 'Shrinkage Reduction',
    stat2Value: '3x',  stat2Label: 'Faster Checkout',
    workflowTitle: 'Supermarket Operations Flow',
    steps: [
      { step: '01', title: 'Product & Category Setup',   desc: 'Define item master, barcodes, pricing tiers, and department hierarchy.' },
      { step: '02', title: 'Supplier & Purchase Orders', desc: 'Automate PO generation based on min/max stock levels and lead times.' },
      { step: '03', title: 'Receiving & Shelf Stocking', desc: 'GRN with batch/lot tracking and automated shelf replenishment alerts.' },
      { step: '04', title: 'POS & Customer Checkout',    desc: 'Fast checkout with barcode scanning, loyalty redemption, and split payment.' },
      { step: '05', title: 'Analytics & Reporting',      desc: 'Real-time dashboards for sales, shrinkage, basket size, and category performance.' },
    ],
    compareRows: [
      { feature: 'Inventory Visibility',   standard: 'Manual Stock Counts',   dynamics: 'Real-time Across All Stores' },
      { feature: 'Expiry Management',      standard: 'Paper-based Tracking',  dynamics: 'Automated FIFO & Alerts'    },
      { feature: 'Promotions',             standard: 'Manual Price Changes',   dynamics: 'Automated Promotion Engine' },
      { feature: 'Loyalty Program',        standard: 'Separate System',        dynamics: 'Integrated at POS'          },
    ],
    compareTitle: 'Why Dynamics 365 for Supermarkets?',
    compareSubtitle: 'The difference between disconnected retail systems and an integrated ERP.',
    formTitle: 'Transform Your',
    formSubTitle: 'Supermarket Operations.',
    formDesc: 'Talk to our retail ERP specialists and get a tailored walkthrough for your grocery business.',
  };
}
