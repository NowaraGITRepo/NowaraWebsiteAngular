import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';

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
  compareRows: CompareRow[];
  formTitle: string;
  formSubTitle: string;
  formDesc: string;
}

@Component({
  selector: 'app-industry-page',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './industry-page.component.html',
})
export class IndustryPageComponent {
  @Input() config!: IndustryPageConfig;

  scrollToContact() {
    document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
  }
}
