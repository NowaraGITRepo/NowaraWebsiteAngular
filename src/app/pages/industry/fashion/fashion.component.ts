import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-fashion', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class FashionComponent {
  config: IndustryPageConfig = {
    badge: 'Fashion & Apparel ERP', heroTitle: 'Fashion', heroTitleHighlight: 'ERP',
    heroDesc: 'Manage SKU explosions, seasonal collections, fabric sourcing, and fast fashion cycles with a purpose-built ERP for the apparel and textile industry.',
    heroCta: 'Design Your ERP', heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Fashion ERP Capabilities',
    capabilities: [
      { title: 'SKU Matrix Management', desc: 'Manage style, colour, and size combinations with variant-level tracking.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>' },
      { title: 'Seasonal Collection Planning', desc: 'Plan and manage seasonal lines with pre-season and in-season buying tools.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
      { title: 'Fabric & Trim Sourcing', desc: 'Manage fabric suppliers, lead times, and quality approvals centrally.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>' },
      { title: 'Production Order Management', desc: 'Manage in-house and outsourced production with cut, make, trim tracking.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>' },
      { title: 'Multi-Channel Sales', desc: 'Sell across wholesale, retail, and eCommerce with unified inventory.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>' },
      { title: 'Retail & POS Integration', desc: 'Connect your ERP to retail stores with real-time stock visibility.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>' },
    ],
    industriesTitle: 'Fashion Segments',
    industries: ['Apparel Brands', 'Textile Mills', 'Garment Exporters', 'Footwear Brands', 'Luxury Fashion', 'Fast Fashion Retailers'],
    stat1Value: '25%', stat1Label: 'Faster Time-to-Market', stat2Value: '30%', stat2Label: 'Inventory Accuracy',
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
    formTitle: 'Style Your', formSubTitle: 'Operations.',
    formDesc: 'Speak with our fashion ERP consultants about your Dynamics 365 journey.',
  };
}
