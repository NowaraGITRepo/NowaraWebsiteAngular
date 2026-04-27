import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  // ─── About / Contact / Career / FAQ ───────────────────────────────────────
  {
    path: 'about-nowara-infotech',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'career',
    loadComponent: () => import('./pages/career/career.component').then(m => m.CareerComponent),
  },
  {
    path: 'faqs',
    loadComponent: () => import('./pages/faq-page/faq-page.component').then(m => m.FaqPageComponent),
  },
  // ─── Industry Pages ────────────────────────────────────────────────────────
  {
    path: 'manufacturing/discrete',
    loadComponent: () => import('./pages/industry/manufacturing-discrete/manufacturing-discrete.component').then(m => m.ManufacturingDiscreteComponent),
  },
  {
    path: 'manufacturing/process',
    loadComponent: () => import('./pages/industry/manufacturing-process/manufacturing-process.component').then(m => m.ManufacturingProcessComponent),
  },
  {
    path: 'manufacturing/hybrid',
    loadComponent: () => import('./pages/industry/manufacturing-hybrid/manufacturing-hybrid.component').then(m => m.ManufacturingHybridComponent),
  },
  {
    path: 'food-and-beverages',
    loadComponent: () => import('./pages/industry/food-beverages/food-beverages.component').then(m => m.FoodBeveragesComponent),
  },
  {
    path: 'automotive-equipment',
    loadComponent: () => import('./pages/industry/automotive/automotive.component').then(m => m.AutomotiveComponent),
  },
  {
    path: 'erp-software-for-pharmacy-industry',
    loadComponent: () => import('./pages/industry/pharmacy/pharmacy.component').then(m => m.PharmacyComponent),
  },
  {
    path: 'chemical-industry',
    loadComponent: () => import('./pages/industry/chemical/chemical.component').then(m => m.ChemicalComponent),
  },
  {
    path: 'steel-and-metal',
    loadComponent: () => import('./pages/industry/steel-metal/steel-metal.component').then(m => m.SteelMetalComponent),
  },
  {
    path: 'corrugated-erp',
    loadComponent: () => import('./pages/industry/corrugated/corrugated.component').then(m => m.CorrugatedComponent),
  },
  {
    path: 'fashion-erp',
    loadComponent: () => import('./pages/industry/fashion/fashion.component').then(m => m.FashionComponent),
  },
  {
    path: 'microsoft-dynamics-365-for-e-commerce',
    loadComponent: () => import('./pages/industry/ecommerce/ecommerce.component').then(m => m.EcommerceComponent),
  },
  // ─── Solution / Practice Pages ─────────────────────────────────────────────
  {
    path: 'msd-365-finance-and-operations',
    loadComponent: () => import('./pages/solutions/msd365/msd365.component').then(m => m.Msd365Component),
  },
  {
    path: 'microsoft-dynamic-365-business-central',
    loadComponent: () => import('./pages/solutions/business-central/business-central.component').then(m => m.BusinessCentralComponent),
  },
  {
    path: 'erp-crm-implementations',
    loadComponent: () => import('./pages/solutions/erp-crm/erp-crm.component').then(m => m.ErpCrmComponent),
  },
  {
    path: 'microsoft-azure-cloud-services-provider',
    loadComponent: () => import('./pages/solutions/azure/azure.component').then(m => m.AzureComponent),
  },
  {
    path: 'aws-cloud-services-provider',
    loadComponent: () => import('./pages/solutions/aws/aws.component').then(m => m.AwsComponent),
  },
  {
    path: 'ls-retail',
    loadComponent: () => import('./pages/solutions/ls-retail/ls-retail.component').then(m => m.LsRetailComponent),
  },
  {
    path: 'sap-web-service',
    loadComponent: () => import('./pages/solutions/sap/sap.component').then(m => m.SapComponent),
  },
  {
    path: 'power-bi',
    loadComponent: () => import('./pages/solutions/power-bi/power-bi.component').then(m => m.PowerBiComponent),
  },
  {
    path: 'google-looker',
    loadComponent: () => import('./pages/solutions/google-looker/google-looker.component').then(m => m.GoogleLookerComponent),
  },
  {
    path: 'tableau',
    loadComponent: () => import('./pages/solutions/tableau/tableau.component').then(m => m.TableauComponent),
  },
  // ─── Services Pages ─────────────────────────────────────────────────────────
  {
    path: 'services/erp-crm-support',
    loadComponent: () => import('./pages/services/erp-support/erp-support.component').then(m => m.ErpSupportComponent),
  },
  {
    path: 'services/custom-development-integration',
    loadComponent: () => import('./pages/services/custom-dev/custom-dev.component').then(m => m.CustomDevComponent),
  },
  {
    path: 'services/upgrade-and-migration',
    loadComponent: () => import('./pages/services/upgrade/upgrade.component').then(m => m.UpgradeComponent),
  },
  {
    path: 'services/ams',
    loadComponent: () => import('./pages/services/ams/ams.component').then(m => m.AmsComponent),
  },
  {
    path: 'services/apps-development',
    loadComponent: () => import('./pages/services/apps-dev/apps-dev.component').then(m => m.AppsDevComponent),
  },
  {
    path: 'services/resource-augmentation',
    loadComponent: () => import('./pages/services/resource-aug/resource-aug.component').then(m => m.ResourceAugComponent),
  },
  // ─── Content Pages ───────────────────────────────────────────────────────────
  {
    path: 'blogs',
    loadComponent: () => import('./pages/blogs/blog-list/blog-list.component').then(m => m.BlogListComponent),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blogs/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent),
  },
  {
    path: 'case-study',
    loadComponent: () => import('./pages/case-study/case-study-list/case-study-list.component').then(m => m.CaseStudyListComponent),
  },
  {
    path: 'case-study-details/:id',
    loadComponent: () => import('./pages/case-study/case-study-detail/case-study-detail.component').then(m => m.CaseStudyDetailComponent),
  },
  {
    path: 'event-page',
    loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent),
  },
  // ─── 404 ────────────────────────────────────────────────────────────────────
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
