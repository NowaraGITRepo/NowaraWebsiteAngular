import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { NgFor, isPlatformBrowser } from '@angular/common';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({
  selector: 'app-ams',
  standalone: true,
  imports: [ContactFormComponent, NgFor],
  template: `
<div class="min-h-screen bg-white">
  <!-- HERO -->
  <section class="relative pt-24 lg:pt-32 px-6 lg:px-20 max-w-7xl mx-auto overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-8">
        <div class="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black tracking-widest uppercase">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          24/7 Managed Services
        </div>
        <h1 class="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05]">
          Beyond Go-Live: <br/>
          <span class="text-5xl lg:text-7xl text-emerald-600">AMS Excellence.</span>
        </h1>
        <p class="text-xl text-slate-500 leading-relaxed max-w-lg">
          Software is only as good as the support behind it. Our Application Management Services (AMS) ensure your Dynamics 365 environment stays optimized, secure, and ahead of the curve.
        </p>
        <div class="flex flex-wrap gap-4">
          <button (click)="scrollTo('contact-section')" class="bg-slate-900 text-white mt-5 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all flex items-center gap-2">
            View SLA Packages
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </button>
        </div>
      </div>
      <!-- RIGHT SUPPORT VISUAL -->
      <div class="relative">
        <div class="absolute inset-0 bg-emerald-100 rounded-full blur-[100px] opacity-30"></div>
        <div class="grid grid-cols-2 gap-4 relative z-10">
          <div class="space-y-4 translate-y-8">
            <div class="bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-50 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#10b981" stroke-width="2" class="mx-auto mb-3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <p class="font-black text-slate-900 text-2xl tracking-tighter">99.9%</p>
              <p class="text-[10px] text-slate-400 font-bold uppercase">Uptime</p>
            </div>
            <div class="bg-emerald-400 p-8 rounded-[2.5rem] shadow-xl mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2" class="mb-4 opacity-80"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              <h4 class="font-bold text-white text-lg leading-tight">Proactive Monitoring</h4>
            </div>
          </div>
          <div class="space-y-4">
            <div class="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#34d399" stroke-width="2" class="mb-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              <p class="font-black text-2xl tracking-tighter">50+</p>
              <p class="text-[10px] text-emerald-400 font-bold uppercase">Expert Consultants</p>
            </div>
            <div class="bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-50 text-center">
              <p class="font-black text-slate-900 text-3xl tracking-tighter">4hr</p>
              <p class="text-[10px] text-slate-400 font-bold uppercase">Response SLA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICE TIERS -->
  <section class="py-24 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-emerald-600 font-bold tracking-[0.2em] text-xs uppercase block mb-4">Service Tiers</span>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900">AMS <span class="text-emerald-600">Packages</span></h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div *ngFor="let tier of tiers" [class]="'rounded-[2.5rem] p-8 border ' + tier.style">
          <div class="mb-6" [innerHTML]="tier.icon"></div>
          <h3 class="text-2xl font-black mb-2" [class]="tier.titleColor">{{tier.name}}</h3>
          <p class="text-sm mb-6" [class]="tier.descColor">{{tier.desc}}</p>
          <ul class="space-y-3">
            <li *ngFor="let feature of tier.features" class="flex items-center gap-3 text-sm" [class]="tier.featureColor">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" [attr.stroke]="tier.checkColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              {{feature}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact-section" class="py-16 px-6 lg:px-20 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span class="text-emerald-600 font-black tracking-widest text-xs uppercase bg-emerald-50 px-3 py-1 rounded-md">Get Support</span>
          <h2 class="text-4xl font-black text-slate-900 mt-6 mb-4">Never Face <span class="text-emerald-600">Downtime</span> Alone.</h2>
          <p class="text-lg text-slate-500 leading-relaxed">Get dedicated AMS coverage for your Dynamics 365 environment with guaranteed SLAs and proactive monitoring.</p>
        </div>
        <app-contact-form></app-contact-form>
      </div>
    </div>
  </section>
</div>
  `,
})
export class AmsComponent implements OnInit {
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  ngOnInit() { this.seo.setPage(SEO.ams.title, SEO.ams.description); }
  tiers = [
    {
      name: 'Essential', desc: 'Core support for stable environments.', style: 'bg-white border-slate-100 shadow-lg', titleColor: 'text-slate-900', descColor: 'text-slate-500', featureColor: 'text-slate-600', checkColor: '#10b981',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#10b981" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
      features: ['8x5 helpdesk support', 'Monthly health checks', 'Bug fixes & patches', 'User management']
    },
    {
      name: 'Professional', desc: 'For growing businesses with active usage.', style: 'bg-slate-900 border-slate-800 shadow-2xl', titleColor: 'text-white', descColor: 'text-slate-400', featureColor: 'text-slate-300', checkColor: '#34d399',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#34d399" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
      features: ['16x5 support + on-call', 'Weekly health reports', 'Performance tuning', 'AL customisations', 'Integration support']
    },
    {
      name: 'Enterprise', desc: 'Maximum coverage for mission-critical ops.', style: 'bg-emerald-50 border-emerald-100', titleColor: 'text-slate-900', descColor: 'text-slate-500', featureColor: 'text-slate-700', checkColor: '#059669',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#059669" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
      features: ['24x7 dedicated team', 'Real-time monitoring', 'SLA-guaranteed 4hr response', 'Quarterly business reviews', 'New feature rollouts']
    },
  ];
  scrollTo(id: string) {
    if (isPlatformBrowser(this.platformId)) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
  }
}
