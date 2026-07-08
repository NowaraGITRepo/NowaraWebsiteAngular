import { Component, OnInit, inject } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-retail-erp',
  standalone: true,
  imports: [IndustryPageComponent],
  template: `<app-industry-page [config]="config"></app-industry-page>`,
})
export class RetailErpComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.update({
      title: 'ERP for Retail Industry – Nowara Infotech',
      description: 'Looking for the best ERP for retail industry? Manage POS, inventory, loyalty, and omnichannel sales on one unified platform powered by Microsoft Dynamics 365.',
      keywords: 'ERP for retail industry, retail ERP software, Microsoft Dynamics 365 retail, omnichannel ERP, POS ERP India UAE, retail management software',
      ogImage: '/images/retail/hero-retail-erp.svg',
      canonical: 'https://nowarainfotech.com/category/erp-for-retail-industry/',
    }, 'erp-for-retail-industry');
  }

  config: IndustryPageConfig = {
    badge: 'Microsoft Dynamics 365',
    heroTitle: 'ERP for',
    heroTitleHighlight: 'Retail Industry',
    heroDesc: 'Unify your store operations, online channels, inventory, and customer loyalty on a single intelligent platform. Microsoft Dynamics 365 gives retailers real-time visibility and control across every touchpoint.',
    heroCta: 'Get a Free Demo',
    heroImage: '/images/retail/hero-commerce.webp',

    capabilitiesTitle: 'What Our Retail ERP Delivers',
    capabilities: [
      {
        title: 'Omnichannel Sales Management',
        desc: 'Seamlessly connect in-store POS, e-commerce, and mobile app channels. Sync orders, pricing, and promotions across all touchpoints in real time.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
      },
      {
        title: 'Smart Inventory & Replenishment',
        desc: 'Track stock levels across all stores and warehouses in real time. Automate reordering based on sales velocity, seasonal trends, and minimum stock rules.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>',
      },
      {
        title: 'POS & Billing Integration',
        desc: 'Fast, reliable point-of-sale with integrated payment gateways, GST billing, discount management, and end-of-day reconciliation — all synced to your ERP.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
      },
      {
        title: 'Customer Loyalty & CRM',
        desc: 'Build lasting relationships with tier-based loyalty programs, personalised offers, and 360° customer profiles that follow shoppers across every channel.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>',
      },
      {
        title: 'Merchandise Planning & Pricing',
        desc: 'Plan seasonal assortments, manage supplier catalogues, and run dynamic pricing rules with markdown optimisation to protect margins and reduce dead stock.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>',
      },
      {
        title: 'Retail Analytics & Reporting',
        desc: 'Get live dashboards for sales performance, footfall, basket size, category margins, and staff productivity — powered by Microsoft Power BI.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
      },
    ],

    industriesTitle: 'Retail Segments We Serve',
    industries: [
      'Fashion & Apparel',
      'Electronics & Gadgets',
      'Grocery & FMCG',
      'Supermarkets & Hypermarkets',
      'Footwear & Accessories',
      'Jewellery & Luxury',
      'Home & Furniture',
      'Sports & Lifestyle',
      'Pharmacy & Health',
      'Specialty & D2C Brands',
    ],

    stat1Value: '30%', stat1Label: 'Reduction in Inventory Costs',
    stat2Value: '45%', stat2Label: 'Faster Checkout & Billing',

    workflowTitle: 'How It Works',
    steps: [
      { step: '01', title: 'Centralise Your Catalogue', desc: 'Onboard your entire product catalogue — SKUs, variants, pricing tiers, and supplier info — into one master system.' },
      { step: '02', title: 'Connect Every Channel', desc: 'Link your in-store POS, website, and mobile app so inventory, pricing, and orders are always in sync.' },
      { step: '03', title: 'Automate Replenishment', desc: 'AI-driven demand forecasting triggers purchase orders before stock runs out — no manual monitoring needed.' },
      { step: '04', title: 'Engage & Retain Customers', desc: 'Enrol shoppers in loyalty programmes, send targeted promotions, and track lifetime value across all channels.' },
      { step: '05', title: 'Analyse & Optimise', desc: 'Power BI dashboards surface margin, sell-through, and footfall insights so you can act fast on what is and is not working.' },
    ],

    formTitle: 'Get a Free Demo of',
    formSubTitle: 'Retail ERP.',
    formDesc: 'See how Microsoft Dynamics 365 can transform your retail operations. Our retail ERP consultants will walk you through a live demo tailored to your store format and segment.',
  };
}
