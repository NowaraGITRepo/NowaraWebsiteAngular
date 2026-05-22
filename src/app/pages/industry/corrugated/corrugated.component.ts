import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-corrugated', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class CorrugatedComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.corrugated.title, SEO.corrugated.description); }
  config: IndustryPageConfig = {
    badge: 'Industry 4.0 Ready', heroTitle: 'Corrugated', heroTitleHighlight: 'Packaging ERP',
    heroDesc: 'Streamline corrugated box production with die management, roll tracking, waste control, and customer-specific print specifications in one integrated ERP.',
    heroCta: 'Request a Demo', heroImage: '/images/corrugation/corr-hero.webp',
    capabilitiesTitle: 'Corrugated ERP Capabilities',
    capabilities: [
      { title: 'Die & Plate Management', desc: 'Track cutting dies and printing plates across jobs and customers.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/></svg>' },
      { title: 'Roll & Inventory Control', desc: 'Manage paper rolls by grade, weight, width, and supplier batch.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 1.105 2.239 2 5 2s5-.895 5-2V7m-10 0c0-1.105 2.239-2 5-2s5 .895 5 2"/></svg>' },
      { title: 'Box Specification Library', desc: 'Store and manage box styles, flute types, and customer print specs.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"/></svg>' },
      { title: 'Waste & Trim Control', desc: 'Minimize waste by optimizing cut plans and tracking trim losses.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
      { title: 'Customer Order Management', desc: 'Handle complex customer orders with artwork approval workflows.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>' },
      { title: 'Machine Scheduling', desc: 'Optimize corrugator and printing machine scheduling for maximum throughput.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
    ],
    industriesTitle: 'Packaging Segments',
    industries: ['Corrugated Box Makers', 'Folding Carton', 'Rigid Boxes', 'Flexible Packaging', 'Lamination & Coating', 'Printing Houses'],
    stat1Value: '18%', stat1Label: 'Waste Reduction', stat2Value: '40%', stat2Label: 'OEE Increase',
    workflowTitle: 'Corrugated Production Flow',
    steps: [
      { step: '01', title: 'Order Receipt & Spec', desc: 'Capture box specs, artwork, and quantity per customer order.' },
      { step: '02', title: 'Paper Roll Planning', desc: 'Select optimal paper grades and widths for the job.' },
      { step: '03', title: 'Corrugation & Printing', desc: 'Schedule machines and monitor production in real time.' },
      { step: '04', title: 'Die Cutting & Folding', desc: 'Execute cutting with die/plate tracking per job.' },
      { step: '05', title: 'Packing & Dispatch', desc: 'Pack bundles, label, and dispatch with delivery note.' },
    ],
    compareRows: [
      { feature: 'Die Management', standard: 'Manual Register', dynamics: 'Digital Die Library' },
      { feature: 'Waste Tracking', standard: 'Estimation', dynamics: 'Real-time Trim Reporting' },
      { feature: 'Machine Scheduling', standard: 'Spreadsheets', dynamics: 'Automated Schedule Optimizer' },
      { feature: 'Customer Specs', standard: 'Paper Files', dynamics: 'Digital Spec Library' },
    ],
    formTitle: 'Cut Waste,', formSubTitle: 'Scale Output.',
    formDesc: 'Book a free demo with our corrugated packaging ERP specialists today.',
  };
}
