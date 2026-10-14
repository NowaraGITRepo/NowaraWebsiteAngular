import { Component, HostListener, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { headerData, HeaderItem } from '../../../data/menu.data';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, SafeHtmlPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styles: [`
    :host {
      --ink: #14233d;
      --blue: #3D77BE; --violet: #8B5CF6; --pink: #F472B6; --orange: #FB923C;
      --ring: linear-gradient(115deg, #3D77BE, #8B5CF6 38%, #F472B6 70%, #FB923C 100%);
      font-family: 'Segoe UI Variable Display', 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
      display: block;
    }

    /* ── Bar: glass + hero-tinted wash + progress hairline ─── */
    .hd-glass {
      background: rgba(255,255,255,.25);
      -webkit-backdrop-filter: blur(18px) saturate(1.6);
              backdrop-filter: blur(18px) saturate(1.6);
      transition: background .4s ease, box-shadow .4s ease;
    }
    .hd-glass::after {
      content: ''; position: absolute; inset: auto 0 0 0; height: 1px; transition: background .4s ease;
      background: linear-gradient(90deg, transparent, rgba(139,92,246,.30), rgba(244,114,182,.30), transparent);
    }
    .hd-tint {
      background: linear-gradient(90deg,
        rgba(196,189,238,.82) 0%, rgba(236,206,226,.72) 36%, rgba(250,228,222,.72) 68%, rgba(255,244,232,.55) 100%);
      transition: opacity .45s ease;
    }
    .is-scrolled .hd-glass { background: rgba(255,255,255,.92); box-shadow: 0 10px 34px rgba(20,35,61,.10); }
    .is-scrolled .hd-glass::after { background: rgba(20,35,61,.08); }
    .is-scrolled .hd-tint { opacity: .22; }
    .hd-progress {
      position: absolute; left: 0; bottom: 0; z-index: 1; height: 2px; pointer-events: none;
      background: var(--ring); box-shadow: 0 0 12px rgba(139,92,246,.55);
      opacity: 0; transition: opacity .3s ease, width .12s linear;
    }
    .is-scrolled .hd-progress { opacity: 1; }

    /* ── Logo ──────────────────────────────────────────────── */
    .hd-word   { font-size: 14px; font-weight: 800; letter-spacing: .24em; color: var(--ink); }
    .hd-word-2 { font-size: 11px; font-weight: 700; letter-spacing: .36em; color: var(--blue); }
    .hd-logo img { transition: transform .4s cubic-bezier(.2,.8,.2,1); }
    .hd-logo:hover img { transform: rotate(-6deg) scale(1.06); }

    /* ── Desktop links ─────────────────────────────────────── */
    .hd-link {
      position: relative; display: inline-flex; align-items: center; padding: 8px 12px;
      border: 0; border-radius: 9999px; background: transparent; cursor: pointer; white-space: nowrap;
      font: inherit; font-size: 14.5px; font-weight: 600; letter-spacing: -.005em; color: var(--ink); text-decoration: none;
      transition: color .25s ease, background .25s ease;
    }
    .hd-link::after {
      content: ''; position: absolute; left: 14px; right: 14px; bottom: 3px; height: 2px; border-radius: 2px;
      background: var(--ring); transform: scaleX(0); transform-origin: left;
      transition: transform .35s cubic-bezier(.2,.8,.2,1);
    }
    .hd-link:hover, .hd-link.is-open { color: #2f5f9e; background: rgba(139,92,246,.07); }
    .hd-link:hover::after, .hd-link.is-open::after { transform: scaleX(.55); }
    .hd-link.is-active { color: var(--blue); }
    .hd-link.is-active::after { transform: scaleX(1); }
    .hd-link:focus-visible, .hd-item:focus-visible, .hd-burger:focus-visible, .hd-cta:focus-visible,
    .hd-m-row:focus-visible, .hd-m-sub:focus-visible, .hd-m-child:focus-visible { outline: 3px solid rgba(139,92,246,.5); outline-offset: 2px; }

    /* ── Dropdown panels ───────────────────────────────────── */
    .hd-panel {
      position: relative; border-radius: 18px; border: 1px solid rgba(20,35,61,.08);
      background: rgba(255,255,255,.96);
      -webkit-backdrop-filter: blur(18px); backdrop-filter: blur(18px);
      box-shadow: 0 28px 64px rgba(20,35,61,.18), 0 6px 18px rgba(139,92,246,.10);
    }
    .hd-panel::before {            /* gradient edge, inset so it never clips the flyout */
      content: ''; position: absolute; top: -1px; left: 22px; right: 22px; height: 2px; border-radius: 2px; background: var(--ring);
    }
    .hd-pop { transform-origin: top left; animation: hd-pop .22s cubic-bezier(.2,.8,.2,1) both; }

    .hd-item {
      display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 7px 10px;
      border-radius: 12px; font-size: 14px; font-weight: 600; color: var(--ink); text-decoration: none; cursor: pointer;
      transition: background .2s ease, color .2s ease;
    }
    .hd-item:hover, .hd-item.is-hover { color: #2f5f9e; background: linear-gradient(90deg, rgba(61,119,190,.11), rgba(139,92,246,.08)); }
    .hd-ico {
      display: flex; width: 32px; height: 32px; flex-shrink: 0; align-items: center; justify-content: center;
      border-radius: 10px; background: #eef3fb; transition: background .2s ease, box-shadow .25s ease, transform .25s ease;
    }
    .hd-item:hover .hd-ico, .hd-item.is-hover .hd-ico { background: #fff; box-shadow: 0 4px 12px rgba(61,119,190,.22); transform: scale(1.07); }
    .hd-dot   { width: 8px; height: 8px; border-radius: 9999px; background: linear-gradient(135deg, var(--blue), var(--violet)); }
    .hd-arrow { color: #94a3b8; transition: transform .25s ease, color .25s ease; }
    .hd-item:hover .hd-arrow, .hd-item.is-hover .hd-arrow { color: var(--violet); transform: translateX(2px); }

    /* ── CTA ───────────────────────────────────────────────── */
    .hd-cta {
      align-items: center; gap: 8px; padding: 9px 20px; border-radius: 9999px; white-space: nowrap;
      font-size: 14px; font-weight: 600; letter-spacing: .005em; color: #fff; text-decoration: none; cursor: pointer;
      background: linear-gradient(110deg, #3D77BE, #8B5CF6 55%, #E0489B); background-size: 200% 100%;
      box-shadow: 0 8px 20px rgba(139,92,246,.30);
      transition: background-position .5s ease, transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s ease;
    }
    .hd-cta:hover { background-position: 100% 0; transform: translateY(-2px); box-shadow: 0 14px 28px rgba(139,92,246,.40); }
    .hd-cta svg { transition: transform .4s ease; }
    .hd-cta:hover svg { transform: rotate(20deg) scale(1.2); }
    .hd-cta.hidden { display: none; }
    @media (min-width: 1024px) { .hd-cta.hidden { display: inline-flex; } }

    /* ── Hamburger / close ─────────────────────────────────── */
    .hd-burger {
      display: flex; width: 42px; height: 42px; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
      border-radius: 14px; border: 1px solid rgba(20,35,61,.10); background: rgba(255,255,255,.75); color: var(--ink); cursor: pointer;
      transition: background .25s ease, border-color .25s ease;
    }
    .hd-burger:hover { background: #fff; border-color: rgba(139,92,246,.4); }
    /* Mobile-only toggle: component CSS outranks Tailwind's lg:hidden, so hide it explicitly */
    @media (min-width: 1024px) { .hd-burger-mobile { display: none; } }

    /* ── Mobile drawer ─────────────────────────────────────── */
    .hd-drawer {
      background: #fff; border-radius: 26px 0 0 26px; overflow: hidden;
      box-shadow: -24px 0 60px rgba(20,35,61,.22);
    }
    .hd-drawer::before { content: ''; position: absolute; inset: 0 0 auto 0; height: 3px; background: var(--ring); }
    .hd-drawer-head { border-bottom: 1px solid rgba(20,35,61,.08); }
    .hd-drawer-foot { border-top: 1px solid rgba(20,35,61,.08); background: linear-gradient(180deg, #fff, #f7f9fe); }

    .hd-m-row {
      display: flex; align-items: center; justify-content: space-between; padding: 15px 22px; border: 0; background: transparent; cursor: pointer;
      font: inherit; font-size: 15.5px; font-weight: 700; color: var(--ink); text-decoration: none; text-align: left;
      border-bottom: 1px solid rgba(20,35,61,.05); transition: background .2s ease, color .2s ease;
    }
    .hd-m-row:hover, .hd-m-row.is-open { color: #2f5f9e; background: linear-gradient(90deg, rgba(61,119,190,.09), rgba(139,92,246,.05)); }
    .hd-m-group { background: #f7f9fe; }
    .hd-m-sub {
      display: flex; align-items: center; gap: 10px; padding: 12px 22px 12px 32px; border: 0; background: transparent; cursor: pointer;
      font: inherit; font-size: 14px; font-weight: 600; color: #3a4658; text-decoration: none; text-align: left;
      border-bottom: 1px solid rgba(20,35,61,.05); transition: background .2s ease, color .2s ease;
    }
    .hd-m-sub:hover { color: #2f5f9e; background: rgba(61,119,190,.08); }
    .hd-m-nest { margin-left: 32px; background: #fff; border-left: 3px solid var(--violet); }
    .hd-m-child {
      display: flex; align-items: center; gap: 9px; padding: 10px 18px; font-size: 13.5px; font-weight: 500; color: #4b576b; text-decoration: none;
      transition: background .2s ease, color .2s ease;
    }
    .hd-m-child:hover { color: #2f5f9e; background: rgba(61,119,190,.07); }
    .hd-m-open { animation: hd-slide .25s ease both; }

    .hd-overlay { background: rgba(11,20,38,.45); -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px); animation: hd-fade .3s ease both; }

    /* ── Keyframes ─────────────────────────────────────────── */
    @keyframes hd-pop   { from { opacity: 0; transform: translateY(-8px) scale(.97); } to { opacity: 1; transform: none; } }
    @keyframes hd-slide { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
    @keyframes hd-fade  { from { opacity: 0; } to { opacity: 1; } }

    @media (prefers-reduced-motion: reduce) {
      .hd-pop, .hd-m-open, .hd-overlay { animation: none; }
      .hd-link::after, .hd-logo img, .hd-cta, .hd-cta svg, .hd-progress { transition: none; }
    }
  `],
})
export class HeaderComponent implements OnDestroy {
  headerData: HeaderItem[] = headerData;
  sticky           = false;
  progress         = 0;                      // page scroll progress, 0–100
  navbarOpen       = false;
  openDropdown     : number | null = null;
  openSubDropdown  : string | null = null;   // key = sub.label for level-2 flyout

  // Mobile accordion
  openMobileDropdown    : number | null = null;
  openMobileSubDropdown : string | null = null;  // key = i + '-' + j

  private platformId = inject(PLATFORM_ID);

  constructor(public router: Router) {}

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.sticky = window.scrollY >= 50;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      this.progress = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeAllDropdowns();
    if (this.navbarOpen) this.closeNav();
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

  closeAllDropdowns() {
    this.openDropdown    = null;
    this.openSubDropdown = null;
  }

  toggleMobileDropdown(index: number) {
    this.openMobileDropdown    = this.openMobileDropdown === index ? null : index;
    this.openMobileSubDropdown = null;
  }

  toggleMobileSubDropdown(key: string) {
    this.openMobileSubDropdown = this.openMobileSubDropdown === key ? null : key;
  }

  isActive(href: string): boolean {
    return href !== '#' && href !== '/' && this.router.url.startsWith(href);
  }

  navigateIfLink(href: string): void {
    if (href && href !== '#') {
      this.closeAllDropdowns();
      this.router.navigate([href]);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}