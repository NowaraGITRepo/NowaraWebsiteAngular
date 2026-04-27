import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSliderComponent } from '../../components/shared/hero-slider/hero-slider.component';
import { HeroComponent } from './hero/hero.component';
import { BuildAmazingComponent } from './build-amazing/build-amazing.component';
import { WorkGrowComponent } from './work-grow/work-grow.component';
import { FaqComponent } from './faq/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroSliderComponent, HeroComponent, BuildAmazingComponent, WorkGrowComponent, FaqComponent],
  template: `
    <app-hero-slider></app-hero-slider>
    <app-hero></app-hero>
    <app-build-amazing></app-build-amazing>
    <app-work-grow></app-work-grow>
    <app-faq></app-faq>
  `,
})
export class HomeComponent {}
