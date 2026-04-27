import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ScrollToTopComponent } from './components/shared/scroll-to-top/scroll-to-top.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ScrollToTopComponent],
  template: `
    <app-header></app-header>
    <main class="pt-24">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-scroll-to-top></app-scroll-to-top>
  `,
})
export class App implements OnInit {
  ngOnInit() {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  }
}
