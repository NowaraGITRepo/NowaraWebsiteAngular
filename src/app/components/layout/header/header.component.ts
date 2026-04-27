import { Component, HostListener, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(public router: Router) {}

  @HostListener('window:scroll')
  onScroll() {
    this.sticky = window.scrollY >= 50;
  }

  toggleNav() {
    this.navbarOpen = !this.navbarOpen;
    document.body.style.overflow = this.navbarOpen ? 'hidden' : '';
  }

  closeNav() {
    this.navbarOpen = false;
    document.body.style.overflow = '';
  }

  toggleMobileDropdown(index: number) {
    this.openMobileDropdown = this.openMobileDropdown === index ? null : index;
  }

  isActive(href: string): boolean {
    return href !== '#' && href !== '/' && this.router.url.startsWith(href);
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }
}
