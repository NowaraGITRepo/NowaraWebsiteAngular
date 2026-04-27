import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';

@Component({
  selector: 'app-erp-support',
  standalone: true,
  imports: [ContactFormComponent, NgFor],
  template: `
<div class="min-h-screen bg-white pt-20">
  <!-- HERO -->
  <section class="relative py-5 px-6 lg:px-20 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-8 animate-fade-in-left">
        <span class="inline-block px-4 py-1.5 text-xs font-black tracking-widest text-blue-600 uppercase bg-blue-50 rounded-lg">Strategic Consulting</span>
        <h1 class="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05]">
          Seamless <span class="text-blue-600">ERP</span> Implementation.
        </h1>
        <p class="text-xl text-slate-500 leading-relaxed">
          Unlock operational excellence with our end-to-end ERP consulting. From Business Central to LS Central, we align technology with your business DNA.
        </p>
        <div class="flex flex-wrap gap-4">
          <button (click)="scrollTo('contact-section')" class="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">Get Started</button>
          <button (click)="scrollTo('methodology')" class="bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95">View Roadmap</button>
        </div>
      </div>
      <div class="relative h-[500px]">
        <div class="absolute top-0 right-0 w-[80%] h-[80%] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl z-10">
          <img src="/images/service/ls central.webp" alt="ERP Consulting" class="w-full h-full object-cover" />
        </div>
        <div class="absolute bottom-20 left-4 w-[40%] h-[40%] bg-blue-600 rounded-[2rem] flex items-center justify-center shadow-2xl z-20 border-8 border-white p-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <!-- METHODOLOGY -->
  <section id="methodology" class="py-2 bg-white px-6 lg:px-24 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
        <div class="max-w-2xl">
          <span class="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase block mb-4">Execution Excellence</span>
          <h2 class="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
            Our Implementation <br/>
            <span class="text-blue-600 relative inline-block mt-2">Methodology</span>
          </h2>
        </div>
        <p class="text-slate-500 text-lg md:max-w-xs italic border-l-4 border-blue-600 pl-6 py-2">
          Ensuring zero downtime and maximum ROI through a structured 4-phase approach.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div *ngFor="let item of steps" class="relative group">
          <div class="mb-8 flex items-center gap-4">
            <span class="text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-500">{{item.step}}</span>
          </div>
          <div class="relative mb-8 w-20 h-20">
            <div class="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 opacity-10"></div>
            <div class="relative w-20 h-20 bg-white border border-slate-100 rounded-3xl flex items-center justify-center text-blue-600 shadow-sm group-hover:border-blue-600 transition-all duration-500" [innerHTML]="item.icon"></div>
          </div>
          <div class="space-y-4">
            <h4 class="text-2xl font-black text-slate-900 tracking-tight">{{item.title}}</h4>
            <p class="text-slate-500 leading-relaxed text-base font-medium">{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DEEP DIVE -->
  <section class="py-24 bg-slate-50 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-4">A Deeper Dive into <span class="text-blue-600">Strategic Implementation</span></h2>
        <p class="text-slate-600 text-lg max-w-6xl leading-relaxed">Successful ERP implementation isn't just about software; it's about transforming your business architecture.</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div class="space-y-10">
          <div *ngFor="let item of col1" class="group mb-4">
            <h4 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <div class="w-2 h-8 bg-blue-600 rounded-full"></div>{{item.title}}
            </h4>
            <p class="text-slate-600 leading-relaxed pl-5 border-l border-slate-200 group-hover:border-blue-600 transition-colors duration-300">{{item.desc}}</p>
          </div>
        </div>
        <div class="space-y-10">
          <div *ngFor="let item of col2" class="group mb-4">
            <h4 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <div class="w-2 h-8 bg-blue-600 rounded-full"></div>{{item.title}}
            </h4>
            <p class="text-slate-600 leading-relaxed pl-5 border-l border-slate-200 group-hover:border-blue-600 transition-colors duration-300">{{item.desc}}</p>
          </div>
        </div>
      </div>
      <div class="mt-20 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center gap-8">
        <div class="bg-blue-50 p-6 rounded-[2rem]">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
        <div>
          <h4 class="text-2xl font-black text-slate-900 mb-2">The Nowara Security Promise</h4>
          <p class="text-slate-500 max-w-2xl">Every ERP implementation follows ISO-standard security protocols. Your business data is protected by enterprise-grade encryption and multi-factor authentication from day one.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact-section" class="py-10 px-6 lg:px-20 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-16 items-start">
        <div class="lg:w-1/3 sticky top-32">
          <span class="text-blue-600 font-black tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-md">Consultation</span>
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-8 leading-tight">
            Ready to Start Your <br/><span class="text-blue-600">Transformation?</span>
          </h2>
        </div>
        <div class="lg:w-2/3 w-full">
          <app-contact-form></app-contact-form>
        </div>
      </div>
    </div>
  </section>
</div>
  `,
})
export class ErpSupportComponent {
  steps = [
    { step: '01', title: 'Discovery', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>', desc: 'In-depth analysis of your current workflows, pain points, and future scalability requirements.' },
    { step: '02', title: 'Design', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', desc: 'Architecting a custom ERP blueprint and solution stack specifically tailored to your industry.' },
    { step: '03', title: 'Deployment', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>', desc: 'Safe data migration, system configuration, and rigorous UAT testing before going live.' },
    { step: '04', title: 'Optimization', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>', desc: 'Continuous post-live support, performance tuning, and training to ensure maximum adoption.' },
  ];
  col1 = [
    { title: 'Business Process Re-engineering', desc: 'Before we write a single line of code, we evaluate your current workflows. Our consultants identify redundancies in your procurement, sales, and inventory cycles, optimizing them for Microsoft Dynamics 365 Business Central standards to reduce custom code and technical debt.' },
    { title: 'Seamless Data Integrity & Migration', desc: 'Data is the lifeblood of your ERP. We utilize advanced ETL tools to ensure that your historical data from legacy systems is cleaned, mapped, and migrated with 100% accuracy, maintaining financial trail integrity throughout the transition.' },
  ];
  col2 = [
    { title: 'LS Central Unified Commerce Integration', desc: 'For retail and hospitality clients, we specialize in bridging the gap between the back office and the POS. By integrating LS Central, we provide a unified commerce experience where inventory, member management, and sales data sync in real-time across all channels.' },
    { title: 'User Empowerment & Change Management', desc: 'The best system fails without user adoption. Our implementation includes comprehensive "Train-the-Trainer" sessions and detailed documentation. We ensure your team is not just using the software, but leveraging it to make data-driven decisions.' },
  ];
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
