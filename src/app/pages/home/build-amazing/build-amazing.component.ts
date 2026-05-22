import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-build-amazing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './build-amazing.component.html',
})
export class BuildAmazingComponent {
  services = [
    { icon: '/images/icons/icons8-food.webp', image: '/images/food/mocktails.webp', title: 'ERP for F&B', desc: 'Real-time inventory and forecasting to ensure adequate supply.' },
    { icon: '/images/icons/icons8-microsoft.webp', image: '/images/manufacturing/hybrid-manufacturing.webp', title: 'MS D365 Manufacturing', desc: 'A centralized method of managing every aspect of operations from production to payroll.' },
    { icon: '/images/icons/icons8-retail-50.webp', image: '/images/retail/hero-commerce.webp', title: 'ERP for Retail', desc: 'Unified commerce software that handles everything you need in one place.' },
    { icon: '/images/icons/icons8-pharmacy.webp', image: '/images/pharmacy/hero-pharma.webp', title: 'ERP for Pharmacy', desc: 'Optimally handle prescriptions and drugs with one unified solution.' },
    { icon: '/images/icons/android-os.webp', image: '/images/service/appdevelopment.webp', title: 'Android Development', desc: 'Custom mobile solutions built with the latest Android frameworks.' },
    { icon: '/images/icons/code.webp', image: '/images/service/fullstack.webp', title: 'Software Development', desc: 'Scalable enterprise applications tailored to solve business challenges.' },
    { icon: '/images/icons/power-bi_logo_transparent.webp', image: '/images/power-bi/dashboard.webp', title: 'Power BI Retail', desc: 'Transform retail data into actionable insights with visual dashboards.' },
    { icon: '/images/icons/add-on-services.webp', image: '/images/customer-service.webp', title: 'Add-on Services', desc: 'Includes HR & Payroll, Plant Maintenance, and Quality Control.' },
  ];
}
