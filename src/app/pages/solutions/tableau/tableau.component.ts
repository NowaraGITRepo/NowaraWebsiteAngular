import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-tableau', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class TableauComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.tableau.title, SEO.tableau.description); }
  config: IndustryPageConfig = {
    badge: 'Tableau Analytics', heroTitle: 'Tableau', heroTitleHighlight: 'Data Visualisation',
    heroDesc: 'Nowara Infotech builds powerful Tableau dashboards that help organisations see and understand their data — from operational KPIs to executive scorecards.',
    heroCta: 'Visualise Your Data', heroImage: '/images/tableau/tableau-dashboard.webp',
    capabilitiesTitle: 'Tableau Services',
    capabilities: [
      { title: 'Interactive Dashboards', desc: 'Drag-and-drop dashboards with filters, drill-downs, and tooltips.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
      { title: 'Tableau Server & Cloud', desc: 'Enterprise deployment on Tableau Server or Tableau Cloud.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>' },
      { title: 'Calculated Fields', desc: 'Complex business calculations and LOD expressions for accurate KPIs.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>' },
      { title: 'Data Blending', desc: 'Combine multiple data sources into unified Tableau views.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
      { title: 'Tableau Prep', desc: 'Data cleaning and reshaping pipelines using Tableau Prep Builder.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>' },
      { title: 'Embedded Analytics', desc: 'Embed Tableau views in internal portals and customer-facing apps.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' },
    ],
    industriesTitle: 'Tableau Use Cases',
    industries: ['Sales & Revenue', 'Supply Chain', 'HR Analytics', 'Finance & FP&A', 'Marketing ROI', 'Healthcare KPIs'],
    stat1Value: '4x', stat1Label: 'Decision Speed', stat2Value: '75%', stat2Label: 'Report Build Time Saved',
    workflowTitle: 'Tableau Delivery Flow',
    steps: [
      { step: '01', title: 'Requirements', desc: 'Understand KPIs, audience, and data sources.' },
      { step: '02', title: 'Data Preparation', desc: 'Clean and shape data using Tableau Prep.' },
      { step: '03', title: 'Workbook Development', desc: 'Build visualisations, calculated fields, and dashboards.' },
      { step: '04', title: 'Review & Iterate', desc: 'Stakeholder review and dashboard refinement.' },
      { step: '05', title: 'Publish & Train', desc: 'Publish to Tableau Server/Cloud and train users.' },
    ],
    formTitle: 'Visualise Smarter,', formSubTitle: 'Decide Faster.',
    formDesc: 'Get a free Tableau dashboard prototype from our certified Tableau developers.',
  };
}
