import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({ selector: 'app-pharmacy', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class PharmacyComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.pharmacy.title, SEO.pharmacy.description); }
  config: IndustryPageConfig = {
    badge: 'Clinical Precision', heroTitle: 'Smart ERP for', heroTitleHighlight: 'Pharmacy Networks',
    heroDesc: 'The all-in-one digital core for pharmaceutical retail, distribution, and compliance. Revolutionize your pharmacy network with intelligent ERP solutions.',
    heroCta: 'Request Demo', heroImage: '/images/pharmacy/hero-pharma.webp',
    capabilitiesTitle: 'Digital Pharmacy Modules',
    capabilities: [
      { title: 'Expiry Tracking', desc: 'Automated alerts for near-expiry medicines to reduce waste and ensure patient safety.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
      { title: 'Drug Compliance', desc: 'Digital audit trails compliant with FDA and local health authority standards.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
      { title: 'Inventory Flow', desc: 'Real-time stock synchronization across retail pharmacies and central warehouses.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>' },
      { title: 'Smart Billing', desc: 'Fast POS integration with automated insurance claim processing and tax filing.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>' },
      { title: 'Patient Records', desc: 'Encrypted history of prescriptions ensuring HIPAA-level data privacy.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>' },
      { title: 'Sales Growth', desc: 'Analytics to identify high-margin medications and optimize procurement cycles.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>' },
    ],
    industriesTitle: 'Pharmacy Segments',
    industries: ['Retail Pharmacy Chains', 'Hospital Pharmacies', 'Drug Distributors', 'Online Pharmacies', 'Diagnostic Centers', 'Veterinary Pharmacies'],
    stat1Value: '100%', stat1Label: 'Audit Readiness', stat2Value: '45%', stat2Label: 'Faster Dispensing',
    workflowTitle: 'Pharmacy Operations Flow',
    steps: [
      { step: '01', title: 'Centralized Medication Intelligence', desc: 'Every prescription dispensed is cross-checked against live stock and expiration dates.' },
      { step: '02', title: 'Regulatory & Narcotic Tracking', desc: 'Auto-generate mandatory reports for scheduled drugs with zero human error risk.' },
      { step: '03', title: 'Financial & Insurance Accuracy', desc: 'Automated insurance claim reconciliation and real-time margin analysis per drug category.' },
      { step: '04', title: 'Batch Control & Recall', desc: 'Granular tracking of drug batches for rapid recall management if required.' },
      { step: '05', title: 'Supplier Portal', desc: 'Direct API connection to major drug distributors for one-click replenishment.' },
    ],
    compareRows: [
      { feature: 'Expiry Management', standard: 'Manual Checks', dynamics: 'Automated Alerts & FEFO' },
      { feature: 'Audit Trail', standard: 'Paper Records', dynamics: 'Digital Tamper-Proof Trail' },
      { feature: 'Insurance Claims', standard: 'Manual Processing', dynamics: 'Automated Reconciliation' },
      { feature: 'Stock Sync', standard: 'Batch Updates', dynamics: 'Real-time Across All Outlets' },
    ],
    formTitle: 'Ready to Modernize,', formSubTitle: 'Your Pharmacy.',
    formDesc: 'Schedule a technical walkthrough with our healthcare ERP specialists and get a tailored roadmap for your pharmacy network.',
  };
}
