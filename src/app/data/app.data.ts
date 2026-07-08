export const accordionData = [
  {
    title: 'What is MS Dynamics 365 Business Central and how can it benefit my organization?',
    content:
      'MS Dynamics 365 Business Central is a comprehensive ERP solution that connects Finance, Sales, and Marketing operations in one unified platform. It enhances decision-making, improves efficiency, and supports scalable business growth with real-time data and AI-powered insights.',
  },
  {
    title: 'How does LS Central help retail businesses streamline operations?',
    content:
      'LS Central ERP, built on MS Dynamics 365, is an all-in-one retail management solution that integrates POS, inventory, eCommerce, and customer insights—helping retailers improve customer experiences and reduce system silos.',
  },
  {
    title: 'Can Nowara Infotech support ERP implementation in my industry?',
    content:
      'Absolutely. With 30+ years of experience, we serve multiple industries including manufacturing, retail, pharmacy, hospitality, and food & beverages—delivering customized ERP software solutions using Microsoft Dynamics 365 and LS Central.',
  },
  {
    title: 'What makes MS Dynamics 365 Business Central ideal for Finance and Operations?',
    content:
      'MS Dynamics 365 for Finance and Operations (F&O) offers advanced capabilities for managing budgets, cash flow, financial reporting, and supply chains. It ensures compliance, improves control, and supports global operations with ease.',
  },
  {
    title: 'How do cloud solutions like Azure and AWS benefit ERP users?',
    content:
      'Cloud ERP solutions hosted on Azure or AWS provide secure, scalable infrastructure that enables real-time data access, global collaboration, and cost-effective IT management—critical for modern businesses aiming for flexibility and growth.',
  },
  {
    title: 'Why choose Nowara Infotech as your ERP software solutions provider?',
    content:
      'Nowara Infotech is a trusted Microsoft Dynamics Certified Partner, delivering tailored ERP systems powered by MS Dynamics 365 and LS Central. We offer 24/7 support, global deployment expertise, and solutions that align with your specific business goals.',
  },
];

export interface HeroSlide {
  src: string;
  tag: string;
  title: string;
  desc: string;
  brochure: string;
  href?: string;
  align?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    src: '/images/Swiper/slider-image.webp',
    tag: 'MICROSOFT DYNAMICS 365',
    title: "<span class='text-blue-400'>Business Central</span> – All-in-One ERP for Modern Enterprises",
    desc: 'Unify finance, sales, purchasing and operations on a single cloud platform. Go live faster with Nowara\'s certified Business Central team.',
    brochure: '/brochures/enterprise-solutions.pdf',
    href: '/microsoft-dynamic-365-business-central',
  },
  {
    src: '/images/Swiper/people-analyzing-checking-finance-graphs-office.webp',
    tag: 'DYNAMICS 365 CRM',
    title: "Transform Customer Relationships with <span class='text-cyan-400'>D365 CRM</span>",
    desc: 'Close deals faster, retain more customers and drive growth with Microsoft Dynamics 365 Sales & Customer Service — fully integrated with your ERP.',
    brochure: '/brochures/cloud-services.pdf',
    href: '/erp-crm-implementations',
  },
  {
    src: '/images/Swiper/pexels-photo-590022.webp',
    tag: 'DYNAMICS 365 F&O',
    title: "Enterprise <span class='text-orange-400'>Finance & Operations</span> at Scale",
    desc: 'Manage complex global financials, supply chains and manufacturing with Dynamics 365 F&O — built for large enterprise and multi-entity organisations.',
    brochure: '/brochures/data-analytics.pdf',
    href: '/msd-365-finance-and-operations',
  },
  {
    src: '/images/Swiper/pexels-photo-3183153.webp',
    tag: 'ERP IMPLEMENTATION',
    title: "Certified <span class='text-blue-400'>Microsoft Partner</span> for ERP Consulting",
    desc: 'From discovery to go-live — Nowara Infotech delivers end-to-end Dynamics 365 implementation, configuration, training and 24/7 post-live support.',
    brochure: '/brochures/software-engineering.pdf',
    href: '/services/erp-crm-support',
  },
  {
    src: '/images/Swiper/pexels-photo-3861964.webp',
    tag: 'POWER BI & ANALYTICS',
    title: "Real-Time <span class='text-cyan-400'>Power BI</span> Dashboards for D365",
    desc: 'Turn your Business Central and F&O data into actionable insights with embedded Power BI dashboards and advanced analytics reports.',
    brochure: '/brochures/power-bi-advanced.pdf',
    href: '/power-bi',
  },
  {
    src: '/images/Swiper/pexels-photo-669615.webp',
    tag: 'UPGRADE & MIGRATION',
    title: "Migrate from <span class='text-orange-400'>AX / NAV</span> to Dynamics 365 Cloud",
    desc: 'Nowara\'s proven migration methodology ensures zero data loss and minimal downtime when upgrading legacy Microsoft ERP systems to the D365 cloud.',
    brochure: '/brochures/power-bi-insights.pdf',
    href: '/services/upgrade-and-migration',
  },
];

