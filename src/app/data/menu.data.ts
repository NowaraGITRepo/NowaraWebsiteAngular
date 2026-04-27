export interface SubmenuItem {
  label: string;
  href: string;
  icon?: string;
  iconColor?: string;
  submenu?: SubmenuItem[];
}

export interface HeaderItem {
  label: string;
  href: string;
  icon?: string;
  iconColor?: string;
  submenu?: SubmenuItem[];
}

export const headerData: HeaderItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Industry',
    href: '#',
    submenu: [
      { label: 'Discrete Manufacturing', href: '/manufacturing/discrete', icon: 'solar:settings-bold', iconColor: 'text-blue-600' },
      { label: 'Process Manufacturing', href: '/manufacturing/process', icon: 'solar:test-tube-bold', iconColor: 'text-amber-500' },
      { label: 'Hybrid Manufacturing', href: '/manufacturing/hybrid', icon: 'solar:layers-bold', iconColor: 'text-indigo-500' },
      { label: 'Food & Beverages', href: '/food-and-beverages', icon: 'fluent:food-cake-20-filled', iconColor: 'text-orange-500' },
      { label: 'Automotive Equipment', href: '/automotive-equipment', icon: 'fluent:vehicle-car-24-filled', iconColor: 'text-blue-500' },
      { label: 'Pharmacy ERP', href: '/erp-software-for-pharmacy-industry', icon: 'healthicons:medicines', iconColor: 'text-teal-500' },
      { label: 'Chemical Industry', href: '/chemical-industry', icon: 'fluent:beaker-20-filled', iconColor: 'text-purple-500' },
      { label: 'Steel & Metal', href: '/steel-and-metal', icon: 'fluent:settings-20-filled', iconColor: 'text-slate-500' },
      { label: 'Corrugated ERP', href: '/corrugated-erp', icon: 'solar:box-bold', iconColor: 'text-amber-700' },
      { label: 'Fashion ERP', href: '/fashion-erp', icon: 'solar:t-shirt-bold', iconColor: 'text-pink-500' },
      { label: 'Retail & E-commerce', href: '/microsoft-dynamics-365-for-e-commerce', icon: 'solar:cart-large-minimalistic-bold', iconColor: 'text-blue-600' },
    ],
  },
  {
    label: 'Practices',
    href: '#',
    submenu: [
      { label: 'MS Dynamics 365 F&O', href: '/msd-365-finance-and-operations', icon: 'solar:graph-up-bold', iconColor: 'text-indigo-600' },
      { label: 'Business Central', href: '/microsoft-dynamic-365-business-central', icon: 'solar:settings-bold', iconColor: 'text-blue-600' },
      { label: 'ERP & CRM', href: '/erp-crm-implementations', icon: 'solar:users-group-rounded-bold', iconColor: 'text-blue-500' },
      { label: 'Microsoft Azure', href: '/microsoft-azure-cloud-services-provider', icon: 'logos:microsoft-azure', iconColor: '' },
      { label: 'AWS Cloud Services', href: '/aws-cloud-services-provider', icon: 'logos:aws', iconColor: '' },
      { label: 'LS Retail / Central', href: '/ls-retail', icon: 'solar:box-bold', iconColor: 'text-blue-500' },
      { label: 'SAP', href: '/sap-web-service', icon: 'logos:sap', iconColor: '' },
      { label: 'Power BI', href: '/power-bi', icon: 'logos:microsoft-power-bi', iconColor: '' },
      { label: 'Google Looker', href: '/google-looker', icon: 'logos:looker-icon', iconColor: '' },
      { label: 'Tableau', href: '/tableau', icon: 'logos:tableau-icon', iconColor: '' },
    ],
  },
  {
    label: 'Services',
    href: '#',
    submenu: [
      { label: 'ERP Implementation & Consulting', href: '/services/erp-crm-support', icon: 'solar:settings-minimalistic-bold', iconColor: 'text-blue-600' },
      { label: 'Custom Development & Integration', href: '/services/custom-development-integration', icon: 'solar:code-2-bold', iconColor: 'text-indigo-600' },
      { label: 'Upgrade & Migration', href: '/services/upgrade-and-migration', icon: 'solar:refresh-square-bold', iconColor: 'text-orange-500' },
      { label: 'Application Support (AMS)', href: '/services/ams', icon: 'solar:shield-check-bold', iconColor: 'text-emerald-500' },
      { label: 'Resource Augmentation', href: '/services/resource-augmentation', icon: 'solar:users-group-rounded-bold', iconColor: 'text-purple-500' },
      { label: 'Web & Mobile App Development', href: '/services/apps-development', icon: 'solar:smartphone-2-bold', iconColor: 'text-rose-500' },
    ],
  },
  {
    label: 'Knowledge Base',
    href: '#',
    submenu: [
      { label: 'Blog', href: '/blogs', icon: 'solar:book-2-bold', iconColor: 'text-red-400' },
      { label: 'Case Study', href: '/case-study', icon: 'solar:info-circle-bold', iconColor: 'text-blue-400' },
      { label: 'Events', href: '/event-page', icon: 'solar:fire-bold', iconColor: 'text-yellow-600' },
      { label: 'Gallery', href: '/gallery', icon: 'solar:gallery-bold', iconColor: 'text-purple-400' },
    ],
  },
  {
    label: 'Contact',
    href: '#',
    submenu: [
      { label: 'Company Profile', href: '/about-nowara-infotech', icon: 'solar:home-2-bold', iconColor: 'text-slate-800' },
      { label: 'Career', href: '/career', icon: 'solar:user-plus-bold', iconColor: 'text-orange-600' },
      { label: 'Contact Us', href: '/contact-us', icon: 'solar:phone-calling-bold', iconColor: 'text-green-600' },
    ],
  },
];
