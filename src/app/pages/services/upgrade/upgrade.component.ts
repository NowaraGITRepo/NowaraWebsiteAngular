import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({
  selector: 'app-upgrade',
  standalone: true,
  imports: [ContactFormComponent, NgFor],
  template: `
<div class="min-h-screen bg-white">
  <div class="pt-24 lg:pt-28">
    <!-- HERO -->
    <section class="relative px-6 lg:px-20 max-w-7xl mx-auto overflow-visible mb-12 lg:mb-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-160px)]">
        <div class="space-y-6">
          <span class="inline-block px-3 py-1 text-[10px] font-black tracking-widest text-orange-600 uppercase bg-orange-50 rounded-md">Legacy to Cloud</span>
          <h1 class="text-4xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Seamless <span class="text-orange-500">Upgrades</span> & Risk-Free Migration.
          </h1>
          <p class="text-lg text-slate-500 leading-relaxed max-w-md">
            Move from legacy systems like NAV or AX to Dynamics 365 Business Central with 100% data integrity and zero business downtime.
          </p>
          <div class="flex items-center gap-4 mt-5">
            <button (click)="scrollTo('contact-section')" class="bg-orange-500 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all flex items-center gap-2 text-sm">
              Plan Your Migration
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </button>
          </div>
        </div>
        <div class="relative h-[400px] flex items-center justify-center">
          <div class="absolute w-full h-full bg-orange-50 rounded-full blur-3xl opacity-40 -z-10"></div>
          <div class="relative w-full h-[280px] lg:h-[320px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl z-10 -rotate-1">
            <img src="/images/service/upgrade.webp" alt="System Upgrade and Migration" class="w-full h-full object-cover"/>
          </div>
          <div class="absolute top-10 -left-4 lg:-left-10 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-50 flex items-center gap-3">
            <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </div>
            <div>
              <p class="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Process</p>
              <p class="text-sm font-bold text-slate-900 whitespace-nowrap">Data Syncing...</p>
            </div>
          </div>
          <div class="absolute -bottom-0 -right-2 bg-slate-900 px-5 py-4 rounded-2xl shadow-xl z-20 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#34d399" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            <p class="text-xs font-bold text-white">Zero Data Loss Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- MIGRATION STEPS -->
  <section class="py-15 bg-slate-50 px-6 lg:px-20">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div *ngFor="let step of steps; let i = index" class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center space-y-3">
          <div [class]="step.color + ' mb-2'" [innerHTML]="step.icon"></div>
          <h3 class="font-bold text-slate-900 text-sm italic">Step 0{{i+1}}</h3>
          <p class="font-bold text-slate-700">{{step.title}}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY UPGRADE -->
  <section class="py-5 px-6 lg:px-20 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        <div class="relative flex items-center justify-center min-h-[450px]">
          <div class="absolute inset-0 bg-orange-50/50 rounded-[4rem] -rotate-2"></div>
          <div class="relative w-full bg-slate-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl shadow-orange-900/20 z-10 border border-slate-800">
            <div class="flex justify-between items-start mb-12">
              <div>
                <h3 class="text-white text-2xl font-bold italic tracking-tight">System Upgrade</h3>
                <p class="text-slate-500 text-xs font-mono mt-1 uppercase">Cloud Migration v4.2</p>
              </div>
              <div class="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#f97316" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
            </div>
            <div class="space-y-10">
              <div *ngFor="let bar of bars; let i = index" class="group">
                <div class="flex justify-between text-sm mb-3">
                  <span class="text-slate-300 font-bold tracking-wide">{{bar.label}}</span>
                  <span class="text-white font-mono">{{bar.val}}</span>
                </div>
                <div class="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-[2px]">
                  <div [class]="'h-full rounded-full bg-gradient-to-r ' + bar.color" style="width: 100%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-8 flex flex-col justify-center">
          <h2 class="text-3xl md:text-5xl font-black text-slate-900">Why Upgrade <span class="text-orange-500">Now?</span></h2>
          <p class="text-lg text-slate-600 leading-relaxed">Legacy NAV and AX systems are becoming unsupported. Every month you delay, your operational risk increases. Our structured migration framework eliminates the fear of data loss and business disruption.</p>
          <div *ngFor="let point of points" class="flex gap-4 items-start">
            <div class="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
            <div>
              <h4 class="font-bold text-slate-900">{{point.title}}</h4>
              <p class="text-sm text-slate-500">{{point.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact-section" class="py-16 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 class="text-4xl font-black text-slate-900 mb-4">Start Your <span class="text-orange-500">Migration</span> Today</h2>
          <p class="text-lg text-slate-500 leading-relaxed">Talk to our migration specialists about your current system and let us design your risk-free upgrade path.</p>
        </div>
        <app-contact-form></app-contact-form>
      </div>
    </div>
  </section>
</div>
  `,
})
export class UpgradeComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.upgrade.title, SEO.upgrade.description); }
  steps = [
    { title: 'Assessment', color: 'text-blue-500', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
    { title: 'Data Mapping', color: 'text-purple-500', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 1.105 2.239 2 5 2s5-.895 5-2V7m-10 0c0-1.105 2.239-2 5-2s5 .895 5 2"/></svg>' },
    { title: 'Validation', color: 'text-emerald-500', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
    { title: 'Go-Live', color: 'text-orange-500', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
  ];
  bars = [
    { label: 'Database Integrity', val: '100%', color: 'from-orange-500 to-amber-400' },
    { label: 'Code Refactoring', val: '100%', color: 'from-blue-500 to-indigo-400' },
    { label: 'User Acceptance', val: '100%', color: 'from-emerald-500 to-teal-400' },
  ];
  points = [
    { title: 'End of Support Risk', desc: 'Older Dynamics versions lose Microsoft support, leaving you exposed to security vulnerabilities.' },
    { title: 'Performance Gains', desc: 'Modern Business Central cloud delivers up to 5x faster processing for financial operations.' },
    { title: 'Continuous Updates', desc: 'Cloud-based BC receives automatic feature updates — no more expensive upgrade projects.' },
  ];
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
