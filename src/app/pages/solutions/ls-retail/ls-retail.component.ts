import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-ls-retail', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class LsRetailComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.lsRetail.title, SEO.lsRetail.description); }
  config: IndustryPageConfig = {
    badge: 'Unified Commerce Platform', heroTitle: 'LS Central', heroTitleHighlight: 'Ecosystem',
    heroDesc: 'Bridge the gap between your retail front-end and back-office ERP. Explore our specialized industry modules designed for Microsoft Dynamics 365.',
    heroCta: 'System Overview', heroImage: '/images/lscentral/lscentral.webp',
    capabilitiesTitle: 'LS Central Capabilities',
    capabilities: [
      { title: 'Unified POS', desc: 'Fast, reliable POS with offline capability and seamless ERP integration.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>' },
      { title: 'Inventory Management', desc: 'Real-time stock visibility across stores, warehouses, and online channels.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>' },
      { title: 'Loyalty Programs', desc: 'Flexible loyalty schemes, member management, and targeted promotions.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>' },
      { title: 'eCommerce Integration', desc: 'Unified online and in-store operations with click & collect support.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>' },
      { title: 'Food & Restaurant', desc: 'Recipe management, table layouts, kitchen display systems for F&B.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>' },
      { title: 'Analytics & Reporting', desc: 'Real-time dashboards for sales, margin, and customer behaviour.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
    ],
    industriesTitle: 'LS Central Verticals',
    industries: ['Fashion Retail', 'Electronics', 'Grocery Retail', 'Restaurants & Cafes', 'Pharmacies', 'Hospitality'],
    stat1Value: '65K+', stat1Label: 'POS Terminals', stat2Value: '160+', stat2Label: 'Countries Deployed',
    workflowTitle: 'LS Central Deployment Flow',
    steps: [
      { step: '01', title: 'Retail Audit', desc: 'Assess your current POS, inventory, and loyalty setup.' },
      { step: '02', title: 'LS Central Design', desc: 'Configure store hierarchy, product catalogue, and pricing.' },
      { step: '03', title: 'POS Hardware Setup', desc: 'Install and configure POS terminals and peripherals.' },
      { step: '04', title: 'Staff Training', desc: 'Train cashiers, store managers, and back-office users.' },
      { step: '05', title: 'Go-Live & Support', desc: 'Live launch with dedicated Nowara support team.' },
    ],
    compareRows: [
      { feature: 'ERP Integration', standard: 'Complex Connectors', dynamics: 'Native Business Central' },
      { feature: 'Omnichannel', standard: 'Separate Systems', dynamics: 'Unified Platform' },
      { feature: 'Offline POS', standard: 'Connectivity Required', dynamics: 'Works Offline' },
      { feature: 'Loyalty', standard: 'Third-party Add-on', dynamics: 'Built-in Loyalty Engine' },
    ],
    formTitle: 'Retail Reimagined,', formSubTitle: 'Powered by LS.',
    formDesc: 'Get a free LS Central demo from Nowara\'s certified retail consultants.',
  };
}
