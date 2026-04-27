import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-food-beverages', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class FoodBeveragesComponent {
  config: IndustryPageConfig = {
    badge: 'Food Safety Compliant', heroTitle: 'Food &', heroTitleHighlight: 'Beverages ERP',
    heroDesc: 'From recipe management to shelf-life tracking and HACCP compliance, Dynamics 365 keeps food and beverage manufacturers ahead of safety and efficiency standards.',
    heroCta: 'Ensure Food Safety', heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'Food & Beverage ERP Capabilities',
    capabilities: [
      { title: 'Recipe & Formula Control', desc: 'Manage nutritional data, allergens, and ingredient substitutions with ease.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>' },
      { title: 'Shelf Life & Expiry Tracking', desc: 'FEFO-based inventory management to minimize waste and ensure freshness.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
      { title: 'HACCP & Compliance', desc: 'Built-in audit trails and documentation for regulatory bodies worldwide.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Cold Chain Management', desc: 'Monitor temperature-sensitive storage and transportation in real time.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>' },
      { title: 'Demand & Seasonal Planning', desc: 'Forecast seasonal spikes and promotional demand to optimize production runs.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>' },
      { title: 'Allergen Management', desc: 'Track and label allergens across all products and production lines.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>' },
    ],
    industriesTitle: 'Food Segments We Serve',
    industries: ['Bakeries & Confectionery', 'Dairy & Beverages', 'Meat & Poultry', 'Snacks & Cereals', 'Nutraceuticals', 'Packaged Foods'],
    stat1Value: '20%', stat1Label: 'Waste Reduction', stat2Value: '99%', stat2Label: 'Compliance Rate',
    workflowTitle: 'Food Production Workflow',
    steps: [
      { step: '01', title: 'Supplier Qualification', desc: 'Verify suppliers meet food safety and quality standards.' },
      { step: '02', title: 'Raw Material Intake', desc: 'Record batch numbers, expiry dates, and certificate of analysis.' },
      { step: '03', title: 'Production & QC', desc: 'Execute batches with integrated quality checkpoints.' },
      { step: '04', title: 'Packaging & Labelling', desc: 'Generate compliant labels with allergen and nutritional info.' },
      { step: '05', title: 'Distribution', desc: 'FEFO-based dispatch with cold chain monitoring.' },
    ],
    compareRows: [
      { feature: 'Recipe Management', standard: 'Spreadsheets', dynamics: 'Version-controlled Formulas' },
      { feature: 'Shelf Life', standard: 'Manual Tracking', dynamics: 'Automated FEFO Logic' },
      { feature: 'Compliance', standard: 'Reactive Reporting', dynamics: 'Proactive Audit Trails' },
      { feature: 'Allergen Control', standard: 'Manual Labels', dynamics: 'System-enforced Allergen Flags' },
    ],
    formTitle: 'Serve Safer,', formSubTitle: 'Scale Faster.',
    formDesc: 'Get a free consultation on building a compliant, efficient Food & Beverage ERP with Dynamics 365.',
  };
}
