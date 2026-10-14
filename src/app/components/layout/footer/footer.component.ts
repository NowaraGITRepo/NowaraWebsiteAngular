import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './footer.component.html',
  styles: [`
    :host {
      --blue: #3D77BE; --violet: #8B5CF6; --pink: #F472B6; --orange: #FB923C;
      --ring: linear-gradient(115deg, #3D77BE, #8B5CF6 38%, #F472B6 70%, #FB923C 100%);
      font-family: 'Segoe UI Variable Display', 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
      display: block;
    }

    /* ══════════ LIGHT COPILOT BODY BACKGROUND ══════════ */
    .ft { background: linear-gradient(180deg, #f1f3fc 0%, #f7f5fd 50%, #fdf7f6 100%); color: #0f172a; }

    .ft-blob { position: absolute; border-radius: 9999px; filter: blur(100px); }
    .ft-blob-blue   { width: 520px; height: 520px; top: 38%;  left: -160px;  background: #8db9f0; opacity: .60; }
    .ft-blob-violet { width: 520px; height: 520px; top: 34%;  right: -120px; background: #bda9f8; opacity: .55; }
    .ft-blob-pink   { width: 460px; height: 460px; bottom: -190px; right: 24%; background: #f6b4d5; opacity: .50; }
    .ft-blob-orange { width: 420px; height: 420px; bottom: -180px; left: 14%; background: #fdd2ab; opacity: .55; }

    .ft-dots {
      background-image: radial-gradient(rgba(61,80,190,.15) 1px, transparent 1px);
      background-size: 26px 26px;
      -webkit-mask-image: radial-gradient(ellipse 90% 60% at 50% 70%, #000 10%, transparent 80%);
              mask-image: radial-gradient(ellipse 90% 60% at 50% 70%, #000 10%, transparent 80%);
    }

    /* ══════════ DARK BLUE CTA SECTION ══════════ */
    .ft-top-sec {
      border-radius: 0 0 40px 40px;
      background:
        radial-gradient(1000px 520px at 85% -10%, rgba(61,119,190,.22), transparent 62%),
        radial-gradient(800px 480px at 0% 40%,   rgba(139,92,246,.16), transparent 62%),
        linear-gradient(180deg, #0a1230 0%, #060a1c 100%);
      box-shadow: 0 30px 60px -30px rgba(40,50,140,.55);
    }
    .ft-edge { position: absolute; left: 40px; right: 40px; bottom: 0; height: 2px; background: var(--ring); opacity: .9; border-radius: 2px; }
    .ft-aurora   { mix-blend-mode: screen; animation: ft-drift 22s ease-in-out infinite; }
    .ft-aurora-b { animation-duration: 30s; animation-direction: reverse; }
    .ft-grid {
      background-image: radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px);
      background-size: 28px 28px;
      -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000 20%, transparent 78%);
              mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000 20%, transparent 78%);
    }
    .ft-hairline { background: linear-gradient(90deg, transparent, rgba(139,92,246,.75), rgba(244,114,182,.75), rgba(251,146,60,.55), transparent); }

    /* CTA band with rotating Copilot ring */
    .ft-band { position: relative; padding: 1.5px; border-radius: 26px; overflow: hidden; background: rgba(255,255,255,.10); }
    .ft-band::before {
      content: ''; position: absolute; inset: -80%; opacity: .85;
      background: conic-gradient(from 0deg, #3D77BE, #8B5CF6, #F472B6, #FB923C, #3D77BE);
      animation: ft-spin 10s linear infinite;
    }
    .ft-band-in {
      position: relative; padding: 30px 40px; border-radius: 24.5px;
      background:
        radial-gradient(520px 260px at 92% 0%,   rgba(139,92,246,.30), transparent 70%),
        radial-gradient(480px 260px at 0% 100%,  rgba(61,119,190,.32), transparent 70%),
        #0b1231;
    }
    @media (max-width: 640px) { .ft-band-in { padding: 26px 22px; } .ft-top-sec { border-radius: 0 0 28px 28px; } .ft-edge { left: 28px; right: 28px; } }
    .ft-band-title { margin: 0; font-size: clamp(1.6rem, 2.8vw, 2.2rem); font-weight: 800; line-height: 1.12; letter-spacing: -.03em; color: #fff; }

    .ft-cta {
      display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 9999px; white-space: nowrap;
      font-size: 14.5px; font-weight: 600; color: #fff; cursor: pointer;
      background: linear-gradient(110deg, #3D77BE, #8B5CF6 55%, #E0489B); background-size: 200% 100%;
      box-shadow: 0 10px 26px rgba(139,92,246,.40);
      transition: background-position .5s ease, transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s ease;
    }
    .ft-cta:hover { background-position: 100% 0; transform: translateY(-2px); box-shadow: 0 16px 34px rgba(139,92,246,.5); }
    .ft-cta svg { transition: transform .4s ease; }
    .ft-cta:hover svg { transform: rotate(20deg) scale(1.2); }
    .ft-ghost {
      padding: 11px 22px; border-radius: 9999px; font-size: 14px; font-weight: 600; color: #dbe5fb;
      border: 1px solid rgba(255,255,255,.22); background: rgba(255,255,255,.05);
      transition: background .25s ease, border-color .25s ease, color .25s ease;
    }
    .ft-ghost:hover { color: #fff; background: rgba(255,255,255,.12); border-color: rgba(167,139,250,.7); }

    /* ══════════ BODY CONTENT (dark text on light) ══════════ */
    .ft-logo { display: block; height: 72px; width: auto; }

    .ft-h { margin: 0 0 14px; }
    .ft-h span {
      position: relative; display: inline-block; padding-bottom: 8px;
      font-size: 15px; font-weight: 700; letter-spacing: -.005em; color: #0f172a;
    }
    .ft-h span::after {
      content: ''; position: absolute; left: 0; bottom: 0; width: 28px; height: 2px; border-radius: 2px;
      background: var(--ring); transition: width .5s cubic-bezier(.2,.8,.2,1);
    }
    .ft-h:hover span::after { width: 100%; }

    .ft-row {
      display: flex; align-items: center; gap: 12px; color: #475569; text-decoration: none;
      transition: transform .3s cubic-bezier(.2,.8,.2,1), color .25s ease;
    }
    li.ft-row { align-items: flex-start; }
    a.ft-row:hover { transform: translateX(4px); color: #0f172a; }
    .ft-ico {
      display: flex; width: 32px; height: 32px; flex-shrink: 0; align-items: center; justify-content: center;
      border-radius: 10px; color: #3D77BE; background: rgba(255,255,255,.92); border: 1px solid rgba(15,23,42,.08);
      box-shadow: 0 6px 14px -8px rgba(61,80,190,.35);
      transition: background .3s ease, color .3s ease, border-color .3s ease, box-shadow .3s ease, transform .3s ease;
    }
    .ft-row:hover .ft-ico {
      color: #fff; border-color: transparent; transform: scale(1.06);
      background: linear-gradient(135deg, var(--blue), var(--violet) 60%, var(--pink));
      box-shadow: 0 8px 20px rgba(139,92,246,.40);
    }
    .ft-label { font-size: 13.5px; font-weight: 500; line-height: 1.35; color: #334155; transition: color .25s ease; }
    a.ft-row:hover .ft-label { color: #0f172a; }
    .ft-muted { font-size: 11.5px; font-weight: 600; color: #64748b; }

    .ft-office { margin: 0 0 10px; font-size: 13.5px; font-weight: 700; color: #0f172a; }
    .ft-addr   { margin: 0; font-size: 13px; line-height: 1.5; color: #475569; }
    .ft-city   { display: block; font-size: 13px; font-weight: 600; color: #0f172a; }

    .ft-soc {
      display: flex; width: 38px; height: 38px; align-items: center; justify-content: center; border-radius: 9999px;
      color: #334155; background: rgba(255,255,255,.92); border: 1px solid rgba(15,23,42,.08);
      box-shadow: 0 6px 14px -8px rgba(61,80,190,.3);
      transition: transform .3s cubic-bezier(.2,.8,.2,1), background .3s ease, box-shadow .3s ease, border-color .3s ease, color .3s ease;
    }
    .ft-soc:hover { transform: translateY(-4px) scale(1.08); color: #fff; border-color: transparent; box-shadow: 0 12px 26px -8px rgba(61,80,190,.45); }
    .ft-soc-fb:hover { background: #1877F2; }
    .ft-soc-ig:hover { background: linear-gradient(45deg, #f58529, #dd2a7b 55%, #8134af); }
    .ft-soc-tw:hover { background: #0ea5e9; }
    .ft-soc-in:hover { background: #0a66c2; }

    .ft-chip {
      display: inline-flex; align-items: center; gap: 8px; padding: 8px 13px; border-radius: 9999px;
      font-size: 12.5px; font-weight: 600; line-height: 1.2; color: #334155; text-decoration: none;
      background: rgba(255,255,255,.85); border: 1px solid rgba(100,116,139,.2);
      transition: transform .3s cubic-bezier(.2,.8,.2,1), background .3s ease, border-color .3s ease, color .3s ease, box-shadow .3s ease;
    }
    a.ft-chip { cursor: pointer; }
    a.ft-chip:hover { transform: translateY(-3px); color: #4338ca; background: #fff; border-color: rgba(123,108,240,.5); box-shadow: 0 10px 20px -12px rgba(97,90,220,.55); }
    .ft-chip-dot { width: 7px; height: 7px; flex-shrink: 0; border-radius: 9999px; background: linear-gradient(135deg, var(--blue), var(--violet), var(--pink)); }

    .ft-bottom { border-top: 1px solid rgba(100,116,139,.25); }
    .ft-link { color: #475569; transition: color .25s ease; }
    .ft-link:hover { color: #4338ca; }

    a:focus-visible, button:focus-visible { outline: 3px solid rgba(139,92,246,.6); outline-offset: 3px; border-radius: 12px; }

    /* Short laptop screens: tighten so everything fits */
    @media (min-width: 1024px) and (max-height: 820px) {
      .ft-band-in { padding: 22px 36px; }
      .ft-logo { height: 58px; }
    }

    @keyframes ft-spin  { to { transform: rotate(360deg); } }
    @keyframes ft-drift { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-24px); } }

    @media (prefers-reduced-motion: reduce) {
      .ft-aurora, .ft-band::before { animation: none; }
      .ft-row, .ft-ico, .ft-soc, .ft-chip, .ft-cta, .ft-cta svg { transition: none; }
    }
  `],
})
export class FooterComponent {
  private platformId = inject(PLATFORM_ID);