// Exact SVG logo reproductions — exported for use in nav + cards
export const SVG_BC = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="38" height="38">
  <circle cx="50" cy="50" r="42" fill="#0d7377"/>
  <rect x="47" y="8" width="6" height="16" rx="3" fill="#7de8ea"/>
  <rect x="47" y="76" width="6" height="16" rx="3" fill="#7de8ea"/>
  <rect x="8" y="47" width="16" height="6" rx="3" fill="#7de8ea"/>
  <rect x="76" y="47" width="16" height="6" rx="3" fill="#7de8ea"/>
  <circle cx="50" cy="8"  r="5.5" fill="#b0f4f4"/>
  <circle cx="50" cy="92" r="5.5" fill="#b0f4f4"/>
  <circle cx="8"  cy="50" r="5.5" fill="#b0f4f4"/>
  <circle cx="92" cy="50" r="5.5" fill="#b0f4f4"/>
  <circle cx="50" cy="50" r="26" fill="#14b8b8"/>
  <path d="M62,33 A18,18 0 1,0 62,67 L62,60 A11,11 0 1,1 62,40 Z" fill="#c5f0f0"/>
</svg>`;

export const SVG_LS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="38" height="38">
  <polygon points="40,4 76,22 40,40 4,22" fill="#1b7b8a"/>
  <polygon points="4,22 40,40 40,76 4,58"  fill="#0d5568"/>
  <polygon points="76,22 40,40 40,76 76,58" fill="#28a0b5"/>
  <line x1="40" y1="4"  x2="40" y2="40" stroke="#60d8e8" stroke-width="1.4"/>
  <line x1="40" y1="40" x2="40" y2="76" stroke="#60d8e8" stroke-width="0.8" opacity="0.5"/>
  <line x1="4"  y1="40" x2="76" y2="40" stroke="#60d8e8" stroke-width="0.8" opacity="0.5"/>
  <line x1="4"  y1="58" x2="76" y2="58" stroke="#60d8e8" stroke-width="0.6" opacity="0.3"/>
</svg>`;

export const SVG_D365 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 360" width="32" height="36">
  <!-- Microsoft Dynamics 365 — official angular 3D prism logo, dark navy -->
  <!-- Full dark body -->
  <path d="M28,18 L222,18 L282,108 L232,158 L148,338 L28,238 Z" fill="#1c2b8e"/>
  <!-- Upper-right white cut — top face separator -->
  <path d="M222,18 L282,108 L246,108 L186,18 Z" fill="white"/>
  <!-- Centre white V-notch — left/right face separator -->
  <path d="M54,142 L232,158 L148,276 Z" fill="white"/>
</svg>`;

export const SVG_FO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="44" height="38">
  <g transform="translate(26,38)">
    <circle r="15" fill="none" stroke="#1a4a8a" stroke-width="4.5"/>
    <circle r="5.5" fill="#1a4a8a"/>
    <rect x="-3"  y="-20" width="6" height="6" rx="1" fill="#1a4a8a"/>
    <rect x="-3"  y="14"  width="6" height="6" rx="1" fill="#1a4a8a"/>
    <rect x="-20" y="-3"  width="6" height="6" rx="1" fill="#1a4a8a"/>
    <rect x="14"  y="-3"  width="6" height="6" rx="1" fill="#1a4a8a"/>
  </g>
  <g transform="translate(52,18)">
    <circle r="9" fill="none" stroke="#1a4a8a" stroke-width="3.5"/>
    <circle r="3.5" fill="#1a4a8a"/>
    <rect x="-2.5" y="-13" width="5" height="5" rx="1" fill="#1a4a8a"/>
    <rect x="-2.5" y="8"   width="5" height="5" rx="1" fill="#1a4a8a"/>
    <rect x="-13"  y="-2.5" width="5" height="5" rx="1" fill="#1a4a8a"/>
    <rect x="8"    y="-2.5" width="5" height="5" rx="1" fill="#1a4a8a"/>
  </g>
  <rect x="62" y="44" width="9" height="26" rx="1.5" fill="#1a4a8a"/>
  <rect x="74" y="30" width="9" height="40" rx="1.5" fill="#1a4a8a"/>
  <rect x="86" y="20" width="9" height="50" rx="1.5" fill="#1a4a8a"/>
</svg>`;

