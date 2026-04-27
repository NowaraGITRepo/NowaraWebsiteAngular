import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-automotive', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class AutomotiveComponent {
  config: IndustryPageConfig = {
    badge: 'Automotive Grade', heroTitle: 'Automotive', heroTitleHighlight: 'Equipment ERP',
    heroDesc: 'Precision ERP for automotive OEMs, tier suppliers, and equipment manufacturers. Manage complex BOMs, JIT delivery, and quality traceability with Dynamics 365.',
    heroCta: 'Drive Efficiency', heroImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Automotive ERP Capabilities',
    capabilities: [
      { title: 'Multi-Level BOM', desc: 'Handle complex assemblies with engineering change management.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"/></svg>' },
      { title: 'JIT & Kanban', desc: 'Just-in-time delivery scheduling aligned with production demand signals.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>' },
      { title: 'Quality & PPAP', desc: 'Manage PPAP documentation, control plans, and customer-specific requirements.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Supply Chain Visibility', desc: 'Real-time tracking of parts, sub-assemblies, and finished vehicles.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>' },
      { title: 'After-Sales Service', desc: 'Integrated service management, warranty claims, and spare parts.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' },
      { title: 'Cost Management', desc: 'Standard costing, actual cost tracking, and variance analysis per vehicle.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
    ],
    industriesTitle: 'Automotive Segments',
    industries: ['OEM Manufacturers', 'Tier 1 & 2 Suppliers', 'Equipment Dealers', 'Aftermarket Parts', 'EV Components', 'Heavy Vehicles'],
    stat1Value: '32%', stat1Label: 'Delivery On-Time', stat2Value: '18%', stat2Label: 'Cost Savings',
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
    formTitle: 'Accelerate Your', formSubTitle: 'Growth.',
    formDesc: 'Speak with our automotive ERP specialists about your Dynamics 365 implementation journey.',
  };
}
