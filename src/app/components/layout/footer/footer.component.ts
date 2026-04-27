import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year = new Date().getFullYear();

  phones = [
    { label: 'India', number: '+91 9311205831' },
    { label: 'India', number: '+91 9638540355' },
    { label: 'UAE', number: '+971 585041986' },
  ];

  socials = [
    { href: 'https://facebook.com', icon: 'facebook', color: 'hover:bg-cyan-600' },
    { href: 'https://instagram.com', icon: 'instagram', color: 'hover:bg-gradient-to-tr' },
    { href: 'https://twitter.com', icon: 'twitter', color: 'hover:bg-sky-500' },
    { href: 'https://www.linkedin.com/company/nowara-infotech/', icon: 'linkedin', color: 'hover:bg-blue-700' },
  ];

  indiaOffices = [
    { city: 'Noida', addr: 'Anthurium Tower A-212, Sector 73, Noida 201301' },
    { city: 'Ahmedabad', addr: 'Sarkhej - Gandhinagar Hwy & Vaishnodevi Cir, Ahmedabad, Gujarat 382481' },
    { city: 'Bhagalpur', addr: 'C/O Shyam Kishore Ray, Ganga Vihar Colony, Bhagalpur, Bihar - 813210' },
  ];

  services = [
    { label: 'ERP Implementation & Consulting', href: '/services/erp-crm-support', icon: 'solar:settings-minimalistic-bold' },
    { label: 'Custom Development & Integration', href: '/services/custom-development-integration', icon: 'solar:code-2-bold' },
    { label: 'Upgrade & Migration', href: '/services/upgrade-and-migration', icon: 'solar:refresh-square-bold' },
    { label: 'Application Support (AMS)', href: '/services/ams', icon: 'solar:shield-check-bold' },
    { label: 'Resource Augmentation', href: '/services/resource-augmentation', icon: 'solar:users-group-rounded-bold' },
    { label: 'Web & Mobile App Development', href: '/services/apps-development', icon: 'solar:smartphone-2-bold' },
  ];

  crawlerLinks = [
    { href: '/manufacturing/discrete', label: 'Discrete Manufacturing' },
    { href: '/manufacturing/process', label: 'Process Manufacturing' },
    { href: '/manufacturing/hybrid', label: 'Hybrid Manufacturing' },
    { href: '/food-and-beverages', label: 'Food and Beverages ERP' },
    { href: '/automotive-equipment', label: 'Automotive ERP' },
    { href: '/erp-software-for-pharmacy-industry', label: 'Pharmacy ERP' },
    { href: '/chemical-industry', label: 'Chemical Industry ERP' },
    { href: '/steel-and-metal', label: 'Steel and Metal ERP' },
    { href: '/corrugated-erp', label: 'Corrugation ERP' },
    { href: '/fashion-erp', label: 'Fashion ERP' },
    { href: '/microsoft-dynamics-365-for-e-commerce', label: 'Retail and E-commerce ERP' },
    { href: '/msd-365-finance-and-operations', label: 'Finance and Operations' },
    { href: '/microsoft-dynamic-365-business-central', label: 'Business Central' },
    { href: '/erp-crm-implementations', label: 'CRM Implementation' },
    { href: '/microsoft-azure-cloud-services-provider', label: 'Microsoft Azure' },
    { href: '/aws-cloud-services-provider', label: 'AWS Cloud Services' },
    { href: '/ls-retail', label: 'LS Central' },
    { href: '/sap-web-service', label: 'SAP' },
    { href: '/power-bi', label: 'Power BI' },
    { href: '/google-looker', label: 'Google Looker' },
    { href: '/tableau', label: 'Tableau' },
    { href: '/about-nowara-infotech', label: 'About Nowara Infotech' },
    { href: '/career', label: 'Career' },
    { href: '/contact-us', label: 'Contact Us' },
  ];
}