export interface HomeCard {
  title: string;
  desc: string;
  href: string;
  badge?: string;
  badgeColor?: string;
  svgIcon?: string;
  imgSrc?: string;
  iconifyIcon?: string;
  iconColor?: string;
  highlight?: boolean;
}

export const homeCards: HomeCard[] = [
  {
    title: 'Business Central',
    desc: 'All-in-one ERP for SMEs — finance, sales & operations in one place.',
    href: '/microsoft-dynamic-365-business-central',
    badge: 'BC', badgeColor: '#0d7377',
    imgSrc: '/images/icons/Business_Central.png',
  },
  {
    title: 'Finance & Operations',
    desc: 'Enterprise-grade F&O management with real-time insights & compliance.',
    href: '/msd-365-finance-and-operations',
    badge: 'F&O', badgeColor: '#1a4a8a',
    imgSrc: '/images/icons/fno-logo.svg',
  },
  {
    title: 'CRM Solutions',
    desc: 'Boost sales pipeline and customer engagement with Dynamics 365 CRM.',
    href: '/erp-crm-implementations',
    badge: 'CRM', badgeColor: '#1c2b8e',
    imgSrc: '/images/icons/dynamics-365.jpg',
  },
  {
    title: 'LS Central',
    desc: 'Unified POS + ERP retail solution built on Business Central.',
    href: '/ls-retail',
    badge: 'LS', badgeColor: '#1b7b8a',
    imgSrc: '/images/icons/LS-CEntral-Logo.jpg',
  },
  {
    title: 'ERP Implementation',
    desc: 'End-to-end ERP consulting, configuration & go-live support.',
    href: '/services/erp-crm-support',
    badge: 'ERP', badgeColor: '#3D77BE',
    iconifyIcon: 'solar:settings-minimalistic-bold', iconColor: '#3D77BE',
  },
  {
    title: 'Manufacturing ERP',
    desc: 'Discrete, process & hybrid manufacturing on Dynamics 365.',
    href: '/manufacturing/discrete',
    badge: 'MFG', badgeColor: '#e65c00',
    iconifyIcon: 'solar:factory-bold', iconColor: '#e65c00',
  },
  {
    title: 'D365 Upgrade & Migration',
    desc: 'Seamless upgrade from AX / NAV to the latest Dynamics 365 cloud.',
    href: '/services/upgrade-and-migration',
    badge: 'AX→D365', badgeColor: '#1c2b8e',
    imgSrc: '/images/icons/dynamics-365.jpg',
  },
  {
    title: 'Power BI Analytics',
    desc: 'Real-time dashboards and BI reports integrated with D365.',
    href: '/power-bi',
    badge: 'BI', badgeColor: '#f2c811',
    imgSrc: '/images/icons/power-bi_logo_transparent.webp',
  },
  {
    title: 'Azure Cloud',
    desc: 'Azure cloud hosting optimised for Dynamics 365 workloads.',
    href: '/microsoft-azure-cloud-services-provider',
    badge: 'AZURE', badgeColor: '#0078d4',
    iconifyIcon: 'logos:microsoft-azure', iconColor: '',
  },
  {
    title: 'Application Support',
    desc: '24/7 AMS — keep your Dynamics 365 environment running smoothly.',
    href: '/services/ams',
    badge: 'AMS', badgeColor: '#107c10',
    iconifyIcon: 'solar:shield-check-bold', iconColor: '#107c10',
  },
  {
    title: 'Custom Development',
    desc: 'Bespoke extensions, integrations & ISV add-ons for D365.',
    href: '/services/custom-development-integration',
    badge: 'DEV', badgeColor: '#3D77BE',
    iconifyIcon: 'solar:code-2-bold', iconColor: '#3D77BE',
  },
];
