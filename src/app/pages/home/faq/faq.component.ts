import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { accordionData } from '../../../data/app.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  items = accordionData;
  activeIndex: number | null = null;

  toggle(i: number) {
    this.activeIndex = this.activeIndex === i ? null : i;
  }
}
