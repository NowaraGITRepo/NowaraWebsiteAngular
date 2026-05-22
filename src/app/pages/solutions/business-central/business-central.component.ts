import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-business-central', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class BusinessCentralComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.businessCentral.title, SEO.businessCentral.description); }
  config: IndustryPageConfig = {
    badge: 'Microsoft Dynamics 365', heroTitle: 'One Platform.', heroTitleHighlight: 'Total Control.',
    heroDesc: 'Streamline your finance, sales, and operations with Business Central. Expertly architected cloud ecosystems for modern enterprises.',
    heroCta: 'Get Started', heroImage: '/images/microsoft/bc.webp',
    capabilitiesTitle: 'Business Central Capabilities',
    capabilities: [
      { title: 'Financial Management', desc: 'General ledger, budgeting, bank reconciliation, and cash flow forecasting.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
      { title: 'Sales & CRM', desc: 'Manage the full sales cycle from lead to cash with built-in CRM.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' },
      { title: 'Inventory & Warehousing', desc: 'Multi-location inventory with directed pick, put-away, and bin management.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>' },
      { title: 'Project Management', desc: 'Job costing, time and materials billing, and resource utilisation tracking.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>' },
      { title: 'Manufacturing', desc: 'Light manufacturing with production orders, BOMs, and capacity planning.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>' },
      { title: 'Power BI Integration', desc: 'Native Power BI dashboards for real-time business intelligence.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
    ],
    industriesTitle: 'Who Uses Business Central',
    industries: ['SMBs & Mid-market', 'Distributors', 'Service Companies', 'Light Manufacturers', 'Professional Services', 'Non-Profits'],
    stat1Value: '99.9%', stat1Label: 'Cloud Uptime', stat2Value: '3x', stat2Label: 'ROI in 3 Years',
    workflowTitle: 'BC Implementation Journey',
    steps: [
      { step: '01', title: 'Fit-Gap Analysis', desc: 'Assess your current processes vs Business Central capabilities.' },
      { step: '02', title: 'Setup & Configuration', desc: 'Configure company, dimensions, and chart of accounts.' },
      { step: '03', title: 'Data Migration', desc: 'Migrate customers, vendors, items, and opening balances.' },
      { step: '04', title: 'Training & UAT', desc: 'Train your team and validate all business processes.' },
      { step: '05', title: 'Go-Live & Hypercare', desc: 'Launch with full support from our Nowara BC team.' },
    ],
    compareRows: [
      { feature: 'Deployment', standard: 'On-premise Only', dynamics: 'Cloud / Hybrid / On-premise' },
      { feature: 'Updates', standard: 'Manual / Costly', dynamics: 'Automatic Cloud Updates' },
      { feature: 'Integration', standard: 'Complex APIs', dynamics: 'Native Microsoft 365 & Teams' },
      { feature: 'Scalability', standard: 'Re-implement to Grow', dynamics: 'Scales with Your Business' },
    ],
    formTitle: 'Grow Smarter,', formSubTitle: 'Go Central.',
    formDesc: 'Book your free Business Central demo with Nowara\'s certified BC consultants.',
  };
}
