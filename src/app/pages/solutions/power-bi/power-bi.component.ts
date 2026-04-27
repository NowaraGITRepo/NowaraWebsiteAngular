import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-power-bi', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class PowerBiComponent {
  config: IndustryPageConfig = {
    badge: 'Microsoft Power BI', heroTitle: 'Power BI &', heroTitleHighlight: 'Data Analytics',
    heroDesc: 'Transform your raw business data into beautiful, interactive dashboards. Nowara builds custom Power BI solutions that drive smarter decisions across your organisation.',
    heroCta: 'See Your Data Clearly', heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Power BI Services',
    capabilities: [
      { title: 'Custom Dashboards', desc: 'Role-specific dashboards designed for executives, managers, and operations.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
      { title: 'ERP & CRM Integration', desc: 'Connect Power BI to Dynamics 365, SAP, Oracle, and other ERP systems.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
      { title: 'Real-time Analytics', desc: 'Live data streaming dashboards for operations, finance, and sales.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
      { title: 'Data Modelling', desc: 'Star schema data models and DAX measures for complex business logic.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"/></svg>' },
      { title: 'Embedded Analytics', desc: 'Embed Power BI reports inside your own applications and portals.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' },
      { title: 'AI & Predictive Analytics', desc: 'Leverage Power BI\'s AI visuals and Azure ML for predictive insights.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>' },
    ],
    industriesTitle: 'Analytics Use Cases',
    industries: ['Financial Reporting', 'Sales Performance', 'Supply Chain KPIs', 'HR Analytics', 'Manufacturing OEE', 'Retail Analytics'],
    stat1Value: '10x', stat1Label: 'Faster Insights', stat2Value: '90%', stat2Label: 'Report Automation',
    workflowTitle: 'Power BI Delivery Process',
    steps: [
      { step: '01', title: 'Requirements', desc: 'Define KPIs, report consumers, and data sources.' },
      { step: '02', title: 'Data Architecture', desc: 'Design data model and ETL/ELT pipelines.' },
      { step: '03', title: 'Dashboard Build', desc: 'Build reports with brand-aligned visuals.' },
      { step: '04', title: 'UAT & Feedback', desc: 'Iterate with stakeholders to refine insights.' },
      { step: '05', title: 'Deploy & Train', desc: 'Publish to Power BI Service and train end users.' },
    ],
    compareRows: [
      { feature: 'Speed to Insight', standard: 'Hours / Days', dynamics: 'Real-time Dashboards' },
      { feature: 'Data Sources', standard: 'Single System', dynamics: '100+ Native Connectors' },
      { feature: 'Self-Service', standard: 'IT-dependent', dynamics: 'Business User Empowered' },
      { feature: 'Collaboration', standard: 'Email Reports', dynamics: 'Live Shared Dashboards' },
    ],
    formTitle: 'See Your Data,', formSubTitle: 'Act Faster.',
    formDesc: 'Get a free Power BI dashboard prototype from our analytics team.',
  };
}
