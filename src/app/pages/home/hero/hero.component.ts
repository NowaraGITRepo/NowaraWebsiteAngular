import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';
import { homeCards } from '../../../data/app.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  cards = homeCards;
  isOpen = false;

  nodes = [
    { label: 'Dynamics', icon: 'boxes', top: '10%', left: '50%', color: 'text-blue-600' },
    { label: 'App / Web Dev', icon: 'layout', top: '30%', left: '85%', color: 'text-emerald-600' },
    { label: 'Power BI', icon: 'bar-chart', top: '65%', left: '80%', color: 'text-amber-500' },
    { label: 'LS Central', icon: 'shopping-cart', top: '85%', left: '50%', color: 'text-rose-500' },
    { label: 'Cloud Services', icon: 'cloud', top: '65%', left: '15%', color: 'text-sky-500' },
    { label: 'Power Apps', icon: 'zap', top: '28%', left: '10%', color: 'text-indigo-600' },
  ];

  openModal() { this.isOpen = true; document.body.style.overflow = 'hidden'; }
  closeModal() { this.isOpen = false; document.body.style.overflow = ''; }
}
