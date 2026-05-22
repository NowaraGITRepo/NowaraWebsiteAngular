import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SEO } from '../../data/seo-data';
import { NgFor } from '@angular/common';
import { HeroSubComponent } from '../../components/shared/hero-sub/hero-sub.component';
import { FaqComponent } from '../home/faq/faq.component';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [HeroSubComponent, FaqComponent],
  template: `
<div class="min-h-screen bg-white">
  <app-hero-sub title="FAQs" [crumbs]="['Home', 'FAQs']"></app-hero-sub>
  <div class="max-w-4xl mx-auto px-6 py-16">
    <app-faq></app-faq>
  </div>
</div>
  `,
})
export class FaqPageComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.faqs.title, SEO.faqs.description); }}
