import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-food-beverages', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class FoodBeveragesComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.foodBeverages.title, SEO.foodBeverages.description); }
  config: IndustryPageConfig = {
    badge: 'F&B Digital Transformation', heroTitle: 'Food &', heroTitleHighlight: 'Beverages ERP',
    heroDesc: 'Managing Food & Beverage operations requires more than inventory tracking. It requires Traceability, Recipe Integrity, Compliance, and Shelf-life Management.',
    heroCta: 'Book a Strategy Demo', heroImage: '/images/food/mocktails.webp',
    capabilitiesTitle: 'Food & Beverage ERP Capabilities',
    capabilities: [
      { title: 'Formula Management', desc: 'Recipe integrity checks with version-controlled formulas and nutritional data management.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>' },
      { title: 'Quality Testing', desc: 'HACCP/FSMA compliance with automated audit trails and regulatory body documentation.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Batch Processing', desc: 'Real-time yield tracking with shelf-life and FEFO-based inventory management to minimize waste.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>' },
      { title: 'Safe Distribution', desc: 'Cold-chain logistics with real-time temperature monitoring and compliant dispatch documentation.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>' },
      { title: 'Demand & Seasonal Planning', desc: 'Forecast seasonal spikes and promotional demand to optimize production runs and reduce overstock.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>' },
      { title: 'Allergen Management', desc: 'Track and label allergens across all products and production lines with system-enforced controls.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>' },
    ],
    industriesTitle: 'Food Segments We Serve',
    industries: ['Bakeries & Confectionery', 'Dairy & Beverages', 'Meat & Poultry', 'Snacks & Cereals', 'Nutraceuticals', 'Packaged Foods'],
    stat1Value: '30%', stat1Label: 'Waste Reduction', stat2Value: '99%', stat2Label: 'Compliance Rate',
    workflowTitle: 'Food Production Workflow',
    steps: [
      { step: '01', title: 'Supplier Qualification', desc: 'Verify suppliers meet food safety and quality standards.' },
      { step: '02', title: 'Raw Material Intake', desc: 'Record batch numbers, expiry dates, and certificate of analysis.' },
      { step: '03', title: 'Production & QC', desc: 'Execute batches with integrated quality checkpoints.' },
      { step: '04', title: 'Packaging & Labelling', desc: 'Generate compliant labels with allergen and nutritional info.' },
      { step: '05', title: 'Distribution', desc: 'FEFO-based dispatch with cold chain monitoring.' },
    ],
    compareRows: [
      { feature: 'Recall Speed', standard: 'Hours / Days', dynamics: 'Seconds' },
      { feature: 'Inventory FEFO', standard: 'Manual Process', dynamics: 'Automated' },
      { feature: 'Compliance Reporting', standard: 'Reactive', dynamics: 'Proactive / Live' },
      { feature: 'Allergen Control', standard: 'Manual Labels', dynamics: 'System-enforced Allergen Flags' },
    ],
    formTitle: 'Book a Strategy', formSubTitle: 'Demo.',
    formDesc: 'Consult with our Food & Beverage experts to automate your recipes, manage shelf-life, and ensure 100% compliance.',
  };
}
