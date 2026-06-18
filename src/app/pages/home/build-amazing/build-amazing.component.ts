import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-build-amazing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './build-amazing.component.html',
})
export class BuildAmazingComponent {
  services = [
    // ── ERP Product Spotlight (top 4) ─────────────────────────────────────
    { icon: '/images/icons/Business_Central.png',               image: '/images/microsoft/D365-BUSINESS-CENTRAL.webp',     title: 'Business Central',      desc: 'All-in-one cloud ERP — finance, sales, purchasing & operations unified for growing businesses.',        href: '/microsoft-dynamic-365-business-central', highlight: true },
    { icon: '/images/icons/dynamics-365.jpg',                   image: '/images/microsoft/crm.webp',                       title: 'Dynamics 365 CRM',      desc: 'Supercharge sales and customer engagement with Microsoft Dynamics 365 CRM & Sales modules.',           href: '/erp-crm-implementations',                highlight: true },
    { icon: '/images/icons/fno-logo.svg',                       image: '/images/f&o/sales.webp',                           title: 'Finance & Operations',  desc: 'Enterprise-grade financial management, supply chain & manufacturing on Dynamics 365 F&O.',             href: '/msd-365-finance-and-operations',          highlight: true },
    { icon: '/images/icons/LS-CEntral-Logo.jpg',                image: '/images/lscentral/lscentral.webp',                 title: 'LS Central',            desc: 'The only all-in-one POS + ERP retail solution built natively on Business Central.',                   href: '/ls-retail',                              highlight: true },
    // ── Industry Solutions ────────────────────────────────────────────────
    { icon: '/images/icons/icons8-food.webp',                   image: '/images/food/mocktails.webp',                      title: 'ERP for F&B',           desc: 'Real-time inventory and forecasting to ensure adequate supply.',                                        href: '/food-and-beverages' },
    { icon: '/images/icons/icons8-microsoft.webp',              image: '/images/manufacturing/hybrid-manufacturing.webp',  title: 'MS D365 Manufacturing', desc: 'A centralized method of managing every aspect of operations from production to payroll.',              href: '/manufacturing/hybrid' },
    { icon: '/images/icons/icons8-retail-50.webp',              image: '/images/retail/hero-commerce.webp',                title: 'ERP for Retail',        desc: 'Unified commerce software that handles everything you need in one place.',                           href: '/ls-retail' },
    { icon: '/images/icons/icons8-pharmacy.webp',               image: '/images/pharmacy/hero-pharma.webp',                title: 'ERP for Pharmacy',      desc: 'Optimally handle prescriptions and drugs with one unified solution.',                               href: '/erp-software-for-pharmacy-industry' },
    { icon: '/images/icons/android-os.webp',                    image: '/images/service/appdevelopment.webp',              title: 'Android Development',   desc: 'Custom mobile solutions built with the latest Android frameworks.',                                 href: '/services/apps-development' },
    { icon: '/images/icons/code.webp',                          image: '/images/service/fullstack.webp',                   title: 'Software Development',  desc: 'Scalable enterprise applications tailored to solve business challenges.',                           href: '/services/custom-development-integration' },
    { icon: '/images/icons/power-bi_logo_transparent.webp',     image: '/images/power-bi/dashboard.webp',                  title: 'Power BI Retail',       desc: 'Transform retail data into actionable insights with visual dashboards.',                            href: '/power-bi' },
    { icon: '/images/icons/add-on-services.webp',               image: '/images/customer-service.webp',                   title: 'Add-on Services',       desc: 'Includes HR & Payroll, Plant Maintenance, and Quality Control.',                                    href: '/services/ams' },
  ];
}
