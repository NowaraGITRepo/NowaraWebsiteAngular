import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-hero-sub',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  template: `
    <section
      class="relative w-full min-h-[320px] flex items-center justify-center overflow-hidden"
      [style.background-image]="'url(' + bgImage + ')'"
      style="background-size:cover;background-position:center">
      <div class="absolute inset-0 bg-[#102C46]/75"></div>
      <div class="relative z-10 text-center px-6 py-16">
        <h1 class="text-white text-4xl md:text-5xl font-black mb-4 drop-shadow-xl">{{ title }}</h1>
        <app-breadcrumb [crumbs]="crumbs"></app-breadcrumb>
      </div>
    </section>
  `,
})
export class HeroSubComponent {
  @Input() title = '';
  @Input() crumbs: string[] = [];
  @Input() bgImage = '/images/hero/hero-bg.webp';
}
