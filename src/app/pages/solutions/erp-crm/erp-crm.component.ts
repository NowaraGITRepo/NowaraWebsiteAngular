import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-erp-crm', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class ErpCrmComponent {
  config: IndustryPageConfig = {
    badge: 'Implementation Partner', heroTitle: 'ERP & CRM', heroTitleHighlight: 'Implementations',
    heroDesc: 'End-to-end ERP and CRM implementation services. From discovery to go-live, Nowara manages every phase of your Dynamics 365 deployment.',
    heroCta: 'Start Implementation', heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Implementation Services',
    capabilities: [
      { title: 'Project Discovery', desc: 'Deep-dive workshops to document requirements and map processes.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>' },
      { title: 'Solution Design', desc: 'Blueprint the architecture, integrations, and customisation scope.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>' },
      { title: 'Configuration & Build', desc: 'Configure Dynamics 365, develop custom extensions, and integrate systems.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' },
      { title: 'Data Migration', desc: 'Clean, transform, and migrate data from legacy systems.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 1.105 2.239 2 5 2s5-.895 5-2V7m-10 0c0-1.105 2.239-2 5-2s5 .895 5 2"/></svg>' },
      { title: 'Testing & UAT', desc: 'Structured testing cycles to validate all business scenarios.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
      { title: 'Go-Live & Hypercare', desc: 'Managed go-live with dedicated support for first 90 days.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
    ],
    industriesTitle: 'Clients We Serve',
    industries: ['SMBs', 'Mid-market Companies', 'Enterprises', 'Government Bodies', 'Non-Profits', 'Start-ups'],
    stat1Value: '200+', stat1Label: 'Implementations', stat2Value: '98%', stat2Label: 'On-Time Delivery',
    workflowTitle: 'Our Implementation Methodology',
    steps: [
      { step: '01', title: 'Kickoff & Planning', desc: 'Align project scope, timeline, and team responsibilities.' },
      { step: '02', title: 'Process Mapping', desc: 'Document as-is and to-be workflows in detail.' },
      { step: '03', title: 'Build & Configure', desc: 'Iterative sprints for configuration and development.' },
      { step: '04', title: 'Test & Validate', desc: 'System integration testing and user acceptance testing.' },
      { step: '05', title: 'Go-Live', desc: 'Cutover, hypercare support, and handover to operations.' },
    ],
    compareRows: [
      { feature: 'Methodology', standard: 'Waterfall / Ad-hoc', dynamics: 'Agile / Sure Step' },
      { feature: 'Risk Management', standard: 'Reactive', dynamics: 'Proactive Risk Register' },
      { feature: 'Training', standard: 'One-time Session', dynamics: 'Role-based Continuous Training' },
      { feature: 'Post-Launch', standard: 'Minimal Support', dynamics: '90-Day Hypercare' },
    ],
    formTitle: 'Let\'s Build Your', formSubTitle: 'ERP Together.',
    formDesc: 'Get a free project scoping session with our certified Dynamics 365 implementation team.',
  };
}
