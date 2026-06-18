import { Component, Input, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';

export interface IndustryCapability { title: string; desc: string; icon: string; }
export interface IndustryStep { step: string; title: string; desc: string; }
export interface CompareRow { feature: string; standard: string; dynamics: string; }

export interface IndustryPageConfig {
  badge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDesc: string;
  heroCta: string;
  heroImage: string;
  capabilitiesTitle: string;
  capabilities: IndustryCapability[];
  industriesTitle: string;
  industries: string[];
  stat1Value: string; stat1Label: string;
  stat2Value: string; stat2Label: string;
  workflowTitle: string;
  steps: IndustryStep[];
  compareRows?: CompareRow[];
  compareTitle?: string;
  compareSubtitle?: string;
  formTitle: string;
  formSubTitle: string;
  formDesc: string;
}

@Component({
  selector: 'app-industry-page',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, SafeHtmlPipe],
  templateUrl: './industry-page.component.html',
})
export class IndustryPageComponent {
  @Input() config!: IndustryPageConfig;
  private platformId = inject(PLATFORM_ID);

  scrollToContact() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
