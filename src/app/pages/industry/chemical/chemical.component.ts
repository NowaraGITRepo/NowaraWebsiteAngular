import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-chemical', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class ChemicalComponent {
  config: IndustryPageConfig = {
    badge: 'Chemical Industry Ready', heroTitle: 'Chemical', heroTitleHighlight: 'Industry ERP',
    heroDesc: 'Manage hazardous materials, regulatory reporting, and complex formulations with a fully integrated ERP built for the chemical industry.',
    heroCta: 'Explore Chemical ERP', heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Chemical ERP Capabilities',
    capabilities: [
      { title: 'Hazmat Management', desc: 'Track hazardous materials with safety data sheets and handling protocols.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>' },
      { title: 'Formula Management', desc: 'Version-controlled chemical formulas with co-product and by-product tracking.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>' },
      { title: 'REACH & EHS Compliance', desc: 'Automate environmental, health, and safety compliance reporting.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Batch Traceability', desc: 'Full forward and backward traceability for every chemical batch produced.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>' },
      { title: 'Tank & Vessel Management', desc: 'Monitor storage tanks, vessel capacities, and material compatibility.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 1.105 2.239 2 5 2s5-.895 5-2V7m-10 0c0-1.105 2.239-2 5-2s5 .895 5 2m-10 0c0 1.105 2.239 2 5 2s5-.895 5-2"/></svg>' },
      { title: 'Quality & Lab Control', desc: 'Integrated lab management with real-time quality reporting.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
    ],
    industriesTitle: 'Chemical Segments',
    industries: ['Specialty Chemicals', 'Petrochemicals', 'Adhesives & Sealants', 'Agrochemicals', 'Paints & Coatings', 'Cleaning Products'],
    stat1Value: '38%', stat1Label: 'Compliance Savings', stat2Value: '25%', stat2Label: 'Batch Efficiency',
    workflowTitle: 'Chemical Production Flow',
    steps: [
      { step: '01', title: 'Material Safety', desc: 'Classify hazardous materials and maintain SDS documentation.' },
      { step: '02', title: 'Formula Approval', desc: 'Approve formulas with regulatory compliance checks.' },
      { step: '03', title: 'Production Execution', desc: 'Execute batches with real-time monitoring.' },
      { step: '04', title: 'QC & Lab Testing', desc: 'Test samples against COA specifications.' },
      { step: '05', title: 'Safe Dispatch', desc: 'Generate hazmat transport documents and labels.' },
    ],
    compareRows: [
      { feature: 'Hazmat Tracking', standard: 'Manual Records', dynamics: 'Integrated SDS Management' },
      { feature: 'EHS Reporting', standard: 'Separate Software', dynamics: 'Built-in Compliance Reports' },
      { feature: 'Formula Control', standard: 'Spreadsheets', dynamics: 'Version-controlled Formulas' },
      { feature: 'Lab Integration', standard: 'Disconnected', dynamics: 'Real-time LIMS Connection' },
    ],
    formTitle: 'Comply Smarter,', formSubTitle: 'Produce Better.',
    formDesc: 'Get a free demo of how Dynamics 365 transforms chemical manufacturing operations.',
  };
}
