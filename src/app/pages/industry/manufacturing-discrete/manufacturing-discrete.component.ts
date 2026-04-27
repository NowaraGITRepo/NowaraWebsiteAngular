import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({
  selector: 'app-manufacturing-discrete',
  standalone: true,
  imports: [IndustryPageComponent],
  template: `<app-industry-page [config]="config"></app-industry-page>`,
})
export class ManufacturingDiscreteComponent {
  config: IndustryPageConfig = {
    badge: 'Industry 4.0 Ready',
    heroTitle: 'Discrete',
    heroTitleHighlight: 'Manufacturing',
    heroDesc: 'Streamline production for distinct, countable products. From BOM management to shop-floor control, Dynamics 365 delivers the precision your assembly line demands.',
    heroCta: 'Optimize Production',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'How Dynamics 365 Empowers You',
    capabilities: [
      { title: 'Advanced BOM & Routing', desc: 'Manage complex multi-level Bills of Materials and production sequences with ease.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>' },
      { title: 'Production Planning', desc: 'Optimize scheduling to ensure machines and labor are utilized at peak efficiency.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>' },
      { title: 'Shop-Floor Control', desc: 'Real-time visibility into work orders and production status on the factory floor.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>' },
      { title: 'Serial & Lot Tracking', desc: 'End-to-end traceability for every single unit produced, ensuring compliance.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>' },
      { title: 'Warehouse Management', desc: 'Seamless integration between production lines and inventory storage.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>' },
      { title: 'Variance Analysis', desc: 'Track costs, analyze deviations, and boost profitability across the lifecycle.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
    ],
    industriesTitle: 'Ideal For Industries',
    industries: ['Automotive & Components', 'Electronics & Electrical', 'Machinery & Equipment', 'Aerospace & Defense', 'Furniture & Durables', 'Medical Devices'],
    stat1Value: '30%', stat1Label: 'Efficiency Boost',
    stat2Value: '22%', stat2Label: 'Lower Inventory',
    workflowTitle: 'The Manufacturing Workflow',
    steps: [
      { step: '01', title: 'Design & BOM', desc: 'Define multi-level Bill of Materials and engineering versions.' },
      { step: '02', title: 'Demand Planning', desc: 'Forecast requirements using AI-driven master scheduling (MRP).' },
      { step: '03', title: 'Production Order', desc: 'Release work orders to the shop floor with precise routing.' },
      { step: '04', title: 'Assembly & Tracking', desc: 'Execute production with serial and batch-level traceability.' },
      { step: '05', title: 'Quality Assurance', desc: 'Automated check-points ensure compliance at every stage.' },
    ],
    compareRows: [
      { feature: 'BOM Management', standard: 'Basic / Manual', dynamics: 'Multi-level / Version Controlled' },
      { feature: 'Shop Floor Data', standard: 'Paper-based / Delayed', dynamics: 'Mobile-integrated / Real-time' },
      { feature: 'Costing', standard: 'Estimated', dynamics: 'Actual vs Standard Variance' },
      { feature: 'Traceability', standard: 'Limited', dynamics: 'Full Serial/Lot Life-cycle' },
    ],
    formTitle: 'Start Your', formSubTitle: 'Evolution.',
    formDesc: 'Speak with our discrete manufacturing consultants to map your production floor to a more profitable future.',
  };
}
