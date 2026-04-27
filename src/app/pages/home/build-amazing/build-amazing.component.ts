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
    { icon: '/images/icons/icons8-food.webp', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600', title: 'ERP for F&B', desc: 'Real-time inventory and forecasting to ensure adequate supply.' },
    { icon: '/images/icons/icons8-microsoft.webp', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600', title: 'MS D365 Manufacturing', desc: 'A centralized method of managing every aspect of operations from production to payroll.' },
    { icon: '/images/icons/icons8-retail-50.webp', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600', title: 'ERP for Retail', desc: 'Unified commerce software that handles everything you need in one place.' },
    { icon: '/images/icons/icons8-pharmacy.webp', image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=600', title: 'ERP for Pharmacy', desc: 'Optimally handle prescriptions and drugs with one unified solution.' },
    { icon: '/images/icons/android-os.webp', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800', title: 'Android Development', desc: 'Custom mobile solutions built with the latest Android frameworks.' },
    { icon: '/images/icons/code.webp', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800', title: 'Software Development', desc: 'Scalable enterprise applications tailored to solve business challenges.' },
    { icon: '/images/icons/power-bi_logo_transparent.webp', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', title: 'Power BI Retail', desc: 'Transform retail data into actionable insights with visual dashboards.' },
    { icon: '/images/icons/add-on-services.webp', image: '/images/customer-service.webp', title: 'Add-on Services', desc: 'Includes HR & Payroll, Plant Maintenance, and Quality Control.' },
  ];
}
