import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-ecommerce', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class EcommerceComponent {
  config: IndustryPageConfig = {
    badge: 'Retail & eCommerce ERP', heroTitle: 'Retail &', heroTitleHighlight: 'E-Commerce ERP',
    heroDesc: 'Power your omnichannel retail operations with Microsoft Dynamics 365. Unify POS, inventory, loyalty, and eCommerce in one seamless platform.',
    heroCta: 'Unify Retail Ops', heroImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Retail & eCommerce Capabilities',
    capabilities: [
      { title: 'Unified Commerce Platform', desc: 'Manage in-store, online, and mobile sales channels from a single ERP.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>' },
      { title: 'Real-time Inventory', desc: 'Live stock visibility across all stores, warehouses, and online channels.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>' },
      { title: 'Loyalty & CRM', desc: 'Drive repeat purchases with integrated loyalty programs and customer insights.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>' },
      { title: 'Demand Forecasting', desc: 'AI-powered replenishment to avoid stockouts and overstocking.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>' },
      { title: 'Returns Management', desc: 'Handle returns, exchanges, and refunds seamlessly across channels.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>' },
      { title: 'Financial Integration', desc: 'Automatic posting of sales, returns, and payments to general ledger.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
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
    formTitle: 'Sell Everywhere,', formSubTitle: 'Manage Once.',
    formDesc: 'Get a free Dynamics 365 retail demo and see how unified commerce transforms your business.',
  };
}
