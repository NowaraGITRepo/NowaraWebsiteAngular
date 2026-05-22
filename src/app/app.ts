import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ScrollToTopComponent } from './components/shared/scroll-to-top/scroll-to-top.component';
import { CursorComponent } from './components/shared/cursor/cursor.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ScrollToTopComponent, CursorComponent],
  template: `
    <app-cursor></app-cursor>
    <app-header></app-header>
    <main class="pt-24">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-scroll-to-top></app-scroll-to-top>
  `,
})
export class App implements OnInit {
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
    }
  }
}
