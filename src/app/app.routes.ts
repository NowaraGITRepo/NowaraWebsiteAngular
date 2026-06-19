import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: { seo: {
      title: 'Nowara Infotech — Microsoft Dynamics 365 ERP Partner | UAE & India',
      description: 'Nowara Infotech is a certified Microsoft Dynamics 365 ERP Partner. We deliver Business Central, Finance & Operations, CRM, LS Central, Power BI and Cloud solutions across UAE and India.',
      keywords: 'Microsoft Dynamics 365, ERP partner, Business Central, Finance and Operations, CRM, LS Central, Power BI, Azure, ERP implementation',
      ogImage: '/images/Swiper/slider-image.webp',
    }},
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },

  // ─── About / Contact / Career ──────────────────────────────────────────────
  {
    path: 'about-nowara-infotech',
    data: { seo: {
      title: 'About Nowara Infotech — Microsoft Certified ERP Partner',
      description: 'Learn about Nowara Infotech, a trusted Microsoft Dynamics 365 certified partner with 30+ years of ERP experience serving clients across UAE, India and globally.',
      keywords: 'about Nowara Infotech, Microsoft certified partner, ERP company India UAE',
      ogImage: '/images/company-profile/about-hero.webp',
    }},
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'contact-us',
    data: { seo: {
      title: 'Contact Nowara Infotech — ERP Consulting & Support',
      description: 'Get in touch with Nowara Infotech for Microsoft Dynamics 365 ERP consulting, implementation support, or a free demo. Offices in Noida, Mumbai and UAE.',
      keywords: 'contact Nowara Infotech, ERP support, Dynamics 365 demo, ERP consulting India',
    }},
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'career',
    data: { seo: {
      title: 'Careers at Nowara Infotech — Join Our ERP Team',
      description: 'Explore career opportunities at Nowara Infotech. We are hiring Microsoft Dynamics 365 consultants, developers, and ERP specialists across India and UAE.',
      keywords: 'careers Nowara Infotech, ERP jobs India, Dynamics 365 jobs, Microsoft partner jobs',
    }},
    loadComponent: () => import('./pages/career/career.component').then(m => m.CareerComponent),
  },
  {
    path: 'faqs',
    data: { seo: {
      title: 'FAQs — Microsoft Dynamics 365 ERP | Nowara Infotech',
      description: 'Find answers to frequently asked questions about Microsoft Dynamics 365, Business Central, LS Central, ERP implementation and cloud services.',
      keywords: 'ERP FAQ, Dynamics 365 FAQ, Business Central questions, ERP implementation FAQ',
    }},
    loadComponent: () => import('./pages/faq-page/faq-page.component').then(m => m.FaqPageComponent),
  },

  // ─── Industry Pages ────────────────────────────────────────────────────────
  {
    path: 'manufacturing/discrete',
    data: { seo: {
      title: 'Discrete Manufacturing ERP — Dynamics 365 | Nowara Infotech',
      description: 'Nowara Infotech delivers Microsoft Dynamics 365 ERP for discrete manufacturing — streamline production, inventory, quality and supply chain operations.',
      keywords: 'discrete manufacturing ERP, Dynamics 365 manufacturing, production ERP India',
      ogImage: '/images/manufacturing/hero-manufacturing.webp',
    }},
    loadComponent: () => import('./pages/industry/manufacturing-discrete/manufacturing-discrete.component').then(m => m.ManufacturingDiscreteComponent),
  },
  {
    path: 'manufacturing/process',
    data: { seo: {
      title: 'Process Manufacturing ERP — Dynamics 365 | Nowara Infotech',
      description: 'ERP solutions for process manufacturing industries. Microsoft Dynamics 365 helps manage formulations, batches, compliance and quality control.',
      keywords: 'process manufacturing ERP, batch manufacturing Dynamics 365, chemical ERP',
      ogImage: '/images/manufacturing/process-manufacturing.webp',
    }},
    loadComponent: () => import('./pages/industry/manufacturing-process/manufacturing-process.component').then(m => m.ManufacturingProcessComponent),
  },
  {
    path: 'manufacturing/hybrid',
    data: { seo: {
      title: 'Hybrid Manufacturing ERP — Dynamics 365 | Nowara Infotech',
      description: 'Hybrid manufacturing ERP combining discrete and process operations on Microsoft Dynamics 365. Streamline all aspects of production from planning to delivery.',
      keywords: 'hybrid manufacturing ERP, mixed mode manufacturing, Dynamics 365 ERP',
      ogImage: '/images/manufacturing/hybrid-manufacturing.webp',
    }},
    loadComponent: () => import('./pages/industry/manufacturing-hybrid/manufacturing-hybrid.component').then(m => m.ManufacturingHybridComponent),
  },
  {
    path: 'food-and-beverages',
    data: { seo: {
      title: 'ERP for Food & Beverages Industry — Dynamics 365 | Nowara Infotech',
      description: 'Microsoft Dynamics 365 ERP for food and beverage companies. Manage recipes, batch production, traceability, compliance and distribution in one platform.',
      keywords: 'food and beverage ERP, F&B ERP Dynamics 365, food industry ERP India',
      ogImage: '/images/food/mocktails.webp',
    }},
    loadComponent: () => import('./pages/industry/food-beverages/food-beverages.component').then(m => m.FoodBeveragesComponent),
  },
  {
    path: 'automotive-equipment',
    data: { seo: {
      title: 'Automotive ERP Solutions — Dynamics 365 | Nowara Infotech',
      description: 'Dynamics 365 ERP for automotive and equipment manufacturers. Manage production, supply chain, service and dealership operations efficiently.',
      keywords: 'automotive ERP, automotive Dynamics 365, auto equipment ERP India',
      ogImage: '/images/automative/hero-automative.webp',
    }},
    loadComponent: () => import('./pages/industry/automotive/automotive.component').then(m => m.AutomotiveComponent),
  },
  {
    path: 'erp-software-for-pharmacy-industry',
    data: { seo: {
      title: 'ERP Software for Pharmacy Industry — Dynamics 365 | Nowara Infotech',
      description: 'Microsoft Dynamics 365 ERP for pharmaceutical companies. Manage drug inventory, batch tracking, regulatory compliance and distribution seamlessly.',
      keywords: 'pharmacy ERP, pharmaceutical ERP software, Dynamics 365 pharma India',
      ogImage: '/images/pharmacy/hero-pharma.webp',
    }},
    loadComponent: () => import('./pages/industry/pharmacy/pharmacy.component').then(m => m.PharmacyComponent),
  },
  {
    path: 'chemical-industry',
    data: { seo: {
      title: 'Chemical Industry ERP — Dynamics 365 | Nowara Infotech',
      description: 'ERP solutions for the chemical industry on Microsoft Dynamics 365. Manage formulations, compliance, safety, production and supply chain.',
      keywords: 'chemical industry ERP, chemical Dynamics 365, chemical manufacturing ERP India',
      ogImage: '/images/chemical/hero-chemical.webp',
    }},
    loadComponent: () => import('./pages/industry/chemical/chemical.component').then(m => m.ChemicalComponent),
  },
  {
    path: 'steel-and-metal',
    data: { seo: {
      title: 'Steel & Metal Industry ERP — Dynamics 365 | Nowara Infotech',
      description: 'Dynamics 365 ERP for steel and metal manufacturers. Streamline production planning, inventory, quality control and supply chain for metals industry.',
      keywords: 'steel ERP, metal manufacturing ERP, steel Dynamics 365 India',
      ogImage: '/images/steel/hero-steel.webp',
    }},
    loadComponent: () => import('./pages/industry/steel-metal/steel-metal.component').then(m => m.SteelMetalComponent),
  },
  {
    path: 'corrugated-erp',
    data: { seo: {
      title: 'Corrugation ERP Software — Dynamics 365 | Nowara Infotech',
      description: 'ERP software for corrugated box and packaging industry on Dynamics 365. Manage orders, production, inventory and delivery with ease.',
      keywords: 'corrugation ERP, packaging ERP, corrugated box ERP Dynamics 365',
      ogImage: '/images/bg/hero-bg.webp',
    }},
    loadComponent: () => import('./pages/industry/corrugated/corrugated.component').then(m => m.CorrugatedComponent),
  },
  {
    path: 'fashion-erp',
    data: { seo: {
      title: 'Fashion ERP Software — Dynamics 365 | Nowara Infotech',
      description: 'Fashion ERP on Dynamics 365 for apparel, textile and garment businesses. Manage design, production, retail and distribution on one platform.',
      keywords: 'fashion ERP, apparel ERP, textile ERP Dynamics 365, garment ERP India',
      ogImage: '/images/fashion/hero-fashion.webp',
    }},
    loadComponent: () => import('./pages/industry/fashion/fashion.component').then(m => m.FashionComponent),
  },
  {
    path: 'microsoft-dynamics-365-for-e-commerce',
    data: { seo: {
      title: 'ERP for E-Commerce — Dynamics 365 | Nowara Infotech',
      description: 'Microsoft Dynamics 365 ERP for e-commerce businesses. Unify online channels, inventory, orders and customer data on one platform.',
      keywords: 'e-commerce ERP, Dynamics 365 ecommerce, Microsoft retail ERP India UAE',
      ogImage: '/images/retail/hero-commerce.webp',
    }},
    loadComponent: () => import('./pages/industry/ecommerce/ecommerce.component').then(m => m.EcommerceComponent),
  },
  {
    path: 'supermarket-erp',
    data: { seo: {
      title: 'ERP for Supermarkets & Grocery Retail — Dynamics 365 | Nowara Infotech',
      description: 'Nowara Infotech delivers Microsoft Dynamics 365 ERP for supermarkets and grocery retail. Manage inventory, POS, promotions, and supply chain on one platform.',
      keywords: 'supermarket ERP, grocery ERP, retail ERP India UAE, Dynamics 365 supermarket',
      ogImage: '/images/retail/hero-commerce.webp',
    }},
    loadComponent: () => import('./pages/industry/supermarket/supermarket.component').then(m => m.SupermarketComponent),
  },

  // ─── Solution / Practice Pages ─────────────────────────────────────────────
  {
    path: 'msd-365-finance-and-operations',
    data: { seo: {
      title: 'Microsoft Dynamics 365 Finance & Operations | Nowara Infotech',
      description: 'Nowara Infotech implements Microsoft Dynamics 365 Finance & Operations (F&O) for enterprise financial management, supply chain, manufacturing and compliance.',
      keywords: 'Dynamics 365 Finance and Operations, D365 F&O, Microsoft F&O ERP partner India',
      ogImage: '/images/f&o/sales.webp',
    }},
    loadComponent: () => import('./pages/solutions/msd365/msd365.component').then(m => m.Msd365Component),
  },
  {
    path: 'microsoft-dynamic-365-business-central',
    data: { seo: {
      title: 'Microsoft Dynamics 365 Business Central ERP | Nowara Infotech',
      description: 'Nowara Infotech is a certified Dynamics 365 Business Central partner. We implement all-in-one cloud ERP for SMEs covering finance, sales, purchasing and operations.',
      keywords: 'Dynamics 365 Business Central, Business Central ERP, Microsoft BC partner India, SME ERP',
      ogImage: '/images/microsoft/D365-BUSINESS-CENTRAL.webp',
    }},
    loadComponent: () => import('./pages/solutions/business-central/business-central.component').then(m => m.BusinessCentralComponent),
  },
  {
    path: 'erp-crm-implementations',
    data: { seo: {
      title: 'Dynamics 365 CRM Implementation — Sales & Customer Service | Nowara Infotech',
      description: 'Nowara Infotech delivers end-to-end Microsoft Dynamics 365 CRM implementation for sales, marketing and customer service. Boost engagement and close more deals.',
      keywords: 'Dynamics 365 CRM, Microsoft CRM implementation, D365 Sales, CRM partner India UAE',
      ogImage: '/images/microsoft/crm.webp',
    }},
    loadComponent: () => import('./pages/solutions/erp-crm/erp-crm.component').then(m => m.ErpCrmComponent),
  },
  {
    path: 'microsoft-azure-cloud-services-provider',
    data: { seo: {
      title: 'Microsoft Azure Cloud Services Provider | Nowara Infotech',
      description: 'Nowara Infotech is a Microsoft Azure Cloud Services provider. We help businesses migrate, scale and manage workloads on Azure with 99.9% uptime.',
      keywords: 'Microsoft Azure, Azure cloud services India, Azure ERP hosting, Azure partner UAE',
      ogImage: '/images/bg/hero-bg.webp',
    }},
    loadComponent: () => import('./pages/solutions/azure/azure.component').then(m => m.AzureComponent),
  },
  {
    path: 'aws-cloud-services-provider',
    data: { seo: {
      title: 'AWS Cloud Services Provider | Nowara Infotech',
      description: 'Nowara Infotech provides AWS cloud services for ERP hosting, infrastructure and managed services. Scale your business on Amazon Web Services securely.',
      keywords: 'AWS cloud services, Amazon Web Services partner India, AWS ERP hosting',
    }},
    loadComponent: () => import('./pages/solutions/aws/aws.component').then(m => m.AwsComponent),
  },
  {
    path: 'ls-retail',
    data: { seo: {
      title: 'LS Central ERP for Retail — Built on Business Central | Nowara Infotech',
      description: 'Nowara Infotech implements LS Central — the all-in-one POS and ERP retail solution built on Microsoft Dynamics 365 Business Central for retail chains.',
      keywords: 'LS Central, LS Retail ERP, LS Central Business Central, retail POS ERP India UAE',
      ogImage: '/images/lscentral/lscentral.webp',
    }},
    loadComponent: () => import('./pages/solutions/ls-retail/ls-retail.component').then(m => m.LsRetailComponent),
  },
  {
    path: 'sap-web-service',
    data: { seo: {
      title: 'SAP ERP Consulting & Implementation | Nowara Infotech',
      description: 'Nowara Infotech provides SAP ERP consulting and implementation services. We integrate SAP with Microsoft Dynamics 365 for seamless enterprise operations.',
      keywords: 'SAP ERP India, SAP consulting, SAP implementation partner, SAP Dynamics 365 integration',
      ogImage: '/images/sap/hero-sap.webp',
    }},
    loadComponent: () => import('./pages/solutions/sap/sap.component').then(m => m.SapComponent),
  },
  {
    path: 'power-bi',
    data: { seo: {
      title: 'Power BI Analytics & Dashboards — D365 Integration | Nowara Infotech',
      description: 'Nowara Infotech builds Power BI dashboards integrated with Dynamics 365. Transform your ERP data into real-time insights and actionable business intelligence.',
      keywords: 'Power BI dashboards, Power BI ERP integration, business intelligence India, D365 Power BI',
      ogImage: '/images/power-bi/dashboard.webp',
    }},
    loadComponent: () => import('./pages/solutions/power-bi/power-bi.component').then(m => m.PowerBiComponent),
  },
  {
    path: 'google-looker',
    data: { seo: {
      title: 'Google Looker BI Analytics | Nowara Infotech',
      description: 'Nowara Infotech implements Google Looker for business intelligence and data analytics. Build powerful dashboards and reports from your enterprise data.',
      keywords: 'Google Looker, Looker BI, Looker analytics India, Looker ERP integration',
    }},
    loadComponent: () => import('./pages/solutions/google-looker/google-looker.component').then(m => m.GoogleLookerComponent),
  },
  {
    path: 'tableau',
    data: { seo: {
      title: 'Tableau Analytics & Data Visualisation | Nowara Infotech',
      description: 'Nowara Infotech delivers Tableau analytics and data visualisation solutions. Create interactive dashboards connected to your ERP and business data.',
      keywords: 'Tableau analytics, Tableau ERP integration, Tableau India, data visualisation',
    }},
    loadComponent: () => import('./pages/solutions/tableau/tableau.component').then(m => m.TableauComponent),
  },

  // ─── Services Pages ─────────────────────────────────────────────────────────
  {
    path: 'services/erp-crm-support',
    data: { seo: {
      title: 'ERP Implementation & Consulting Services | Nowara Infotech',
      description: 'End-to-end Dynamics 365 ERP implementation and consulting. From discovery to go-live — Nowara Infotech delivers on-time, on-budget ERP projects.',
      keywords: 'ERP implementation, ERP consulting, Dynamics 365 implementation India UAE',
    }},
    loadComponent: () => import('./pages/services/erp-support/erp-support.component').then(m => m.ErpSupportComponent),
  },
  {
    path: 'services/custom-development-integration',
    data: { seo: {
      title: 'Custom Development & Integration — Dynamics 365 | Nowara Infotech',
      description: 'Nowara Infotech builds custom Dynamics 365 extensions, ISV add-ons and third-party integrations. Tailored software development for your unique requirements.',
      keywords: 'Dynamics 365 custom development, ERP integration, custom add-on D365 India',
    }},
    loadComponent: () => import('./pages/services/custom-dev/custom-dev.component').then(m => m.CustomDevComponent),
  },
  {
    path: 'services/upgrade-and-migration',
    data: { seo: {
      title: 'Dynamics 365 Upgrade & Migration from AX / NAV | Nowara Infotech',
      description: 'Migrate from Dynamics AX, NAV or GP to Dynamics 365 cloud with zero data loss. Nowara Infotech provides proven upgrade and migration services.',
      keywords: 'Dynamics 365 upgrade, AX to D365 migration, NAV to Business Central migration India',
    }},
    loadComponent: () => import('./pages/services/upgrade/upgrade.component').then(m => m.UpgradeComponent),
  },
  {
    path: 'services/ams',
    data: { seo: {
      title: 'Application Managed Support (AMS) — Dynamics 365 | Nowara Infotech',
      description: 'Nowara Infotech offers 24/7 Application Managed Support (AMS) for Dynamics 365. Keep your ERP environment healthy, secure and continuously optimised.',
      keywords: 'Dynamics 365 AMS, application managed support, ERP support India UAE, 24/7 ERP support',
    }},
    loadComponent: () => import('./pages/services/ams/ams.component').then(m => m.AmsComponent),
  },
  {
    path: 'services/apps-development',
    data: { seo: {
      title: 'Web & Mobile App Development | Nowara Infotech',
      description: 'Nowara Infotech builds enterprise web and mobile applications integrated with Dynamics 365. Native Android, cross-platform and progressive web apps.',
      keywords: 'mobile app development India, web app development, Angular app, Dynamics 365 mobile app',
    }},
    loadComponent: () => import('./pages/services/apps-dev/apps-dev.component').then(m => m.AppsDevComponent),
  },
  {
    path: 'services/resource-augmentation',
    data: { seo: {
      title: 'Resource Augmentation — Dynamics 365 Experts | Nowara Infotech',
      description: 'Scale your team with certified Dynamics 365 consultants and developers through Nowara Infotech resource augmentation services.',
      keywords: 'resource augmentation, Dynamics 365 consultants, staff augmentation India, ERP talent',
    }},
    loadComponent: () => import('./pages/services/resource-aug/resource-aug.component').then(m => m.ResourceAugComponent),
  },

  // ─── Legacy redirects ──────────────────────────────────────────────────────
  { path: 'blog',              redirectTo: 'blogs',    pathMatch: 'full' },
  { path: 'blog-details/:id',  redirectTo: 'blog/:id', pathMatch: 'full' },

  // ─── Content Pages ─────────────────────────────────────────────────────────
  {
    path: 'blogs',
    data: { seo: {
      title: 'ERP & Technology Blog | Nowara Infotech',
      description: 'Read the latest articles, insights and ERP tips from Nowara Infotech. Covering Dynamics 365, Business Central, Power BI, Cloud and more.',
      keywords: 'ERP blog, Dynamics 365 blog, Business Central articles, Microsoft ERP insights',
      ogImage: '/images/blog/blog-hero.webp',
    }},
    loadComponent: () => import('./pages/blogs/blog-list/blog-list.component').then(m => m.BlogListComponent),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blogs/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent),
  },
  {
    path: 'case-study',
    data: { seo: {
      title: 'Case Studies — ERP Success Stories | Nowara Infotech',
      description: 'Explore Nowara Infotech case studies. See how we have helped businesses across manufacturing, retail, pharma and more with Dynamics 365 ERP.',
      keywords: 'ERP case studies, Dynamics 365 success stories, Business Central case study India',
    }},
    loadComponent: () => import('./pages/case-study/case-study-list/case-study-list.component').then(m => m.CaseStudyListComponent),
  },
  {
    path: 'case-study-details/:id',
    loadComponent: () => import('./pages/case-study/case-study-detail/case-study-detail.component').then(m => m.CaseStudyDetailComponent),
  },
  {
    path: 'event-page',
    data: { seo: {
      title: 'Events & Webinars — Dynamics 365 ERP | Nowara Infotech',
      description: 'Join Nowara Infotech events, webinars and workshops on Microsoft Dynamics 365, ERP trends and digital transformation.',
      keywords: 'ERP events, Dynamics 365 webinar, Microsoft partner event India',
    }},
    loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent),
  },
  {
    path: 'summit-2026',
    data: { seo: {
      title: 'Manufacturing Leadership Summit 2026 | Nowara Infotech',
      description: 'Join Nowara Infotech and Microsoft at the Manufacturing Leadership Summit 2026 in Hyderabad. An invitation-only event for C-level manufacturing leaders exploring AI-powered ERP and Dynamics 365.',
      keywords: 'Manufacturing Leadership Summit 2026, Dynamics 365 event, Nowara Infotech summit, Hyderabad ERP event',
    }},
    loadComponent: () => import('./pages/events/summit-2026/summit-2026.component').then(m => m.Summit2026Component),
  },
  {
    path: 'gallery',
    data: { seo: {
      title: 'Gallery — Nowara Infotech',
      description: 'Browse Nowara Infotech photo gallery — our offices, team, events and ERP project milestones.',
    }},
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent),
  },
  {
  path: 'blogs/add-blog',
    loadComponent: () =>
      import('../app/pages/blogs/add-blog/add-blog.component')
        .then(m => m.AddBlogComponent)
  },
  {
  path: 'blog/:slug',
  loadComponent: () =>
    import('./pages/blogs/blog-detail/blog-detail.component')
      .then(m => m.BlogDetailComponent)
},
{
  path: 'thank-you/:event',
  loadComponent: () =>
    import('./pages/thank-you/thank-you.component').then(m => m.ThankYouComponent),
},
{
  path: 'thank-you',
  loadComponent: () =>
    import('./pages/thank-you/thank-you.component').then(m => m.ThankYouComponent),
},

  // ─── 404 ───────────────────────────────────────────────────────────────────
  {
    path: '**',
    data: { seo: {
      title: 'Page Not Found — Nowara Infotech',
      description: 'The page you are looking for does not exist. Return to Nowara Infotech homepage.',
    }},
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
