import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ServiceItem {
  icon: string;
  image: string;
  title: string;
  desc: string;
  href: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-build-amazing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './build-amazing.component.html',
  styles: [`
    /* ── Copilot palette ───────────────────────────────────────────── */
    :host {
      --cp-blue: #3D77BE;
      --cp-violet: #8B5CF6;
      --cp-pink: #F472B6;
      --cp-orange: #FB923C;
      display: block;
    }

    /* ── Divider pill ──────────────────────────────────────────────── */
    .cp-pill {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 26px;
      white-space: nowrap;
      background: #fff;
      border-radius: 9999px;
      border: 1.5px solid transparent;
      background:
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(90deg, var(--cp-blue), var(--cp-violet), var(--cp-pink), var(--cp-orange)) border-box;
      box-shadow: 0 6px 28px rgba(139, 92, 246, 0.16);
    }
    .cp-sparkle { animation: cp-twinkle 3.2s ease-in-out infinite; }

    .cp-dot {
      width: 8px; height: 8px; border-radius: 9999px;
      background: linear-gradient(135deg, var(--cp-blue), var(--cp-violet), var(--cp-pink));
      animation: cp-pulse 2.4s ease-in-out infinite;
    }

    /* ── Animated gradient heading ─────────────────────────────────── */
    .cp-gradient-text {
      background: linear-gradient(100deg, #7FB2FF, #B79CFF 35%, #F9A8D4 65%, #FDBA74 90%, #7FB2FF);
      background-size: 220% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: cp-slide 9s linear infinite;
    }


    /* ── Section background: midnight base + layered colour glows ──── */
    .cp-section {
      background:
        radial-gradient(1100px 560px at 88% -8%,  rgba(61,119,190,.30),  transparent 62%),
        radial-gradient(900px 520px  at 4%  22%,  rgba(139,92,246,.20),  transparent 62%),
        radial-gradient(800px 500px  at 62% 108%, rgba(244,114,182,.14), transparent 62%),
        linear-gradient(180deg, #060A18 0%, #0A1230 55%, #070C1F 100%);
    }
    .cp-aurora   { mix-blend-mode: screen; animation: cp-drift 20s ease-in-out infinite; }
    .cp-aurora-b { animation-duration: 28s; animation-direction: reverse; }

    /* fine dot grid, fading toward the edges */
    .cp-grid {
      background-image: radial-gradient(rgba(255,255,255,.09) 1px, transparent 1px);
      background-size: 28px 28px;
      -webkit-mask-image: radial-gradient(ellipse 75% 65% at 50% 45%, #000 25%, transparent 78%);
              mask-image: radial-gradient(ellipse 75% 65% at 50% 45%, #000 25%, transparent 78%);
    }
    /* subtle film grain keeps the dark gradient from banding */
    .cp-grain {
      opacity: .06;
      mix-blend-mode: overlay;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }
    /* thin gradient edge where the section meets the hero */
    .cp-hairline {
      background: linear-gradient(90deg, transparent, rgba(139,92,246,.7), rgba(244,114,182,.7), rgba(251,146,60,.5), transparent);
    }

    /* ── Card shell: 2px frame that becomes a rotating Copilot ring ── */
    .cp-card {
      position: relative;
      display: block;
      padding: 2px;
      border-radius: 1.5rem;
      overflow: hidden;
      cursor: pointer;
      background: rgba(255,255,255,.14);
      box-shadow: 0 18px 44px rgba(0, 0, 0, .40);
      transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease;
      animation: cp-rise .7s cubic-bezier(.2,.8,.2,1) both;
      animation-delay: calc(var(--i, 0) * 70ms);
      --mx: 50%; --my: 50%;
    }
    .cp-card::before {
      content: '';
      position: absolute;
      inset: -60%;
      background: conic-gradient(from 0deg,
        var(--cp-blue), var(--cp-violet), var(--cp-pink), var(--cp-orange), var(--cp-blue));
      opacity: 0;
      transition: opacity .35s ease;
      animation: cp-spin 5s linear infinite;
    }
    .cp-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 28px 64px rgba(0, 0, 0, .55), 0 0 44px rgba(139, 92, 246, .35), 0 0 22px rgba(61, 119, 190, .30);
    }
    .cp-card:hover::before,
    .cp-card:focus-visible::before { opacity: 1; }
    .cp-card:focus-visible { outline: 3px solid rgba(139, 92, 246, .5); outline-offset: 3px; }

    /* Featured cards carry a faint ring at rest */
    .cp-card-featured { background: linear-gradient(135deg, rgba(127,178,255,.45), rgba(183,156,255,.35)); }
    .cp-card-featured::before { opacity: .75; }
    .cp-card-featured:hover::before { opacity: 1; }

    /* ── Card inner surface + mouse-follow spotlight ───────────────── */
    .cp-card-inner {
      position: relative;
      z-index: 1;
      height: 100%;
      overflow: hidden;
      background: #fff;
      border-radius: calc(1.5rem - 2px);
    }
    .cp-card-inner::after {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: 0;
      transition: opacity .3s ease;
      background: radial-gradient(260px circle at var(--mx) var(--my),
        rgba(139, 92, 246, 0.10), rgba(61, 119, 190, 0.06) 45%, transparent 70%);
    }
    .cp-card:hover .cp-card-inner::after { opacity: 1; }

    /* ── Featured chip ─────────────────────────────────────────────── */
    .cp-featured-chip {
      padding: 4px 10px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .04em;
      color: #fff;
      border-radius: 9999px;
      background: linear-gradient(110deg, var(--cp-blue), var(--cp-violet), var(--cp-pink), var(--cp-blue));
      background-size: 220% 100%;
      box-shadow: 0 4px 14px rgba(139, 92, 246, .4);
      animation: cp-slide 6s linear infinite;
    }

    /* ── CTA ───────────────────────────────────────────────────────── */
    .cp-cta {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: 700;
      color: var(--cp-blue);
      transition: gap .25s ease, color .25s ease;
    }
    .cp-cta-arrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px; height: 24px;
      border-radius: 9999px;
      color: var(--cp-blue);
      background: #eef3fb;
      transition: background .3s ease, color .3s ease, transform .3s ease;
    }
    .cp-card:hover .cp-cta { gap: 12px; }
    .cp-card:hover .cp-cta-arrow {
      color: #fff;
      transform: translateX(2px);
      background: linear-gradient(135deg, var(--cp-blue), var(--cp-violet), var(--cp-pink));
    }

    /* ── Keyframes ─────────────────────────────────────────────────── */
    @keyframes cp-spin   { to { transform: rotate(360deg); } }
    @keyframes cp-slide  { to { background-position: -220% 0; } }
    @keyframes cp-pulse  { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: .6; } }
    @keyframes cp-twinkle{ 0%,100% { transform: scale(1) rotate(0); } 50% { transform: scale(1.2) rotate(18deg); } }
    @keyframes cp-drift  { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-24px); } }
    @keyframes cp-rise   { from { opacity: 0; transform: translateY(24px) scale(.98); } to { opacity: 1; transform: none; } }

    /* ── Respect reduced motion ────────────────────────────────────── */
    @media (prefers-reduced-motion: reduce) {
      .cp-card, .cp-card::before, .cp-aurora, .cp-sparkle, .cp-dot,
      .cp-gradient-text, .cp-featured-chip { animation: none !important; }
      .cp-card, .cp-card:hover { transition: box-shadow .2s ease; transform: none; }
    }
  `],
})
export class BuildAmazingComponent {
  services: ServiceItem[] = [
    // ── ERP Product Spotlight (top 4) ─────────────────────────────────────
    { icon: '/images/icons/Business_Central.png',               image: '/images/microsoft/D365-BUSINESS-CENTRAL.webp',     title: 'Business Central',      desc: 'All-in-one cloud ERP — finance, sales, purchasing & operations unified for growing businesses.',        href: '/microsoft-dynamic-365-business-central', highlight: true },
    { icon: '/images/icons/dynamics-365.jpg',                   image: '/images/microsoft/crm.webp',                       title: 'Dynamics 365 CRM',      desc: 'Supercharge sales and customer engagement with Microsoft Dynamics 365 CRM & Sales modules.',           href: '/erp-crm-implementations',                highlight: true },
    { icon: '/images/icons/fno-logo.svg',                       image: '/images/f&o/sales.webp',                           title: 'Finance & Operations',  desc: 'Enterprise-grade financial management, supply chain & manufacturing on Dynamics 365 F&O.',             href: '/msd-365-finance-and-operations',          highlight: true },
    { icon: '/images/icons/LS-CEntral-Logo.jpg',                image: '/images/lscentral/lscentral.webp',                 title: 'LS Central',            desc: 'The only all-in-one POS + ERP retail solution built natively on Business Central.',                   href: '/ls-retail',                              highlight: true },
    // ── Industry Solutions ────────────────────────────────────────────────
    { icon: '/images/icons/icons8-food.webp',                   image: '/images/food/mocktails.webp',                      title: 'ERP for F&B',           desc: 'Real-time inventory and forecasting to ensure adequate supply.',                                        href: '/food-and-beverages' },
    { icon: '/images/icons/icons8-microsoft.webp',              image: '/images/manufacturing/hybrid-manufacturing.webp',  title: 'MS D365 Manufacturing', desc: 'A centralized method of managing every aspect of operations from production to payroll.',              href: '/manufacturing/hybrid' },
    { icon: '/images/icons/icons8-retail-50.webp',              image: '/images/retail/hero-commerce.webp',                title: 'ERP for Retail',        desc: 'Unified commerce software that handles everything you need in one place.',                           href: '/ls-retail' },
    { icon: '/images/icons/icons8-pharmacy.webp',               image: '/images/pharmacy/hero-pharma.webp',                title: 'ERP for Pharmacy',      desc: 'Optimally handle prescriptions and drugs with one unified solution.',                               href: '/erp-software-for-pharmacy-industry' },
    { icon: '/images/icons/android-os.webp',                    image: '/images/service/appdevelopment.webp',              title: 'Android Development',   desc: 'Custom mobile solutions built with the latest Android frameworks.',                                 href: '/services/apps-development' },
    { icon: '/images/icons/code.webp',                          image: '/images/service/fullstack.webp',                   title: 'Software Development',  desc: 'Scalable enterprise applications tailored to solve business challenges.',                           href: '/services/custom-development-integration' },
    { icon: '/images/icons/power-bi_logo_transparent.webp',     image: '/images/power-bi/dashboard.webp',                  title: 'Power BI Retail',       desc: 'Transform retail data into actionable insights with visual dashboards.',                            href: '/power-bi' },
    { icon: '/images/icons/add-on-services.webp',               image: '/images/customer-service.webp',                   title: 'Add-on Services',       desc: 'Includes HR & Payroll, Plant Maintenance, and Quality Control.',                                    href: '/services/ams' },
  ];

  get featured(): ServiceItem[] {
    return this.services.filter(s => s.highlight);
  }

  get industry(): ServiceItem[] {
    return this.services.filter(s => !s.highlight);
  }

  trackByTitle = (_: number, item: ServiceItem) => item.title;

  /** Feeds the mouse-follow spotlight on each card. */
  onMove(event: MouseEvent): void {
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    el.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }
}