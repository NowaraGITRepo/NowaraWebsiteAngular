import { Component, HostListener, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { headerData, HeaderItem } from '../../../data/menu.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnDestroy {
  headerData: HeaderItem[] = headerData;
  sticky = false;
  navbarOpen = false;
  openDropdown: number | null = null;
  openMobileDropdown: number | null = null;

  private platformId = inject(PLATFORM_ID);

  constructor(public router: Router) {}

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.sticky = window.scrollY >= 50;
    }
  }

  toggleNav() {
    this.navbarOpen = !this.navbarOpen;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.navbarOpen ? 'hidden' : '';
    }
  }

  closeNav() {
    this.navbarOpen = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  toggleMobileDropdown(index: number) {
    this.openMobileDropdown = this.openMobileDropdown === index ? null : index;
  }

  isActive(href: string): boolean {
    return href !== '#' && href !== '/' && this.router.url.startsWith(href);
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}
