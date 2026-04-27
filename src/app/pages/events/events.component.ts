import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor],
  template: `
<div class="min-h-screen bg-white">
  <!-- HERO -->
  <section class="relative h-[70vh] overflow-hidden">
    <img src="/images/gallery/14.webp" alt="Event Banner" class="w-full h-full object-cover"/>
    <div class="absolute inset-0 bg-slate-900/60"></div>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-black mb-4">Nowara <span class="text-blue-400">Events</span></h1>
        <p class="text-blue-100 text-lg max-w-2xl mx-auto">Meet us at industry events, workshops, and conferences around the globe.</p>
      </div>
    </div>
  </section>

  <!-- INTRO -->
  <section class="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
    <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-6">
      Entrepreneurs, let's meet and innovate with <span class="text-primary">Business Central!</span>
    </h2>
    <p class="text-lg text-slate-600 leading-relaxed max-w-4xl">
      Kolkata, the City of Joy, is on the verge of a business transformation. Nowara Infotech, in partnership with Redington, invites business leaders to experience Microsoft Dynamics 365 Business Central — a centralized ERP designed to optimize operations, increase efficiency, and drive growth.
    </p>
  </section>

  <!-- WHY ATTEND -->
  <section class="py-16 px-6 lg:px-20 bg-primary/5">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 class="text-3xl font-black text-slate-900 mb-8">Why Attend This Event?</h2>
        <ul class="space-y-5">
          <li *ngFor="let reason of reasons" class="flex items-start gap-4">
            <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-0.5" [innerHTML]="reason.icon"></div>
            <div>
              <strong class="text-slate-900 block mb-1">{{reason.title}}</strong>
              <span class="text-slate-600 text-sm leading-relaxed">{{reason.desc}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="rounded-[2.5rem] overflow-hidden shadow-2xl">
        <img src="/images/event/event img.webp" alt="Event" class="w-full h-full object-cover"/>
      </div>
    </div>
  </section>

  <!-- WHO SHOULD ATTEND -->
  <section class="py-16 px-6 lg:px-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-black text-slate-900 mb-12 text-center">Who Should <span class="text-primary">Attend?</span></h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div *ngFor="let attendee of attendees" class="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 text-center hover:shadow-lg transition-all">
          <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5" [innerHTML]="attendee.icon"></div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">{{attendee.title}}</h3>
          <p class="text-sm text-slate-500">{{attendee.desc}}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- EVENT GALLERY -->
  <section class="py-16 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-black text-slate-900 mb-12 text-center">Event <span class="text-primary">Highlights</span></h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div *ngFor="let img of galleryImages" class="rounded-2xl overflow-hidden h-40 md:h-52">
          <img [src]="img" alt="Event highlight" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
        </div>
      </div>
    </div>
  </section>
</div>
  `,
})
export class EventsComponent {
  reasons = [
    { title: 'Overcome Operational Hurdles', desc: 'Streamline workflows and eliminate inefficiencies across your business.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
    { title: 'Data-Driven Decisions', desc: 'Gain real-time business insights to make smarter, faster decisions.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
    { title: 'Industry-Specific Solutions', desc: 'Tailored ERP for Manufacturing, F&B, Healthcare & Retail sectors.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>' },
  ];
  attendees = [
    { title: 'Business Owners & CEOs', desc: 'Discover how ERP transforms strategic decision-making.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#86a4da" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>' },
    { title: 'Operations Managers', desc: 'See how real-time data elevates operational efficiency.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#86a4da" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/></svg>' },
    { title: 'IT & Finance Teams', desc: 'Explore integration capabilities and reporting tools.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#86a4da" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>' },
  ];
  galleryImages = [
    '/images/gallery/3.webp', '/images/gallery/4.webp', '/images/gallery/6.webp', '/images/gallery/14.webp',
    '/images/gallery/15.webp', '/images/gallery/17.webp', '/images/gallery/20.webp', '/images/gallery/21.webp',
  ];
}
