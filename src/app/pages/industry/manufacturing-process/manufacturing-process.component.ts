import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-manufacturing-process', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class ManufacturingProcessComponent {
  config: IndustryPageConfig = {
    badge: 'Process Industry Ready', heroTitle: 'Process', heroTitleHighlight: 'Manufacturing',
    heroDesc: 'Manage continuous and batch production with full formula management, quality control, and regulatory compliance built into every step.',
    heroCta: 'Streamline Process Ops', heroImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Core Process Manufacturing Capabilities',
    capabilities: [
      { title: 'Formula & Recipe Management', desc: 'Control ingredients, co-products, and by-products with version-controlled formulas.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>' },
      { title: 'Batch & Campaign Tracking', desc: 'Full traceability from raw material intake to finished goods shipment.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>' },
      { title: 'Quality Management', desc: 'Integrated QC checks, certificates of analysis, and regulatory reporting.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Process Scheduling', desc: 'Optimize production runs and minimize changeover time across lines.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
      { title: 'Regulatory Compliance', desc: 'Meet GMP, FDA, HACCP, and ISO standards with built-in compliance tools.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>' },
      { title: 'Yield & Loss Management', desc: 'Track theoretical vs actual yields and minimize production losses.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>' },
    ],
    industriesTitle: 'Process Industries We Serve',
    industries: ['Chemicals & Petrochemicals', 'Food & Beverage', 'Pharmaceuticals', 'Paint & Coatings', 'Plastics & Rubber', 'Pulp & Paper'],
    stat1Value: '25%', stat1Label: 'Yield Improvement', stat2Value: '40%', stat2Label: 'Compliance Faster',
    workflowTitle: 'Process Production Workflow',
    steps: [
      { step: '01', title: 'Formula Design', desc: 'Define formulas, ingredients, and production parameters.' },
      { step: '02', title: 'Material Procurement', desc: 'Plan raw material needs with demand-driven MRP.' },
      { step: '03', title: 'Batch Production', desc: 'Execute batch orders with real-time monitoring.' },
      { step: '04', title: 'QC Testing', desc: 'Run quality checks and generate certificates of analysis.' },
      { step: '05', title: 'Dispatch & Compliance', desc: 'Ship with full traceability and regulatory documentation.' },
    ],
    compareRows: [
      { feature: 'Formula Versioning', standard: 'Manual / Excel', dynamics: 'Automated Version Control' },
      { feature: 'Batch Traceability', standard: 'Paper Records', dynamics: 'Real-time Digital Trail' },
      { feature: 'Compliance', standard: 'Manual Reports', dynamics: 'Built-in GMP / HACCP' },
      { feature: 'Yield Tracking', standard: 'Estimated', dynamics: 'Actual vs Theoretical' },
    ],
    formTitle: 'Optimize Your', formSubTitle: 'Process.',
    formDesc: 'Connect with our process manufacturing specialists for a tailored Dynamics 365 roadmap.',
  };
}
