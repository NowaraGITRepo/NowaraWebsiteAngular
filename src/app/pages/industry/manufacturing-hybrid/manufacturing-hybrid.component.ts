import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-manufacturing-hybrid', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class ManufacturingHybridComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.manufacturingHybrid.title, SEO.manufacturingHybrid.description); }
  config: IndustryPageConfig = {
    badge: 'Unified ERP Framework',
    heroTitle: 'Hybrid',
    heroTitleHighlight: 'Manufacturing',
    heroDesc: 'Bridge the gap between Formulas and Assembly. Microsoft Dynamics 365 unifies recipe-based production with discrete packaging in a single, cohesive digital ecosystem.',
    heroCta: 'Sync Your Operations',
    heroImage: '/images/manufacturing/hybrid-manufacturing.webp',
    capabilitiesTitle: 'Unified Support Structure',
    capabilities: [
      { title: 'Integrated Formula + BOM', desc: 'Start with a chemical formula and finish with a physical Bill of Materials for packaging — all in one system.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>' },
      { title: 'Multi-Stage Workflows', desc: 'Manage bulk production and final assembly within a single production order for seamless cross-stage control.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>' },
      { title: 'End-to-End Visibility', desc: 'Track raw ingredients through the vat to the final serial-tracked package with complete genealogy.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>' },
      { title: 'Flexible Scheduling', desc: 'Balance tank capacity for liquids while scheduling assembly lines for solids simultaneously.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
      { title: 'Unified Costing', desc: 'Roll up costs from chemical inputs to discrete labor and packaging materials for precise margin analysis.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
      { title: 'Seamless Distribution', desc: 'Direct integration with Quality Control, Finance, and Global Distribution for faster go-to-market.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>' },
    ],
    industriesTitle: 'Ideal For Complex Sectors',
    industries: ['Food Processing + Packaging', 'Pharma (Bulk + Packaging)', 'Chemicals + Assembly', 'Consumer Packaged Goods', 'Cosmetics & Personal Care', 'Nutraceuticals'],
    stat1Value: '35%', stat1Label: 'Operational Efficiency', stat2Value: '28%', stat2Label: 'Cost Reduction',
    workflowTitle: 'Hybrid Production Flow',
    steps: [
      { step: '01', title: 'Mode Configuration', desc: 'Set up hybrid production rules, formula routing, and assembly logic.' },
      { step: '02', title: 'Unified Planning', desc: 'Demand planning across process and discrete modes in one view.' },
      { step: '03', title: 'Cross-Mode Execution', desc: 'Execute process and assembly orders simultaneously with shared data.' },
      { step: '04', title: 'Tracking & Compliance', desc: 'Full traceability from vat to box regardless of production mode.' },
      { step: '05', title: 'Unified Reporting', desc: 'Consolidated cost, KPI, and financial reporting across all modes.' },
    ],
    compareRows: [
      { feature: 'Traceability', standard: 'Manual Records', dynamics: 'Complete Vat-to-Box Genealogy' },
      { feature: 'Cost Accuracy', standard: 'Estimated per Mode', dynamics: 'Precise Margin per SKU' },
      { feature: 'Market Speed', standard: 'Slow Go-to-Market', dynamics: 'Faster Production Cycles' },
      { feature: 'Scalability', standard: 'Hardware Constraints', dynamics: 'Plug-and-play Production Lines' },
    ],
    formTitle: 'One Platform.', formSubTitle: 'Total Control.',
    formDesc: 'Ready to eliminate the disconnect between your labs and your loading docks? Let\'s discuss your hybrid manufacturing roadmap.',
  };
}
