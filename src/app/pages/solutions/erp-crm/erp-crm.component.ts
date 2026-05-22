import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-erp-crm', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class ErpCrmComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.erpCrm.title, SEO.erpCrm.description); }
  config: IndustryPageConfig = {
    badge: 'Dynamics 365 Customer Engagement', heroTitle: 'Turn Relationships', heroTitleHighlight: 'Into Revenue.',
    heroDesc: 'Experience the next generation of CRM. Beyond a database, it\'s an AI-powered growth engine that predicts customer needs and automates the journey from lead to loyalty.',
    heroCta: 'Book a Demo', heroImage: '/images/microsoft/crm.webp',
    capabilitiesTitle: 'CRM Lifecycle Modules',
    capabilities: [
      { title: 'Lead & Campaign', desc: 'Capture interest and execute multi-channel marketing with precision targeting and AI-driven lead scoring.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' },
      { title: 'Opportunity & Quote', desc: 'Automate sales sequences and generate accurate quotes instantly. Guide reps through every step of the journey.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>' },
      { title: 'Social Selling', desc: 'Full LinkedIn Sales Navigator integration with social listening and relationship intelligence across platforms.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>' },
      { title: 'Invoice & Payment', desc: 'Integrate billing directly into the customer lifecycle for faster closing with automated invoice generation.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
      { title: 'Live Forecasting', desc: 'Real-time pipeline data at your fingertips with predictive analytics and multi-touch attribution models.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>' },
      { title: 'Delivery & Support', desc: 'Ensure post-sale loyalty with real-time tracking, automated service cases, and AI-driven routing.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
    ],
    industriesTitle: 'Industries We Serve',
    industries: ['Healthcare', 'Retail & eCommerce', 'Manufacturing', 'Finance & Banking', 'Non-Profit', 'Professional Services'],
    stat1Value: '98%', stat1Label: 'CSAT Increase', stat2Value: '-40%', stat2Label: 'Resolution Time',
    workflowTitle: 'Your CRM Success Blueprint',
    steps: [
      { step: '01', title: 'Audit', desc: 'We analyze your current customer touchpoints and existing CRM setup.' },
      { step: '02', title: 'Define', desc: 'Setting KPIs for lead conversion, retention, and revenue growth.' },
      { step: '03', title: 'Deploy', desc: 'Agile implementation of your customized CRM environment.' },
      { step: '04', title: 'Optimize', desc: 'Ongoing training, dashboard refinement, and AI tuning.' },
      { step: '05', title: 'Scale', desc: 'Expand usage across teams with advanced analytics and integrations.' },
    ],
    compareRows: [
      { feature: 'Lead Scoring', standard: 'Manual / Rule-based', dynamics: 'AI-Powered Predictive Scoring' },
      { feature: 'Customer View', standard: 'Siloed by Department', dynamics: '360-Degree Unified Profile' },
      { feature: 'Forecasting', standard: 'Static Spreadsheets', dynamics: 'Real-time Pipeline Intelligence' },
      { feature: 'Post-Sale', standard: 'Disconnected Support', dynamics: 'Integrated Service & Loyalty' },
    ],
    formTitle: 'Ready to', formSubTitle: 'Transform?',
    formDesc: 'Get expert CRM strategy, zero-loss data migration, and custom user adoption programs tailored to your business.',
  };
}