  year = new Date().getFullYear();

  phones = [
    { label: 'India', number: '+91 9311205831' },
    { label: 'UAE', number: '+971 585041986' },
  ];

  indiaOffices = [
    { city: 'Noida', addr: 'Anthurium Tower A-212, Sector 73, Noida 201301' },
    { city: 'Mumbai', addr: '901, Real Tech Park, Sector 30A, Vashi, Navi Mumbai 400709' },
    { city: 'Bhagalpur', addr: 'Ganga Vihar Colony, Bhagalpur, Bihar - 813210' },
  ];

  services = [
    { label: 'ERP Implementation & Consulting', href: '/services/erp-crm-support', icon: 'solar:settings-minimalistic-bold' },
    { label: 'Custom Development & Integration', href: '/services/custom-development-integration', icon: 'solar:code-2-bold' },
    { label: 'Upgrade & Migration', href: '/services/upgrade-and-migration', icon: 'solar:refresh-square-bold' },
    { label: 'Application Support (AMS)', href: '/services/ams', icon: 'solar:shield-check-bold' },
    { label: 'Resource Augmentation', href: '/services/resource-augmentation', icon: 'solar:users-group-rounded-bold' },
    { label: 'Web & Mobile App Development', href: '/services/apps-development', icon: 'solar:smartphone-2-bold' },
  ];

