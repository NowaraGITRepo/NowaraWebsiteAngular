import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-msd365', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class Msd365Component {
  config: IndustryPageConfig = {
    badge: 'Microsoft Dynamics 365', heroTitle: 'Finance &', heroTitleHighlight: 'Operations',
    heroDesc: 'Microsoft Dynamics 365 Finance & Operations delivers enterprise-grade financial management, supply chain control, and manufacturing capabilities on a single global platform.',
    heroCta: 'Explore F&O', heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Finance & Operations Capabilities',
    capabilities: [
      { title: 'Financial Management', desc: 'Multi-currency, multi-entity financials with real-time consolidation and reporting.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
      { title: 'Supply Chain Management', desc: 'End-to-end procurement, inventory, and logistics management.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>' },
      { title: 'Manufacturing', desc: 'Discrete, process, and lean manufacturing with MRP and scheduling.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>' },
      { title: 'Global Compliance', desc: 'Localisation for 40+ countries with built-in tax and statutory reporting.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>' },
      { title: 'AI & Insights', desc: 'Copilot-powered analytics and intelligent automation across all modules.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>' },
      { title: 'Human Capital Management', desc: 'HR, payroll, and talent management fully integrated with financials.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' },
    ],
    industriesTitle: 'Who Uses F&O',
    industries: ['Large Enterprises', 'Multi-national Groups', 'Manufacturing Firms', 'Distribution Companies', 'Public Sector', 'Retail Chains'],
    stat1Value: '40%', stat1Label: 'Process Automation', stat2Value: '6x', stat2Label: 'Faster Close',
    workflowTitle: 'F&O Implementation Path',
    steps: [
      { step: '01', title: 'Discovery & Design', desc: 'Map current processes to Dynamics 365 capabilities.' },
      { step: '02', title: 'Configuration & Localisation', desc: 'Set up chart of accounts, tax, and compliance rules.' },
      { step: '03', title: 'Data Migration', desc: 'Migrate master data, open balances, and history.' },
      { step: '04', title: 'UAT & Training', desc: 'User acceptance testing and role-based training.' },
      { step: '05', title: 'Go-Live & Support', desc: 'Hypercare support during the first months post-launch.' },
    ],
    compareRows: [
      { feature: 'Financial Consolidation', standard: 'Manual / Excel', dynamics: 'Real-time Multi-entity' },
      { feature: 'Global Compliance', standard: 'Third-party Tools', dynamics: 'Built-in 40+ Localisations' },
      { feature: 'Analytics', standard: 'Static Reports', dynamics: 'AI-powered Copilot Insights' },
      { feature: 'Scalability', standard: 'Limited', dynamics: 'Unlimited Entities & Users' },
    ],
    formTitle: 'Transform Your', formSubTitle: 'Enterprise.',
    formDesc: 'Talk to our Dynamics 365 F&O certified consultants about your global ERP requirements.',
  };
}
