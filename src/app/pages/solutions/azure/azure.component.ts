import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-azure', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class AzureComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.azure.title, SEO.azure.description); }
  config: IndustryPageConfig = {
    badge: 'Certified Microsoft Azure Partner', heroTitle: 'Scale Faster with', heroTitleHighlight: 'Azure Cloud',
    heroDesc: 'Empower your digital transformation with industry-leading computing, AI, and secure storage solutions tailored for the modern enterprise.',
    heroCta: 'Book a Demo', heroImage: '/images/product/azureimage.webp',
    capabilitiesTitle: 'Azure Services We Offer',
    capabilities: [
      { title: 'Azure Infrastructure', desc: 'Virtual machines, storage, networking, and compute resources on Azure.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>' },
      { title: 'Azure DevOps', desc: 'CI/CD pipelines, version control, and agile project management on Azure.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' },
      { title: 'Azure AI & ML', desc: 'Cognitive services, machine learning, and AI model deployment on Azure.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>' },
      { title: 'Azure Security', desc: 'Identity management, Zero Trust security, and Azure Sentinel SIEM.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Cloud Migration', desc: 'Lift-and-shift, re-platform, or re-architect your workloads to Azure.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>' },
      { title: 'Disaster Recovery', desc: 'Azure Site Recovery and backup solutions for business continuity.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>' },
    ],
    industriesTitle: 'Azure Use Cases',
    industries: ['ERP on Azure', 'Data & Analytics', 'App Modernisation', 'IoT & Edge', 'AI Solutions', 'Hybrid Cloud'],
    stat1Value: '99.9%', stat1Label: 'Uptime SLA', stat2Value: '40%', stat2Label: 'Cost Optimisation',
    workflowTitle: 'Azure Migration Journey',
    steps: [
      { step: '01', title: 'Assessment', desc: 'Evaluate current workloads and define Azure readiness.' },
      { step: '02', title: 'Architecture Design', desc: 'Design the target Azure architecture and migration plan.' },
      { step: '03', title: 'Pilot Migration', desc: 'Migrate a pilot workload to validate the approach.' },
      { step: '04', title: 'Full Migration', desc: 'Execute full migration with minimal business disruption.' },
      { step: '05', title: 'Optimise & Manage', desc: 'Ongoing monitoring, cost optimisation, and governance.' },
    ],
    formTitle: 'Take Your Business', formSubTitle: 'to the Cloud.',
    formDesc: 'Connect with our Azure certified architects for a free cloud readiness assessment.',
  };
}
