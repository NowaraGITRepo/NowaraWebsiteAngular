import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs/operators';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ScrollToTopComponent } from './components/shared/scroll-to-top/scroll-to-top.component';
import { CursorComponent } from './components/shared/cursor/cursor.component';
import { SeoService } from './services/seo.service';
// AOS loaded dynamically to keep it out of the critical bundle

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ScrollToTopComponent, CursorComponent],
  template: `
    <app-cursor></app-cursor>

    <app-header *ngIf="!hideLayout"></app-header>

    <main [class.pt-16]="!hideLayout">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
    <app-scroll-to-top></app-scroll-to-top>
  `,
})
export class App implements OnInit {
  private platformId   = inject(PLATFORM_ID);
  private router       = inject(Router);
  private activedRoute = inject(ActivatedRoute);
  private seo          = inject(SeoService);
  hideLayout = false;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Dynamically import AOS after idle to avoid TBT impact
      const initAos = async () => {
        const { default: AOS } = await import('aos');
        AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
      };
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(initAos, { timeout: 2000 });
      } else {
        setTimeout(initAos, 300);
      }
    }

    // Apply SEO meta on every navigation
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        let route = this.activedRoute;
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
    ).subscribe(route => {
      this.hideLayout = this.router.url.includes('/CXO-Roundtable-Conference-2026');
      const seoData = route.snapshot.data?.['seo'];
      const path    = this.router.url.replace(/^\//, '');
      if (seoData) {
        this.seo.update(seoData, path);
      }
    });
  }
}
