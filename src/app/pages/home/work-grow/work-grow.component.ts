import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';

@Component({
  selector: 'app-work-grow',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, RouterLink],
  templateUrl: './work-grow.component.html',
  styles: [`
    :host {
      --ink:   #14233d;   /* printer's ink      */
      --paper: #f7f9fe;   /* page base          */
      --plate: #fbfcff;   /* plate surface      */
      --brass: #b8914a;   /* ornaments          */
      --brass-dk: #7a5c22;/* brass text         */
      --cp-blue: #3D77BE; --cp-violet: #8B5CF6; --cp-pink: #F472B6; --cp-orange: #FB923C;
      --blue:  #1b4a7a;   /* blue ink (brand)   */
      display: block;
    }

    .wg-display { font-family: 'Segoe UI Variable Display', 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif; }

    /* ── Copilot background: light mesh, drifting glows, dot grid ── */
    .wg-section {
      background:
        radial-gradient(900px 520px at 90% 0%,    rgba(61,119,190,.20),  transparent 62%),
        radial-gradient(800px 480px at 4%  28%,   rgba(139,92,246,.15),  transparent 62%),
        radial-gradient(800px 500px at 66% 106%,  rgba(244,114,182,.16), transparent 62%),
        radial-gradient(600px 400px at 0%  100%,  rgba(251,146,60,.12),  transparent 62%),
        var(--paper);
    }
    .wg-section::before {           /* brass edge against the section above */
      content: ''; position: absolute; inset: 0 0 auto 0; height: 3px;
      border-top: 1px solid var(--brass); border-bottom: 1px solid var(--brass);
    }
    .wg-aurora   { animation: wg-drift 22s ease-in-out infinite; }
    .wg-aurora-b { animation-duration: 30s; animation-direction: reverse; }
    .wg-grid {
      background-image: radial-gradient(rgba(20,35,61,.08) 1px, transparent 1px);
      background-size: 28px 28px;
      -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 20%, transparent 78%);
              mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 20%, transparent 78%);
    }
    @keyframes wg-drift { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-24px); } }

    /* ── Boundary banner ───────────────────────────────────── */
    .wg-banner {
      display: inline-flex; align-items: center; gap: 14px; white-space: nowrap;
      padding: 9px 26px; font-size: 14px; font-weight: 600; letter-spacing: .02em;
      color: var(--ink); background: var(--plate);
      border: 1px solid var(--ink); outline: 1px solid var(--ink); outline-offset: 3px;
      box-shadow: 0 8px 24px rgba(11,20,38,.25);
    }
    .wg-fleuron { color: var(--brass-dk); font-size: 18px; line-height: 1; }
    .wg-flip { transform: scaleX(-1); }

    /* ── Double-rule frame with corner studs ───────────────── */
    .wg-frame {
      position: relative; padding: 56px 48px;
      border: 1px solid var(--ink); outline: 1px solid var(--ink); outline-offset: -10px;
    }
    @media (max-width: 640px) { .wg-frame { padding: 36px 22px; } }
    .wg-corner {
      position: absolute; width: 11px; height: 11px; background: var(--brass);
      transform: rotate(45deg); border: 1px solid var(--ink);
    }
    .wg-c-tl { top: -6px;    left: -6px; }
    .wg-c-tr { top: -6px;    right: -6px; }
    .wg-c-bl { bottom: -6px; left: -6px; }
    .wg-c-br { bottom: -6px; right: -6px; }

    /* ── Headline ──────────────────────────────────────────── */
    .wg-kicker { font-size: 15px; font-weight: 600; letter-spacing: .02em; color: var(--brass-dk); margin-bottom: 12px; }
    .wg-title  { font-size: clamp(2.1rem, 4.2vw, 3.7rem); font-weight: 800; line-height: 1.06; color: var(--ink); letter-spacing: -.03em; }
    .wg-title-blue { color: var(--blue); }
    .wg-through { font-size: clamp(16px, 1.8vw, 21px); font-weight: 500; color: var(--brass-dk); }
    .wg-rule { width: 48px; height: 3px; border-top: 1px solid var(--brass); border-bottom: 1px solid var(--brass); }
    .wg-hair { height: 1px; background: linear-gradient(90deg, transparent, var(--brass), transparent); }

    /* ── CTA ───────────────────────────────────────────────── */
    .wg-cta {
      display: inline-flex; align-items: center; gap: 14px; cursor: pointer;
      padding: 16px 34px; font-size: 16px; font-weight: 600; letter-spacing: .01em;
      color: var(--paper); background: var(--ink);
      outline: 1px solid var(--brass); outline-offset: -6px;
      transition: background .3s ease, transform .3s ease, box-shadow .3s ease;
      box-shadow: 0 10px 24px rgba(20,35,61,.28);
    }
    .wg-cta:hover { background: var(--blue); transform: translateY(-2px); box-shadow: 0 16px 30px rgba(27,74,122,.35); }
    .wg-cta:focus-visible, .wg-stamp:focus-visible, .wg-close:focus-visible { outline: 2px solid var(--blue); outline-offset: 4px; }

    /* ── Ledger plate ──────────────────────────────────────── */
    .wg-plate {
      position: relative; padding: 34px 30px 14px; background: var(--plate);
      border: 1px solid var(--ink); outline: 1px solid var(--ink); outline-offset: -6px;
      box-shadow: 0 24px 50px rgba(20,35,61,.16);
    }
    .wg-plate-title {
      font-size: 21px; font-weight: 700; letter-spacing: -.01em; color: var(--ink); padding-bottom: 12px; margin-bottom: 6px;
      border-bottom: 3px double var(--ink);
    }
    .wg-row {
      display: flex; align-items: baseline; gap: 10px; padding: 18px 8px;
      transition: background .3s ease;
    }
    .wg-row + .wg-row { border-top: 1px solid rgba(20,35,61,.15); }
    .wg-row:hover { background: rgba(184,145,74,.12); }
    .wg-label { font-size: 15px; font-weight: 500; color: var(--ink); }
    .wg-leader {
      flex: 1; min-width: 20px; align-self: flex-end; margin-bottom: 6px;
      border-bottom: 2px dotted rgba(20,35,61,.35); transition: border-color .3s ease;
    }
    .wg-row:hover .wg-leader { border-color: var(--brass-dk); }
    .wg-value { font-size: 38px; font-weight: 800; letter-spacing: -.03em; font-variant-numeric: tabular-nums; line-height: 1; color: var(--blue); transition: transform .3s ease; }
    .wg-row:hover .wg-value { transform: translateX(-4px); }

    /* ── Seal ──────────────────────────────────────────────── */
    .wg-seal {
      position: absolute; z-index: 5; top: -64px; right: -26px; width: 124px; height: 124px;
      transform: rotate(-8deg); filter: drop-shadow(0 10px 14px rgba(20,35,61,.35));
    }
    .wg-ring { transform-origin: 80px 80px; animation: wg-spin 40s linear infinite; }
    @media (max-width: 1023px) { .wg-seal { top: -54px; right: 8px; width: 100px; height: 100px; } }
    @keyframes wg-spin { to { transform: rotate(360deg); } }

    /* ── Postage stamps ────────────────────────────────────── */
    .wg-stamp {
      position: relative; display: block; padding: 10px; cursor: pointer;
      transform: rotate(var(--tilt, -1.2deg));
      filter: drop-shadow(0 6px 8px rgba(20,35,61,.18));
      transition: transform .35s cubic-bezier(.2,.8,.2,1), filter .35s ease;
    }
    .wg-stamp:nth-child(even) { --tilt: 1.1deg; }
    .wg-stamp:nth-child(3n)   { --tilt: -.5deg; }
    .wg-stamp::before {             /* stamp paper with perforated (cut-out) edge */
      content: ''; position: absolute; inset: 0; background: var(--plate);
      -webkit-mask-image:
        radial-gradient(circle at 5px 0,    transparent 4px, #000 4.5px),
        radial-gradient(circle at 5px 100%, transparent 4px, #000 4.5px),
        radial-gradient(circle at 0 5px,    transparent 4px, #000 4.5px),
        radial-gradient(circle at 100% 5px, transparent 4px, #000 4.5px);
              mask-image:
        radial-gradient(circle at 5px 0,    transparent 4px, #000 4.5px),
        radial-gradient(circle at 5px 100%, transparent 4px, #000 4.5px),
        radial-gradient(circle at 0 5px,    transparent 4px, #000 4.5px),
        radial-gradient(circle at 100% 5px, transparent 4px, #000 4.5px);
      -webkit-mask-size: 10px 100%, 10px 100%, 100% 10px, 100% 10px;
              mask-size: 10px 100%, 10px 100%, 100% 10px, 100% 10px;
      -webkit-mask-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
              mask-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
      -webkit-mask-composite: source-in;
              mask-composite: intersect;
    }
    .wg-stamp:hover { transform: rotate(0) translateY(-8px); filter: drop-shadow(0 16px 14px rgba(20,35,61,.26)); }
    .wg-stamp-inner {
      position: relative; z-index: 1;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
      width: 124px; height: 112px; padding: 8px; text-align: center;
      border: 1px solid rgba(20,35,61,.4); transition: border-color .3s ease;
    }
    .wg-stamp:hover .wg-stamp-inner { border-color: var(--brass-dk); }
    .wg-stamp-inner img { mix-blend-mode: multiply; }
    .wg-stamp-label { font-size: 12.5px; line-height: 1.25; font-weight: 600; color: var(--ink); }

    /* ── Modal ─────────────────────────────────────────────── */
    .wg-modal {
      background: var(--plate); border: 1px solid var(--ink);
      outline: 1px solid var(--ink); outline-offset: -8px;
      box-shadow: 0 40px 80px rgba(0,0,0,.45);
    }
    .wg-close {
      padding: 8px; color: var(--ink); background: transparent; border: 1px solid var(--ink);
      transition: background .25s ease, color .25s ease, transform .25s ease;
    }
    .wg-close:hover { background: var(--ink); color: var(--paper); transform: rotate(90deg); }

    @media (prefers-reduced-motion: reduce) {
      .wg-ring, .wg-aurora { animation: none; }
      .wg-stamp, .wg-cta, .wg-row, .wg-value, .wg-close { transition: none; }
    }
  `],
})
export class WorkGrowComponent {
  private platformId = inject(PLATFORM_ID);
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isModalOpen) this.closeModal();
  }

  stats = [
    { value: '50+', label: 'Global Clients' },
    { value: '4',   label: 'Regional Hubs' },
    { value: '30+', label: 'Years of Success' },
    { value: '60+', label: 'Expert Professionals' },
  ];

  techStack = [
    { icon: '/images/icons/Business_Central.png',           label: 'Business Central',      href: '/microsoft-dynamic-365-business-central' },
    { icon: '/images/icons/dynamics-365.jpg',               label: 'Dynamics 365 CRM',      href: '/erp-crm-implementations' },
    { icon: '/images/icons/fno-logo.svg',                   label: 'Finance & Operations',  href: '/msd-365-finance-and-operations' },
    { icon: '/images/icons/LS-CEntral-Logo.jpg',            label: 'LS Central',            href: '/ls-retail' },
    { icon: '/images/icons/power-bi_logo_transparent.webp', label: 'Power BI',              href: '/power-bi' },
    { icon: '/images/icons/android-os.webp',                label: 'Android Dev',           href: '/services/apps-development' },
    { icon: '/images/icons/code.webp',                      label: 'Custom Dev',            href: '/services/custom-development-integration' },
    { icon: '/images/icons/add-on-services.webp',           label: 'Add-on Services',       href: '/services/ams' },
  ];

  trackByLabel = (_: number, t: { label: string }) => t.label;
}