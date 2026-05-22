import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SEO } from '../../data/seo-data';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/shared/contact-form/contact-form.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, RouterLink, ContactFormComponent],
  template: `
<div class="min-h-screen bg-white font-sans text-slate-900">
  <!-- HERO -->
  <section class="relative py-20 px-6 lg:px-20 max-w-7xl mx-auto overflow-hidden mt-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="relative h-[500px] md:h-[600px] w-full">
        <div class="absolute top-0 left-0 w-[65%] h-[65%] z-20 shadow-2xl rounded-[2.5rem] overflow-hidden border-8 border-white -rotate-2 hover:rotate-0 transition-transform duration-500">
          <img src="/images/company-profile/about-1.webp" alt="Office Environment" class="w-full h-full object-cover"/>
        </div>
        <div class="absolute bottom-0 right-0 w-[65%] h-[65%] z-10 shadow-2xl rounded-[2.5rem] overflow-hidden border-8 border-white rotate-3 hover:rotate-0 transition-transform duration-500">
          <img src="/images/company-profile/about-2.webp" alt="Team Collaboration" class="w-full h-full object-cover"/>
        </div>
        <div class="absolute bottom-[15%] left-[15%] w-20 h-20 bg-blue-600 rounded-[1.5rem] z-30 flex items-center justify-center shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
        </div>
      </div>
      <div class="space-y-8">
        <div>
          <span class="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-lg">Established Excellence</span>
          <h1 class="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
            Best <span class="text-blue-600">ERP and CRM</span> Provider
          </h1>
          <div class="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>
        </div>
        <div class="space-y-6">
          <p class="text-xl text-slate-700 font-medium leading-relaxed">
            Flexible, fast, and adaptable ERP solution to serve all. Business Central and LS Central together is a single comprehensive solution for all your organization needs.
          </p>
          <div class="grid grid-cols-1 gap-4 text-slate-500 text-base leading-relaxed">
            <p>Nowara Infotech provides top-notch ERP solutions for every retail and manufacturing industry worldwide.</p>
            <p>With a robust team, we operate with more than 40 employees in India and multiple specialized teams in the Middle East.</p>
          </div>
        </div>
        <div class="pt-4">
          <a routerLink="/erp-crm-implementations" class="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-xl shadow-slate-200 inline-flex items-center gap-3">
            Explore Our Solutions
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- CORE VALUES -->
  <section class="bg-slate-50 py-16 px-6 lg:px-20">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase block mb-4">Our Foundation</span>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900">Core <span class="text-blue-600">Values</span></h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div *ngFor="let val of values" class="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all text-center">
          <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5" [innerHTML]="val.icon"></div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">{{val.title}}</h3>
          <p class="text-sm text-slate-500 leading-relaxed">{{val.desc}}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="py-16 px-6 lg:px-20 bg-blue-600">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        <div *ngFor="let stat of stats">
          <p class="text-4xl md:text-5xl font-black mb-2">{{stat.value}}</p>
          <p class="text-blue-100 text-sm font-medium uppercase tracking-wider">{{stat.label}}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TEAM -->
  <section class="py-16 px-6 lg:px-20 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-black text-slate-900">Our <span class="text-blue-600">Leadership</span></h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div *ngFor="let member of team" class="group text-center">
          <div class="relative overflow-hidden rounded-[2rem] mb-5 h-72">
            <img [src]="member.img" [alt]="member.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h3 class="text-xl font-bold text-slate-900">{{member.name}}</h3>
          <p class="text-blue-600 text-sm font-medium mt-1">{{member.role}}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="py-16 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 class="text-4xl font-black text-slate-900 mb-4">Work With <span class="text-blue-600">Nowara</span></h2>
          <p class="text-lg text-slate-500 leading-relaxed">Join the growing list of businesses that trust Nowara Infotech for their ERP and CRM transformation.</p>
        </div>
        <app-contact-form></app-contact-form>
      </div>
    </div>
  </section>
</div>
  `,
})
export class AboutComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.about.title, SEO.about.description); }
  values = [
    { title: 'Innovation', desc: 'Continuously exploring new technologies to deliver cutting-edge ERP solutions.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>' },
    { title: 'Integrity', desc: 'Transparent, honest partnerships built on trust and accountability.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
    { title: 'Excellence', desc: 'Committed to delivering superior quality in every project and engagement.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>' },
    { title: 'Partnership', desc: 'Long-term relationships that go beyond the go-live date.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' },
  ];
  stats = [
    { value: '40+', label: 'Team Members' },
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '30+', label: 'Countries Served' },
  ];
  team = [
    { name: 'Leadership Team', role: 'Executive Leadership', img: '/images/company-profile/about-1.webp' },
    { name: 'Technical Team', role: 'Engineering & Development', img: '/images/company-profile/about-2.webp' },
    { name: 'Consulting Team', role: 'Business Consulting', img: '/images/company-profile/about-1.webp' },
  ];
}
