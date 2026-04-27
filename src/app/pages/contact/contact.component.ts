import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ContactFormComponent } from '../../components/shared/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, NgFor],
  template: `
<div class="min-h-screen bg-white">
  <!-- HERO -->
  <section class="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
    <img src="/images/contact/contact.webp" alt="Modern Office Background" class="absolute inset-0 w-full h-full object-cover"/>
    <div class="absolute inset-0 bg-slate-900/60"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-900/50"></div>
    <div class="relative z-10 text-center px-6 max-w-4xl">
      <span class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20 backdrop-blur-sm">Available Globally</span>
      <h1 class="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
        Get In <span class="text-blue-400">Touch</span>
      </h1>
      <p class="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
        Have a project in mind or need technical support? Our team is ready to help you scale your business.
      </p>
    </div>
  </section>

  <!-- OFFICES -->
  <section class="py-20 px-6 lg:px-20 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-black text-slate-900">Our <span class="text-blue-600">Offices</span></h2>
        <p class="text-slate-500 mt-4 text-lg">Find us around the world</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div *ngFor="let office of offices" class="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl hover:border-blue-100 transition-all">
          <h3 class="text-2xl font-black text-slate-900 mb-4">{{office.city}}</h3>
          <div class="space-y-3 text-slate-600">
            <p class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2" class="mt-0.5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span class="text-sm leading-relaxed">{{office.address}}</span>
            </p>
            <p class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span class="text-sm">{{office.phone}}</span>
            </p>
            <p class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span class="text-sm">{{office.email}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FORM -->
  <section class="py-20 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span class="text-blue-600 font-black tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-md">Send a Message</span>
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">Let's Start a <span class="text-blue-600">Conversation</span></h2>
          <p class="text-lg text-slate-500 leading-relaxed">Tell us about your project and we'll connect you with the right expert within 24 hours.</p>
          <div class="mt-8 space-y-4">
            <a href="tel:+917488910014" class="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors">
              <div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <span class="font-medium">+91 7488910014</span>
            </a>
            <a href="mailto:info@nowarainfotech.com" class="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors">
              <div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <span class="font-medium">info@nowarainfotech.com</span>
            </a>
          </div>
        </div>
        <app-contact-form></app-contact-form>
      </div>
    </div>
  </section>
</div>
  `,
})
export class ContactComponent {
  offices = [
    { city: 'UAE', address: 'G094C DTEC, Dubai Silicon Oasis Dubai', phone: '+971 585041986', email: 'info@nowarainfotech.com' },
    { city: 'Noida', address: 'Anthurium Tower A-212, Sector 73, Noida 201301', phone: '+91 7488910014', email: 'info@nowarainfotech.com' },
    { city: 'Bhagalpur', address: 'C/O Shyam Kishore Ray, Ganga Vihar Colony, Bhagalpur, Bihar – 813210', phone: '+91 7488910014', email: 'info@nowarainfotech.com' },
    { city: 'Ahmedabad', address: 'Sarkhej - Gandhinagar Hwy & Vaishnodevi Cir, Ahmedabad, Gujarat - 382481', phone: '+91 9638540355', email: 'info@nowarainfotech.com' },
    { city: 'Mumbai', address: '502, Corporate Arena, Sitaram Patkar Rd, Piramal Nagar, Goregaon West, Mumbai, Maharashtra - 400104', phone: '+91 7488910014', email: 'info@nowarainfotech.com' },
  ];
}
