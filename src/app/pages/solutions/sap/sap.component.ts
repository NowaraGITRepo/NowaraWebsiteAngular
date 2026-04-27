import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-sap', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class SapComponent {
  config: IndustryPageConfig = {
    badge: 'SAP Services', heroTitle: 'SAP Web', heroTitleHighlight: 'Services & ERP',
    heroDesc: 'Nowara Infotech provides SAP consulting, implementation, and integration services — helping organisations leverage SAP\'s full ecosystem for enterprise transformation.',
    heroCta: 'Explore SAP Services', heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'SAP Services Offered',
    capabilities: [
      { title: 'SAP S/4HANA', desc: 'Implementation and migration to SAP S/4HANA for next-gen ERP.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 1.105 2.239 2 5 2s5-.895 5-2V7m-10 0c0-1.105 2.239-2 5-2s5 .895 5 2"/></svg>' },
      { title: 'SAP Integration', desc: 'API and middleware integration between SAP and third-party systems.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
      { title: 'SAP Modules', desc: 'FI, CO, MM, SD, PP, QM, PM — implementation and customisation.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>' },
      { title: 'SAP ABAP Development', desc: 'Custom ABAP programs, reports, and enhancements for SAP environments.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' },
      { title: 'SAP Support', desc: 'Ongoing SAP basis administration, monitoring, and incident resolution.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>' },
      { title: 'SAP Analytics', desc: 'SAP BW, SAC, and embedded analytics for business intelligence.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
    ],
    industriesTitle: 'SAP Client Base',
    industries: ['Large Enterprises', 'Manufacturing', 'Oil & Gas', 'Utilities', 'Banking & Finance', 'Public Sector'],
    stat1Value: '30+', stat1Label: 'SAP Projects', stat2Value: '100%', stat2Label: 'Client Satisfaction',
    workflowTitle: 'SAP Engagement Flow',
    steps: [
      { step: '01', title: 'SAP Assessment', desc: 'Evaluate current SAP landscape and improvement areas.' },
      { step: '02', title: 'Project Scoping', desc: 'Define modules, integrations, and timeline.' },
      { step: '03', title: 'Configuration', desc: 'Configure SAP to match your business processes.' },
      { step: '04', title: 'Custom Development', desc: 'ABAP enhancements and reports as needed.' },
      { step: '05', title: 'Go-Live & AMS', desc: 'Launch with ongoing application managed services.' },
    ],
    compareRows: [
      { feature: 'ERP Scale', standard: 'Generic ERP', dynamics: 'Enterprise-grade SAP S/4HANA' },
      { feature: 'Analytics', standard: 'Basic Reporting', dynamics: 'SAP BW / SAC Advanced BI' },
      { feature: 'Integration', standard: 'Point-to-point', dynamics: 'SAP Integration Suite' },
      { feature: 'Support', standard: 'Ticket-based Only', dynamics: 'Proactive AMS Model' },
    ],
    formTitle: 'Maximise Your', formSubTitle: 'SAP Investment.',
    formDesc: 'Speak with Nowara\'s SAP consultants about optimising your SAP landscape today.',
  };
}
