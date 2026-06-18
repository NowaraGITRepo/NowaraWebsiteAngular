import { SVG_BC, SVG_FO, SVG_D365, SVG_LS } from './app.data';

export interface SubmenuItem {
  label: string;
  href: string;
  icon?: string;
  iconColor?: string;
  customIcon?: string;   // inline SVG string (takes priority over icon)
  submenu?: SubmenuItem[];
}

export interface HeaderItem {
  label: string;
  href: string;
  icon?: string;
  iconColor?: string;
  customIcon?: string;
  submenu?: SubmenuItem[];
}

export const headerData: HeaderItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Industry',
    href: '#',
    submenu: [
      {
        label: 'Manufacturing', href: '#',
        icon: 'solar:settings-bold', iconColor: 'text-blue-600',
        submenu: [
          { label: 'Discrete', href: '/manufacturing/discrete', icon: 'solar:settings-bold', iconColor: 'text-blue-600' },
          { label: 'Process',  href: '/manufacturing/process',  icon: 'solar:test-tube-bold', iconColor: 'text-amber-500' },
          { label: 'Hybrid',   href: '/manufacturing/hybrid',   icon: 'solar:layers-bold',    iconColor: 'text-indigo-500' },
        ],
      },
      { label: 'Food and Beverages', href: '/food-and-beverages',                    icon: 'fluent:food-cake-20-filled',          iconColor: 'text-orange-500' },
      { label: 'Automotive',         href: '/automotive-equipment',                  icon: 'fluent:vehicle-car-24-filled',         iconColor: 'text-blue-500'   },
      { label: 'Pharmacy',           href: '/erp-software-for-pharmacy-industry',    icon: 'healthicons:medicines',                iconColor: 'text-teal-500'   },
      { label: 'Chemical Industry',  href: '/chemical-industry',                     icon: 'fluent:beaker-20-filled',              iconColor: 'text-purple-500' },
      { label: 'Steel and Metal',    href: '/steel-and-metal',                       icon: 'fluent:settings-20-filled',            iconColor: 'text-slate-500'  },
      { label: 'Corrugation',        href: '/corrugated-erp',                        icon: 'solar:box-bold',                       iconColor: 'text-amber-700'  },
      { label: 'Fashion ERP',        href: '/fashion-erp',                           icon: 'solar:t-shirt-bold',                   iconColor: 'text-pink-500'   },
      {
        label: 'Retail', href: '#',
        icon: 'solar:cart-large-minimalistic-bold', iconColor: 'text-blue-600',
        submenu: [
          { label: 'E-commerce',   href: '/microsoft-dynamics-365-for-e-commerce', icon: 'solar:shop-bold',         iconColor: 'text-blue-500'   },
          { label: 'Supermarket',  href: '/supermarket-erp',                        icon: 'solar:cart-large-bold',   iconColor: 'text-emerald-500' },
        ],
      },
    ],
  },
  {
    label: 'Practices',
    href: '#',
    submenu: [
      {
        label: 'Microsoft dynamic 365', href: '#',
        customIcon: '<img src="/images/icons/dynamics-365.jpg" width="20" height="20" style="object-fit:contain;display:block"/>',
        submenu: [
          { label: 'Finance and Operations', href: '/msd-365-finance-and-operations',         customIcon: '<img src="/images/icons/fno-logo.svg" width="20" height="20" style="object-fit:contain;display:block"/>' },
          { label: 'Business Central',       href: '/microsoft-dynamic-365-business-central', customIcon: '<img src="/images/icons/Business_Central.png" width="20" height="20" style="object-fit:contain;display:block"/>' },
          { label: 'CRM',                    href: '/erp-crm-implementations',                customIcon: '<img src="/images/icons/dynamics-365.jpg" width="20" height="20" style="object-fit:contain;display:block"/>' },
        ],
      },
      {
        label: 'Cloud Services', href: '#',
        icon: 'solar:cloud-bold', iconColor: 'text-sky-500',
        submenu: [
          { label: 'Microsoft Azure',   href: '/microsoft-azure-cloud-services-provider', icon: 'logos:microsoft-azure', iconColor: '' },
          { label: 'AWS Cloud Services', href: '/aws-cloud-services-provider',            icon: 'logos:aws',             iconColor: '' },
        ],
      },
      { label: 'LS Central', href: '/ls-retail', customIcon: '<img src="/images/icons/LS-CEntral-Logo.jpg" width="20" height="20" style="object-fit:contain;display:block"/>' },
      { label: 'SAP',        href: '/sap-web-service',  icon: 'logos:sap',              iconColor: ''                },
      {
        label: 'Reporting Analytics', href: '#',
        icon: 'solar:chart-2-bold', iconColor: 'text-orange-500',
        submenu: [
          { label: 'Power BI',      href: '/power-bi',      icon: 'logos:microsoft-power-bi', iconColor: '' },
          { label: 'Google-looker', href: '/google-looker', icon: 'logos:looker-icon',        iconColor: '' },
          { label: 'Tableau',       href: '/tableau',       icon: 'logos:tableau-icon',       iconColor: '' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    href: '#',
    submenu: [
      { label: 'ERP Implementation & Consulting',   href: '/services/erp-crm-support',                 icon: 'solar:settings-minimalistic-bold', iconColor: 'text-blue-600'    },
      { label: 'Custom Development & Integration',  href: '/services/custom-development-integration',  icon: 'solar:code-2-bold',                iconColor: 'text-indigo-600'  },
      { label: 'Upgrade & Migration',               href: '/services/upgrade-and-migration',           icon: 'solar:refresh-square-bold',        iconColor: 'text-orange-500'  },
      { label: 'Application Support (AMS)',         href: '/services/ams',                             icon: 'solar:shield-check-bold',          iconColor: 'text-emerald-500' },
      { label: 'Resource Augmentation',             href: '/services/resource-augmentation',           icon: 'solar:users-group-rounded-bold',   iconColor: 'text-purple-500'  },
      { label: 'Web & Mobile App Development',      href: '/services/apps-development',                icon: 'solar:smartphone-2-bold',          iconColor: 'text-rose-500'    },
    ],
  },
  {
    label: 'Knowledge Base',
    href: '#',
    submenu: [
      { label: 'Blog',       href: '/blogs',        icon: 'solar:book-2-bold',     iconColor: 'text-red-400'    },
      { label: 'Case Study', href: '/case-study',   icon: 'solar:info-circle-bold', iconColor: 'text-blue-400'  },
      { label: 'Events',     href: '/event-page',   icon: 'solar:fire-bold',        iconColor: 'text-yellow-600' },
      { label: 'Gallery',    href: '/gallery',       icon: 'solar:gallery-bold',    iconColor: 'text-purple-400' },
    ],
  },
  {
    label: 'Contact',
    href: '#',
    submenu: [
      { label: 'Company Profile', href: '/about-nowara-infotech', icon: 'solar:home-2-bold',        iconColor: 'text-slate-800'  },
      { label: 'Career',          href: '/career',                icon: 'solar:user-plus-bold',     iconColor: 'text-orange-600' },
      { label: 'Contact Us',      href: '/contact-us',            icon: 'solar:phone-calling-bold', iconColor: 'text-green-600'  },
    ],
  },
];