  // Chips link to existing routes where one exists; "AI & Robotic Process Automation" has no page yet.
  technologies: { label: string; href?: string }[] = [
    { label: 'Dynamics 365 / Business Central', href: '/microsoft-dynamic-365-business-central' },
    { label: 'Microsoft Azure & Cloud',         href: '/microsoft-azure-cloud-services-provider' },
    { label: 'Power BI & Data Analytics',       href: '/power-bi' },
    { label: 'Full Stack Development',          href: '/services/custom-development-integration' },
    { label: 'AI & Robotic Process Automation' },
  ];

  crawlerLinks = [
    { href: '/manufacturing/discrete', label: 'Discrete Manufacturing' },
    { href: '/manufacturing/process', label: 'Process Manufacturing' },
    { href: '/manufacturing/hybrid', label: 'Hybrid Manufacturing' },
    { href: '/food-and-beverages', label: 'Food and Beverages ERP' },
    { href: '/automotive-equipment', label: 'Automotive ERP' },
    { href: '/erp-software-for-pharmacy-industry', label: 'Pharmacy ERP' },
    { href: '/chemical-industry', label: 'Chemical Industry ERP' },
    { href: '/steel-and-metal', label: 'Steel and Metal ERP' },
    { href: '/corrugated-erp', label: 'Corrugation ERP' },
    { href: '/fashion-erp', label: 'Fashion ERP' },
    { href: '/microsoft-dynamics-365-for-e-commerce', label: 'E-commerce ERP' },
    { href: '/supermarket-erp', label: 'Supermarket ERP' },
    { href: '/msd-365-finance-and-operations', label: 'Finance and Operations' },
    { href: '/microsoft-dynamic-365-business-central', label: 'Business Central' },
    { href: '/erp-crm-implementations', label: 'CRM Implementation' },
    { href: '/microsoft-azure-cloud-services-provider', label: 'Microsoft Azure' },
    { href: '/aws-cloud-services-provider', label: 'AWS Cloud Services' },
    { href: '/ls-retail', label: 'LS Central' },
    { href: '/power-bi', label: 'Power BI' },
    { href: '/google-looker', label: 'Google Looker' },
    { href: '/tableau', label: 'Tableau' },
    { href: '/about-nowara-infotech', label: 'About Nowara Infotech' },
    { href: '/career', label: 'Career' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  /** Strips every space so the number is a valid tel: link. */
  telNumber(n: string): string {
    return n.replace(/\s+/g, '');
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}