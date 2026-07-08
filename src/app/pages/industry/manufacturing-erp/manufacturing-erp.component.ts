import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-manufacturing-erp',
  standalone: true,
  imports: [IndustryPageComponent],
  template: `<app-industry-page [config]="config"></app-industry-page>`,
})
export class ManufacturingErpComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.update({
      title: 'Best ERP Software for Manufacturing Industry – Try It Now',
      description: 'Looking for the best ERP software for manufacturing industry? Streamline production, cut costs, and boost efficiency. Try it now with a free demo',
      keywords: 'ERP software for manufacturing industry, best manufacturing ERP, Dynamics 365 manufacturing, production management software, manufacturing ERP India UAE',
    }, 'dynamics-365-erp-software-for-manufacturing-industry');
  }

  config: IndustryPageConfig = {
    badge: 'Microsoft Dynamics 365',
    heroTitle: 'ERP Software for',
    heroTitleHighlight: 'Manufacturing Industry',
    heroDesc: 'Streamline production, cut costs, and boost efficiency with the best ERP software for manufacturing. Manage every step — from BOM to delivery — on one unified platform powered by Microsoft Dynamics 365.',
    heroCta: 'Get a Free Demo',
    heroImage: '/images/manufacturing/hybrid-manufacturing.webp',

    capabilitiesTitle: 'What Our Manufacturing ERP Does For You',
    capabilities: [
      {
        title: 'Production Planning & Scheduling',
        desc: 'Plan, schedule, and execute production orders efficiently. Align machine capacity, labour, and materials to meet delivery timelines.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>',
      },
      {
        title: 'Bill of Materials (BOM) Management',
        desc: 'Manage multi-level BOMs, engineering change orders, and product versions with complete version control and traceability.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>',
      },
      {
        title: 'Inventory & Warehouse Control',
        desc: 'Eliminate stockouts and overstocking with real-time inventory visibility across all warehouses and production zones.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>',
      },
      {
        title: 'Quality Management',
        desc: 'Built-in quality checkpoints, non-conformance tracking, and compliance reporting to maintain product standards at every stage.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
      },
      {
        title: 'Shop Floor & MES Integration',
        desc: 'Real-time shop-floor data capture, machine integration, and production reporting for end-to-end operational visibility.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
      },
      {
        title: 'Cost Control & Financial Integration',
        desc: 'Track actual vs standard costs, manage overheads, and get a complete picture of production profitability in real time.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
      },
    ],

    industriesTitle: 'Manufacturing Sectors We Serve',
    industries: [
      'Discrete Manufacturing',
      'Process Manufacturing',
      'Hybrid Manufacturing',
      'Automotive & Auto Components',
      'Food & Beverages',
      'Pharmaceutical & Life Sciences',
      'Chemical & Specialty Products',
      'Steel, Metal & Fabrication',
      'Electronics & Electricals',
      'Corrugated & Packaging',
    ],

    stat1Value: '35%', stat1Label: 'Reduction in Production Costs',
    stat2Value: '40%', stat2Label: 'Faster Order Fulfilment',

    workflowTitle: 'How It Works',
    steps: [
      { step: '01', title: 'Requirement & Demand Planning', desc: 'Forecast raw material needs using AI-driven MRP based on sales orders and production targets.' },
      { step: '02', title: 'Production Order Creation', desc: 'Auto-generate work orders with routing, BOM, and capacity allocation to the shop floor.' },
      { step: '03', title: 'Shop Floor Execution', desc: 'Track work-in-progress in real time. Operators update job status via mobile or terminal.' },
      { step: '04', title: 'Quality Inspection', desc: 'Trigger quality checks at defined stages. Flag non-conformances and trigger corrective actions.' },
      { step: '05', title: 'Finished Goods & Dispatch', desc: 'Move completed stock to warehouse, generate delivery notes, and update financials automatically.' },
    ],

    formTitle: 'Get a Free Demo of',
    formSubTitle: 'Manufacturing ERP.',
    formDesc: 'See how Microsoft Dynamics 365 can transform your production floor. Our manufacturing ERP consultants will walk you through a live demo tailored to your industry.',
  };
}
