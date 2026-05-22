import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-automotive', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class AutomotiveComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.automotive.title, SEO.automotive.description); }
  config: IndustryPageConfig = {
    badge: 'Enterprise Automotive ERP', heroTitle: 'Accelerate Your', heroTitleHighlight: 'Production Velocity.',
    heroDesc: 'Modernizing automotive manufacturing with intelligent ERP solutions. Eliminate silos, reduce waste, and scale your operations globally with Dynamics 365.',
    heroCta: 'Request a Demo', heroImage: '/images/automative/automative-car.webp',
    capabilitiesTitle: 'Core Industry Pillars',
    capabilities: [
      { title: 'Precision Control', desc: 'Manage component-level engineering with 100% accuracy. Reduces assembly errors by 45% using AI-driven logic.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>' },
      { title: 'Real-time Ops', desc: 'Live shop floor monitoring and production tracking. Instant bottleneck detection across global facilities.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
      { title: 'IATF Compliance', desc: 'Automated documentation for automotive safety standards. Zero-risk audit preparation for international exports.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Smart Assembly', desc: 'Just-In-Time (JIT) manufacturing synchronization. Optimizes inventory turnover and reduces holding costs.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>' },
      { title: 'Supply Chain', desc: 'End-to-end visibility of parts distribution. Real-time vendor portal integration and tracking.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>' },
      { title: 'Maintenance', desc: 'Predictive alerts for machinery and equipment. Decreases unplanned downtime by 30% annually.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' },
    ],
    industriesTitle: 'Automotive Segments',
    industries: ['OEM Manufacturers', 'Tier 1 & 2 Suppliers', 'Equipment Dealers', 'Aftermarket Parts', 'EV Components', 'Heavy Vehicles'],
    stat1Value: '35%', stat1Label: 'Yield Improvement', stat2Value: '20%', stat2Label: 'Lead-Time Reduction',
    workflowTitle: 'Automotive Production Flow',
    steps: [
      { step: '01', title: 'Engineering Design', desc: 'Define BOMs, routings, and engineering specifications.' },
      { step: '02', title: 'Supplier Scheduling', desc: 'Send release schedules to suppliers for JIT delivery.' },
      { step: '03', title: 'Assembly Execution', desc: 'Track assembly progress with serial number traceability.' },
      { step: '04', title: 'Quality Inspection', desc: 'Inline and end-of-line quality checks with PPAP docs.' },
      { step: '05', title: 'Delivery & Warranty', desc: 'Ship with full documentation and activate warranty tracking.' },
    ],
    compareRows: [
      { feature: 'BOM Complexity', standard: 'Limited Levels', dynamics: 'Unlimited Multi-Level BOM' },
      { feature: 'JIT Support', standard: 'Manual Scheduling', dynamics: 'Automated Kanban / JIT' },
      { feature: 'Quality Docs', standard: 'Separate Systems', dynamics: 'Integrated PPAP & Control Plans' },
      { feature: 'After-Sales', standard: 'Disconnected', dynamics: 'Unified Service Module' },
    ],
    formTitle: 'Experience the', formSubTitle: 'Future of ERP.',
    formDesc: 'Join 500+ global manufacturers who have already digitized their shop floor, parts tracking, and supply chain with our specialized Automotive ERP solution.',
  };
}
