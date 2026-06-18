import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { NgFor, isPlatformBrowser } from '@angular/common';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({
  selector: 'app-custom-dev',
  standalone: true,
  imports: [ContactFormComponent, NgFor, SafeHtmlPipe],
  template: `
<div class="min-h-screen bg-white">
  <div class="pt-24 lg:pt-28">
    <!-- HERO -->
    <section class="relative px-6 lg:px-20 max-w-7xl mx-auto overflow-visible mb-12 lg:mb-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-160px)]">
        <div class="space-y-6">
          <span class="inline-block px-3 py-1 text-[10px] font-black tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-md">Tailored Solutions</span>
          <h1 class="text-4xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Bespoke <span class="text-indigo-600">Development</span> & Fluid Integration.
          </h1>
          <p class="text-lg text-slate-500 leading-relaxed max-w-md">
            We build custom modules and high-performance integrations that make your entire tech stack talk to each other.
          </p>
          <button (click)="scrollTo('contact-form-section')" class="bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center gap-2 text-sm">
            Start Building
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </button>
        </div>
        <div class="relative h-[400px] flex items-center justify-center">
          <div class="absolute w-full h-full bg-indigo-50 rounded-full blur-3xl opacity-40 -z-10"></div>
          <div class="relative w-full h-[280px] lg:h-[320px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl z-10 rotate-1">
            <img src="/images/service/custom-dev.webp" alt="Custom Software Development" class="w-full h-full object-cover"/>
          </div>
          <div class="absolute bottom-4 -left-4 lg:-left-8 bg-white p-4 rounded-2xl shadow-xl z-20 border flex items-center gap-3">
            <div class="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>
            </div>
            <div>
              <p class="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Status</p>
              <p class="text-sm font-bold text-slate-900 leading-tight whitespace-nowrap">Integration Active</p>
            </div>
          </div>
          <div class="absolute top-4 -right-2 bg-slate-900 px-4 py-3 rounded-2xl shadow-xl z-20 flex items-center gap-3">
            <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
            </div>
            <p class="text-xs font-bold text-white whitespace-nowrap">Bespoke Scalability</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- EXPERTISE -->
  <section class="py-16 bg-slate-50 px-6 lg:px-20">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-slate-900">Our Integration <span class="text-indigo-600">Expertise</span></h2>
        <div class="h-1 w-16 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div *ngFor="let feature of features" class="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all">
          <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 text-indigo-600" [innerHTML]="feature.icon | safeHtml"></div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">{{feature.title}}</h3>
          <p class="text-sm text-slate-500 leading-relaxed font-medium">{{feature.desc}}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- STRATEGIC APPROACH -->
  <section class="py-5 bg-white mb-10 px-6 lg:px-20 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Accelerating Growth Through <br/><span class="text-indigo-600">Unified Architecture</span>
          </h2>
          <div class="h-1.5 w-20 bg-indigo-600 rounded-full"></div>
          <div class="space-y-4">
            <p class="text-lg text-slate-600 leading-relaxed font-medium">In today's digital landscape, isolated systems are the biggest barrier to scalability. Our custom development team focuses on creating a "single source of truth" by bridging the gap between your core ERP and specialized third-party applications.</p>
            <p class="text-base text-slate-500 leading-relaxed">Whether it's automating manual data entry between your CRM and Finance modules or building a custom client portal from scratch, we ensure every line of code is optimized for performance, security, and future business agility.</p>
          </div>
          <div class="grid grid-cols-2 gap-6 pt-4">
            <div class="border-l-4 border-indigo-600 pl-4">
              <h4 class="font-bold text-slate-900 text-xl">99.9%</h4>
              <p class="text-sm text-slate-500 font-medium uppercase tracking-wider">Uptime Reliability</p>
            </div>
            <div class="border-l-4 border-emerald-500 pl-4">
              <h4 class="font-bold text-slate-900 text-xl">API-First</h4>
              <p class="text-sm text-slate-500 font-medium uppercase tracking-wider">Design Philosophy</p>
            </div>
          </div>
        </div>
        <div class="relative rounded-[3rem] bg-slate-900 p-8 lg:p-12 shadow-2xl">
          <div class="space-y-4">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-rose-500"></div>
              <div class="w-3 h-3 rounded-full bg-amber-500"></div>
              <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div class="font-mono text-sm text-indigo-300/80 space-y-2">
              <p>&#123;</p>
              <p class="pl-4">"integration": "seamless",</p>
              <p class="pl-4">"scalability": "infinite",</p>
              <p class="pl-4">"security": "enterprise-grade",</p>
              <p class="pl-4 text-emerald-400">"status": "ready_to_deploy"</p>
              <p>&#125;</p>
            </div>
          </div>
          <div class="mt-8 pt-8 border-t border-slate-800 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span class="text-white font-bold text-sm tracking-wide">Ready for Launch</span>
            </div>
            <div class="text-slate-500 text-xs font-mono">v4.0.2</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact-form-section" class="py-15 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div class="space-y-8 order-2 lg:order-1">
          <h2 class="text-4xl font-black text-slate-900">Ready to <span class="text-indigo-600">Connect</span> Your Systems?</h2>
          <p class="text-lg text-slate-500 leading-relaxed">Fill out the form to schedule a technical discovery call. Our engineers will review your current architecture and provide a roadmap for your custom integration.</p>
        </div>
        <div class="order-1 lg:order-2">
          <app-contact-form></app-contact-form>
        </div>
      </div>
    </div>
  </section>
</div>
  `,
})
export class CustomDevComponent implements OnInit {
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  ngOnInit() { this.seo.setPage(SEO.customDev.title, SEO.customDev.description); }
  features = [
    { title: 'API Development', desc: 'Creating robust RESTful and GraphQL APIs to connect your tools.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
    { title: 'Legacy Modernization', desc: 'Upgrading aging systems with modern microservices.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>' },
    { title: 'ERP Extensions', desc: 'Building custom AL extensions for Business Central.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 1.105 2.239 2 5 2s5-.895 5-2V7m-10 0c0-1.105 2.239-2 5-2s5 .895 5 2"/></svg>' },
  ];
  scrollTo(id: string) {
    if (isPlatformBrowser(this.platformId)) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
  }
}
