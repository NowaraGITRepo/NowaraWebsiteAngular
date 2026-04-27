import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-manufacturing-hybrid', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class ManufacturingHybridComponent {
  config: IndustryPageConfig = {
    badge: 'Mixed-Mode Manufacturing', heroTitle: 'Hybrid', heroTitleHighlight: 'Manufacturing',
    heroDesc: 'Run discrete and process operations under one ERP roof. Nowara delivers the flexibility for manufacturers who need both worlds.',
    heroCta: 'Unify Your Operations', heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Hybrid Manufacturing Capabilities',
    capabilities: [
      { title: 'Mixed-Mode Production', desc: 'Switch seamlessly between discrete, batch, and continuous production modes.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>' },
      { title: 'Unified BOM & Formula', desc: 'Manage both Bills of Materials and production formulas in one system.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"/></svg>' },
      { title: 'Cross-Department Visibility', desc: 'Real-time data sharing between discrete and process production teams.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>' },
      { title: 'Flexible Scheduling', desc: 'Coordinate production planning across all manufacturing modes simultaneously.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
      { title: 'Consolidated Reporting', desc: 'Single dashboard view of all production KPIs across all modes.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
      { title: 'Quality Across Modes', desc: 'Unified quality management regardless of production type.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
    ],
    industriesTitle: 'Industries That Need Hybrid',
    industries: ['Automotive with Paint Lines', 'Electronics Assembly', 'Food + Packaging', 'Pharma + Devices', 'Cosmetics', 'Defense & Aerospace'],
    stat1Value: '35%', stat1Label: 'Operational Efficiency', stat2Value: '28%', stat2Label: 'Cost Reduction',
    workflowTitle: 'Hybrid Production Flow',
    steps: [
      { step: '01', title: 'Mode Configuration', desc: 'Set up hybrid production rules and routing logic.' },
      { step: '02', title: 'Unified Planning', desc: 'Demand planning across all production modes in one view.' },
      { step: '03', title: 'Cross-Mode Execution', desc: 'Execute discrete and process orders simultaneously.' },
      { step: '04', title: 'Tracking & Compliance', desc: 'Full traceability regardless of production mode.' },
      { step: '05', title: 'Unified Reporting', desc: 'Consolidated KPIs and financial reporting across all modes.' },
    ],
    compareRows: [
      { feature: 'Production Modes', standard: 'Single Mode Only', dynamics: 'Discrete + Process + Batch' },
      { feature: 'Planning', standard: 'Separate Systems', dynamics: 'Single Unified Planner' },
      { feature: 'Reporting', standard: 'Manual Consolidation', dynamics: 'Real-time Unified Dashboard' },
      { feature: 'Quality', standard: 'Mode-specific Tools', dynamics: 'Integrated Quality Across Modes' },
    ],
    formTitle: 'Bridge the Gap,', formSubTitle: 'Go Hybrid.',
    formDesc: 'Talk to our experts about implementing a unified hybrid manufacturing solution for your plant.',
  };
}
