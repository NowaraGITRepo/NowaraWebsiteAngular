import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-manufacturing-process', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class ManufacturingProcessComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.manufacturingProcess.title, SEO.manufacturingProcess.description); }
  config: IndustryPageConfig = {
    badge: 'Formula-Based Excellence',
    heroTitle: 'Process',
    heroTitleHighlight: 'Manufacturing',
    heroDesc: 'Master complex mixing, blending, and chemical transformations. From recipe management to strict regulatory compliance, Dynamics 365 optimizes every batch.',
    heroCta: 'Optimize Your Yield',
    heroImage: '/images/chemical/chemical.webp',
    capabilitiesTitle: 'How Dynamics 365 Supports You',
    capabilities: [
      { title: 'Formula & Recipe', desc: 'Manage complex ingredients, co-products, and multi-stage transformations with version-controlled formulas.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>' },
      { title: 'Lot Tracking', desc: 'End-to-end traceability with expiry and shelf-life management across every batch produced.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>' },
      { title: 'Compliance', desc: 'Built-in support for FDA, GMP, FSSAI, and global regulatory standards with automated audit trails.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Yield & Waste', desc: 'Calculate expected vs actual yield to minimize ingredient loss and optimize production efficiency.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>' },
      { title: 'Co/By-Products', desc: 'Accurately account for secondary outputs during the process, ensuring cost is distributed correctly.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"/></svg>' },
      { title: 'Quality Control', desc: 'Automated sample testing and batch release workflows with real-time quality checkpoints.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
    ],
    industriesTitle: 'Ideal for Process Industries',
    industries: ['Food & Beverage', 'Pharmaceuticals', 'Chemicals & Paints', 'Cosmetics', 'Oil & Gas', 'Rubber & Plastics'],
    stat1Value: '25%', stat1Label: 'Yield Improvement', stat2Value: '40%', stat2Label: 'Compliance Faster',
    workflowTitle: 'Process Production Workflow',
    steps: [
      { step: '01', title: 'Formula Design', desc: 'Define formulas, ingredients, co-products, and production parameters.' },
      { step: '02', title: 'Material Procurement', desc: 'Plan raw material needs with demand-driven MRP.' },
      { step: '03', title: 'Batch Production', desc: 'Execute batch orders with real-time yield monitoring.' },
      { step: '04', title: 'QC Testing', desc: 'Run quality checks and generate certificates of analysis.' },
      { step: '05', title: 'Dispatch & Compliance', desc: 'Ship with full traceability and regulatory documentation.' },
    ],
    compareRows: [
      { feature: 'Regulatory Compliance', standard: 'Manual Documentation', dynamics: 'FDA / GMP / FSSAI Built-in' },
      { feature: 'Quality Control', standard: 'Batch Testing Delays', dynamics: 'Automated Sample Release' },
      { feature: 'Wastage Tracking', standard: 'Estimation-based', dynamics: 'Yield vs Actual Analysis' },
      { feature: 'Cost Tracking', standard: 'Estimated', dynamics: 'Granular Ingredient Cost' },
    ],
    formTitle: 'Refine Your', formSubTitle: 'Production.',
    formDesc: 'Ready to digitize your recipes and automate compliance? Our experts will map your process to the power of Dynamics 365.',
  };
}
