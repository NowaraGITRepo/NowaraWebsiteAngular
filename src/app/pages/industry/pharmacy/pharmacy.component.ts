import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-pharmacy', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class PharmacyComponent {
  config: IndustryPageConfig = {
    badge: 'GMP & FDA Compliant', heroTitle: 'Pharmacy', heroTitleHighlight: 'Industry ERP',
    heroDesc: 'Purpose-built ERP for pharma manufacturers. Automate batch records, manage regulatory submissions, and ensure product safety with Dynamics 365.',
    heroCta: 'Meet Compliance', heroImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Pharma ERP Capabilities',
    capabilities: [
      { title: 'Batch Record Management', desc: 'Digital batch records with e-signatures and complete audit trails.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>' },
      { title: 'GMP Compliance', desc: 'Enforce Good Manufacturing Practice standards across all production processes.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Stability & Expiry', desc: 'Track stability studies, expiry dates, and retest schedules.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
      { title: 'Lab & QC Integration', desc: 'Connect laboratory results directly to production and release workflows.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>' },
      { title: 'Serialization & Track & Trace', desc: 'Meet DSCSA and global drug traceability regulations.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>' },
      { title: 'Regulatory Submissions', desc: 'Streamline FDA, EMA, and CDSCO submission documentation.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>' },
    ],
    industriesTitle: 'Pharma Segments',
    industries: ['Generic Drug Manufacturers', 'API Manufacturers', 'Biotech Firms', 'Veterinary Pharma', 'Nutraceuticals', 'Contract Manufacturers'],
    stat1Value: '100%', stat1Label: 'Audit Readiness', stat2Value: '45%', stat2Label: 'Faster Release',
    workflowTitle: 'Pharma Production Workflow',
    steps: [
      { step: '01', title: 'Material Sampling & QC', desc: 'Test incoming raw materials against specifications.' },
      { step: '02', title: 'Batch Manufacturing', desc: 'Execute batch with digital records and e-signatures.' },
      { step: '03', title: 'In-Process Testing', desc: 'Real-time QC checks during production stages.' },
      { step: '04', title: 'Finished Goods Release', desc: 'QP review and automated release against batch record.' },
      { step: '05', title: 'Serialization & Dispatch', desc: 'Apply serial numbers and dispatch with regulatory docs.' },
    ],
    compareRows: [
      { feature: 'Batch Records', standard: 'Paper-based', dynamics: 'Electronic / 21 CFR Part 11' },
      { feature: 'Audit Trail', standard: 'Manual Logs', dynamics: 'Automatic Tamper-Proof Trail' },
      { feature: 'Regulatory Docs', standard: 'Separate Tools', dynamics: 'Integrated Submission Module' },
      { feature: 'Serialization', standard: 'Third-Party Add-on', dynamics: 'Built-in Track & Trace' },
    ],
    formTitle: 'Stay Compliant,', formSubTitle: 'Move Faster.',
    formDesc: 'Talk to our pharma ERP consultants about building your GMP-compliant Dynamics 365 environment.',
  };
}
