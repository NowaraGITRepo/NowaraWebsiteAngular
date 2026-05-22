import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';

@Component({
  selector: 'app-work-grow',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
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
    { value: '60+', label: 'Expert Engineers' },
  ];
}
