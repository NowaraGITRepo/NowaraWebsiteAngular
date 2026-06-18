import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-google-looker', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class GoogleLookerComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.googleLooker.title, SEO.googleLooker.description); }
  config: IndustryPageConfig = {
    badge: 'Google Looker Analytics', heroTitle: 'Data That', heroTitleHighlight: 'Delivers.',
    heroDesc: 'Empower your teams with self-service insights and a unified semantic layer for all your business data. Data that delivers actionable results.',
    heroCta: 'Get Started', heroImage: '/images/google/google-cloud.webp',
    capabilitiesTitle: 'Google Looker Capabilities',
    capabilities: [
      { title: 'Semantic Layer (LookML)', desc: 'Centralised business logic that ensures everyone works from the same data definitions.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 1.105 2.239 2 5 2s5-.895 5-2V7m-10 0c0-1.105 2.239-2 5-2s5 .895 5 2"/></svg>' },
      { title: 'Self-Service Analytics', desc: 'Business users explore data without writing SQL using Looker Explores.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>' },
      { title: 'Embedded Analytics', desc: 'Embed Looker dashboards inside your SaaS application or customer portal.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' },
      { title: 'BigQuery Integration', desc: 'Native connection to Google BigQuery for fast analytical queries at scale.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
      { title: 'Data Governance', desc: 'Row-level security, field access controls, and centralised metric governance.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Scheduled Delivery', desc: 'Automated report delivery via email, Slack, and webhooks on custom schedules.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
    ],
    industriesTitle: 'Looker Use Cases',
    industries: ['SaaS Companies', 'E-commerce', 'Healthcare Analytics', 'Financial Services', 'Marketing Analytics', 'Supply Chain BI'],
    stat1Value: '5x', stat1Label: 'Query Speed', stat2Value: '80%', stat2Label: 'Reduced Report Time',
    workflowTitle: 'Looker Implementation Path',
    steps: [
      { step: '01', title: 'Data Source Audit', desc: 'Identify all data sources and analytical requirements.' },
      { step: '02', title: 'LookML Modelling', desc: 'Build the semantic layer with views, explores, and measures.' },
      { step: '03', title: 'Dashboard Design', desc: 'Create user-friendly dashboards for each business area.' },
      { step: '04', title: 'Access Control', desc: 'Configure row-level security and user groups.' },
      { step: '05', title: 'Training & Adoption', desc: 'Empower business users to self-serve with Looker.' },
    ],
    formTitle: 'Explore Data,', formSubTitle: 'Drive Decisions.',
    formDesc: 'Get a free Looker consultation from our certified Looker developers.',
  };
}
