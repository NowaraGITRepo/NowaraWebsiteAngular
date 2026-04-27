import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-steel-metal', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class SteelMetalComponent {
  config: IndustryPageConfig = {
    badge: 'Heavy Industry ERP', heroTitle: 'Steel &', heroTitleHighlight: 'Metal ERP',
    heroDesc: 'Purpose-built ERP for steel mills, metal fabricators, and foundries. Optimize heat management, scrap control, and customer-specific tolerances.',
    heroCta: 'Strengthen Operations', heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Steel & Metal ERP Capabilities',
    capabilities: [
      { title: 'Heat & Melt Tracking', desc: 'Trace every heat from casting to coil with full chemical composition records.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/></svg>' },
      { title: 'Scrap Management', desc: 'Track internal scrap, returns, and remelting to minimize material losses.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>' },
      { title: 'Tolerance & Grade Control', desc: 'Manage customer-specific grades, tolerances, and test certificates.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Catch Weight & UOM', desc: 'Handle dual unit of measure — weight and length — for plates, coils, bars.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>' },
      { title: 'Energy Management', desc: 'Track energy consumption per furnace and production route.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
      { title: 'Mill Test Certificates', desc: 'Auto-generate MTCs with chemical and mechanical test results.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>' },
    ],
    industriesTitle: 'Metal Segments We Serve',
    industries: ['Steel Mills', 'Aluminum Smelters', 'Metal Fabricators', 'Foundries & Forges', 'Wire & Cable', 'Pipe & Tube Manufacturers'],
    stat1Value: '20%', stat1Label: 'Scrap Reduction', stat2Value: '30%', stat2Label: 'OEE Improvement',
    workflowTitle: 'Steel Production Workflow',
    steps: [
      { step: '01', title: 'Raw Material Intake', desc: 'Receive scrap, ore, and alloys with quality certification.' },
      { step: '02', title: 'Melting & Casting', desc: 'Track heat numbers and chemical composition from furnace.' },
      { step: '03', title: 'Rolling & Finishing', desc: 'Execute rolling programs with dimensional tolerance control.' },
      { step: '04', title: 'Testing & Certification', desc: 'Generate mill test certificates from lab results.' },
      { step: '05', title: 'Cut & Dispatch', desc: 'Cut-to-size orders with catch-weight invoicing.' },
    ],
    compareRows: [
      { feature: 'Heat Traceability', standard: 'Paper Records', dynamics: 'Digital Heat Master' },
      { feature: 'Catch Weight', standard: 'Manual Conversion', dynamics: 'Dual UOM Built-in' },
      { feature: 'MTC Generation', standard: 'Manual Documents', dynamics: 'Auto-generated from System' },
      { feature: 'Scrap Control', standard: 'Estimation', dynamics: 'Real-time Scrap Accounting' },
    ],
    formTitle: 'Forge a Stronger', formSubTitle: 'Future.',
    formDesc: 'Connect with our steel and metals ERP consultants to learn how Dynamics 365 transforms heavy industry.',
  };
}
