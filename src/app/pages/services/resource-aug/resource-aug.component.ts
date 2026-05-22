import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

@Component({
  selector: 'app-resource-aug',
  standalone: true,
  imports: [ContactFormComponent, NgFor],
  template: `
<div class="min-h-screen bg-white">
  <!-- HERO -->
  <section class="relative pt-20 lg:pt-32 px-6 lg:px-20 max-w-7xl mx-auto overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-8">
        <div class="inline-flex items-center gap-2 px-2 py-1 bg-violet-50 text-violet-700 rounded-full text-[10px] font-black tracking-widest uppercase">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
          Global Talent Pool
        </div>
        <h1 class="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05]">
          Scale Your Team <br/><span class="text-violet-600">On Demand.</span>
        </h1>
        <p class="text-xl text-slate-500 leading-relaxed max-w-lg">
          Bridge your skill gaps with top-tier Dynamics 365 developers, functional consultants, and project managers. Hire experts who integrate into your workflow in 48 hours.
        </p>
        <div class="flex flex-wrap gap-4">
          <button (click)="scrollTo('contact-form-section')" class="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-violet-600 transition-all flex items-center gap-2 shadow-xl shadow-slate-200">
            Browse Talent
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </button>
        </div>
      </div>
      <!-- TALENT VISUAL -->
      <div class="relative group">
        <div class="absolute inset-0 z-0 overflow-hidden rounded-[3rem]">
          <img src="/images/service/resource.webp" alt="Team Collaboration" class="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"/>
          <div class="absolute inset-0 bg-gradient-to-tr from-violet-100/40 via-transparent to-white/10"></div>
        </div>
        <div class="relative z-10 p-8 lg:p-12 min-h-[450px] flex items-center">
          <div class="relative w-full grid grid-cols-1 gap-6">
            <div class="bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-white/50 flex items-center gap-4 max-w-sm ml-auto">
              <div class="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600 font-bold">JD</div>
              <div>
                <h4 class="font-bold text-slate-900">Senior AL Developer</h4>
                <p class="text-xs text-slate-400 font-medium">8+ Years Exp • Business Central</p>
              </div>
              <div class="ml-auto bg-emerald-50 text-emerald-600 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
            </div>
            <div class="bg-slate-900/95 backdrop-blur-md p-6 rounded-[2.5rem] shadow-2xl text-white flex items-center gap-5 max-w-sm">
              <div class="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h4 class="font-bold text-lg">Functional Lead</h4>
                <p class="text-xs text-violet-300 font-medium tracking-wide uppercase">Available Immediately</p>
              </div>
            </div>
            <div class="absolute -bottom-2 -right-2 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#10b981" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              <div>
                <p class="text-sm font-black text-slate-900">400+</p>
                <p class="text-[10px] text-slate-400 font-bold uppercase">Experts Placed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DIFFERENCE -->
  <section class="py-15 px-6 lg:px-20 bg-slate-50 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-5 space-y-10">
          <div class="space-y-4">
            <div class="flex items-center gap-3 text-violet-600 font-bold text-xs uppercase tracking-[0.2em]">
              <span class="w-10 h-[2px] bg-violet-600"></span>Performance Metrics
            </div>
            <h2 class="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1]">
              Stop Recruiting. <br/><span class="text-violet-600">Start Delivering.</span>
            </h2>
            <p class="text-lg text-slate-500 leading-relaxed font-medium">
              Finding the right talent takes months. Our model bypasses the HR bottleneck, giving you direct access to pre-vetted Dynamics 365 professionals.
            </p>
          </div>
          <div class="space-y-6">
            <div *ngFor="let item of features" class="flex gap-4 group">
              <div class="mt-1 bg-white shadow-md rounded-xl p-2 group-hover:bg-violet-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" class="text-violet-600 group-hover:text-white" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-base">{{item.title}}</h4>
                <p class="text-sm text-slate-500 font-medium">{{item.desc}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- COMPARISON TABLE -->
        <div class="lg:col-span-7">
          <div class="bg-white rounded-[3rem] p-8 lg:p-10 shadow-xl border border-slate-100">
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="text-xs font-black text-slate-400 uppercase tracking-wider">Metric</div>
              <div class="text-xs font-black text-slate-400 uppercase tracking-wider text-center">Traditional Hire</div>
              <div class="text-xs font-black text-violet-600 uppercase tracking-wider text-center">Nowara Model</div>
            </div>
            <div *ngFor="let row of comparisonRows" class="grid grid-cols-3 gap-4 py-4 border-t border-slate-100 items-center">
              <span class="text-sm font-bold text-slate-900">{{row.metric}}</span>
              <span class="text-sm text-slate-400 text-center">{{row.traditional}}</span>
              <span class="text-sm font-bold text-violet-600 text-center">{{row.nowara}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ROLES -->
  <section class="py-24 px-6 lg:px-20 bg-white">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-black text-slate-900 mb-12 text-center">Available <span class="text-violet-600">Roles</span></h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div *ngFor="let role of roles" class="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl hover:border-violet-200 transition-all">
          <div class="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mb-5" [innerHTML]="role.icon"></div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">{{role.title}}</h3>
          <p class="text-sm text-slate-500 leading-relaxed">{{role.desc}}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact-form-section" class="py-16 px-6 lg:px-20 bg-violet-50">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span class="text-violet-600 font-black tracking-widest text-xs uppercase bg-violet-100 px-3 py-1 rounded-md">Get Talent</span>
          <h2 class="text-4xl font-black text-slate-900 mt-6 mb-4">Find Your <span class="text-violet-600">Expert</span> Today.</h2>
          <p class="text-lg text-slate-500 leading-relaxed">Tell us your project requirements and we'll match you with pre-vetted Dynamics 365 professionals within 48 hours.</p>
        </div>
        <app-contact-form></app-contact-form>
      </div>
    </div>
  </section>
</div>
  `,
})
export class ResourceAugComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.resourceAug.title, SEO.resourceAug.description); }
  features = [
    { title: 'Pre-Vetted Talent', desc: 'Rigorous technical and communication screening.' },
    { title: 'Flexible Scaling', desc: 'Adjust team size based on project sprint needs.' },
    { title: 'IP Protection', desc: 'Full ownership of code with secure NDAs.' },
  ];
  comparisonRows = [
    { metric: 'Time to Hire', traditional: '3-6 Months', nowara: '48 Hours' },
    { metric: 'Onboarding', traditional: '4-8 Weeks', nowara: 'Same Day' },
    { metric: 'Risk', traditional: 'Full Salary Overhead', nowara: 'Pay per Sprint' },
    { metric: 'Expertise', traditional: 'Generalist', nowara: 'D365 Specialists' },
    { metric: 'Flexibility', traditional: 'Fixed Contract', nowara: 'Scale Up/Down' },
  ];
  roles = [
    { title: 'AL Developers', desc: 'Business Central AL extension developers with deep ERP knowledge.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' },
    { title: 'Functional Consultants', desc: 'Finance, Supply Chain, and Sales module specialists.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>' },
    { title: 'Project Managers', desc: 'Certified PMs with ERP implementation track records.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>' },
    { title: 'Power BI Developers', desc: 'Dashboard and data model experts for BI reporting.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
    { title: 'Integration Architects', desc: 'API and middleware specialists for complex ecosystems.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
    { title: 'QA & Test Engineers', desc: 'Quality assurance specialists ensuring error-free go-lives.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>' },
  ];
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
