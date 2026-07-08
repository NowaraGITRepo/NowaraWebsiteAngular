import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';

@Component({
  selector: 'app-work-grow',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, RouterLink],
  templateUrl: './work-grow.component.html',
})
export class WorkGrowComponent {
  private platformId = inject(PLATFORM_ID);
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = 'hidden';
  }
  closeModal() {
    this.isModalOpen = false;
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = '';
  }

  stats = [
    { value: '50+', label: 'Global Clients' },
    { value: '4',   label: 'Regional Hubs' },
    { value: '30+', label: 'Years of Success' },
    { value: '60+', label: 'Expert Professionals' },
  ];

  techStack = [
    { icon: '/images/icons/Business_Central.png',           label: 'Business Central',      href: '/microsoft-dynamic-365-business-central' },
    { icon: '/images/icons/dynamics-365.jpg',               label: 'Dynamics 365 CRM',      href: '/erp-crm-implementations' },
    { icon: '/images/icons/fno-logo.svg',                   label: 'Finance & Operations',  href: '/msd-365-finance-and-operations' },
    { icon: '/images/icons/LS-CEntral-Logo.jpg',            label: 'LS Central',            href: '/ls-retail' },
    { icon: '/images/icons/power-bi_logo_transparent.webp', label: 'Power BI',              href: '/power-bi' },
    { icon: '/images/icons/android-os.webp',                label: 'Android Dev',           href: '/services/apps-development' },
    { icon: '/images/icons/code.webp',                      label: 'Custom Dev',            href: '/services/custom-development-integration' },
    { icon: '/images/icons/add-on-services.webp',           label: 'Add-on Services',       href: '/services/ams' },
  ];
}
