import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../../services/seo.service';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';

@Component({
  selector: 'app-summit-2026',
  standalone: true,
  imports: [CommonModule, FormsModule, SafeHtmlPipe],
  template: `
<div class="min-h-screen bg-white">

  <!-- HERO -->
  <section class="relative overflow-hidden bg-[#0b1530] py-20 px-6 lg:px-20">
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/15 rounded-full blur-[90px]"></div>

    <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- Text -->
      <div>
        <span class="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-wide text-blue-300 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
          By Invitation Only &middot; 31 July 2026 &middot; Hyderabad
        </span>
        <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-6">
          Manufacturing <span class="text-blue-400">Leadership<br/>Summit 2026</span>
        </h1>
        <p class="text-slate-300 text-base lg:text-lg leading-relaxed max-w-lg mb-8">
          Where Hyderabad's top manufacturing and enterprise leaders convene to explore AI-powered ERP, Dynamics 365, and the future of competitive operations.
        </p>

        <div class="flex flex-wrap gap-x-8 gap-y-3 mb-8 text-slate-300 text-sm">
          <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> Thursday, 31 July 2026</span>
          <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg> 9:00 AM &ndash; 3:00 PM</span>
          <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg> Hyderabad, India</span>
          <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" stroke-width="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg> 50 Seats &middot; C-Level Only</span>
        </div>

        <div class="flex flex-wrap gap-4">
          <button (click)="scrollToForm()" class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-900/40">
            Request Invitation
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
          <button (click)="scrollToAgenda()" class="border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/5 transition-all">
            View Agenda
          </button>
        </div>
      </div>

      <!-- Form -->
      <div id="register-form" class="relative">
        <ng-container *ngTemplateOutlet="registrationForm"></ng-container>
      </div>

    </div>
  </section>

  <!-- PARTNER BAR -->
  <section class="py-6 px-6 lg:px-20 bg-white border-y border-slate-100">
    <div class="max-w-7xl mx-auto flex items-center justify-center gap-3 text-slate-500 text-sm font-medium">
      <svg width="20" height="20" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0">
        <rect x="0" y="0" width="11" height="11" fill="#f25022"/>
        <rect x="12" y="0" width="11" height="11" fill="#7fba00"/>
        <rect x="0" y="12" width="11" height="11" fill="#00a4ef"/>
        <rect x="12" y="12" width="11" height="11" fill="#ffb900"/>
      </svg>
      Presented in partnership with <span class="font-bold text-slate-800">Microsoft</span> &middot; Featuring Dynamics 365 &amp; Azure
    </div>
  </section>

  <!-- STATS -->
  <section class="py-14 px-6 lg:px-20 bg-white">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
      <div *ngFor="let s of stats" class="text-center bg-slate-50 rounded-2xl border border-slate-100 py-8 px-4">
        <p class="text-3xl font-black text-blue-600">{{ s.value }}</p>
        <p class="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">{{ s.label }}</p>
      </div>
    </div>
  </section>

  <!-- AGENDA -->
  <section id="agenda" class="py-16 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-4xl mx-auto">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Event Agenda</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">A Half-Day Built for Decision-Makers</h2>
      <p class="text-slate-500 mb-10">A tightly curated half-day of keynotes, peer stories, panels, and private conversations &mdash; designed for decision-makers, not spectators.</p>

      <div class="space-y-3">
        <div *ngFor="let item of agenda" class="flex items-start gap-5 bg-white rounded-2xl border border-slate-100 p-5 hover:border-blue-100 hover:shadow-sm transition-all">
          <span class="text-xs font-bold text-blue-600 font-mono w-24 flex-shrink-0 pt-1">{{ item.time }}</span>
          <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" [ngClass]="item.bg" [innerHTML]="item.icon | safeHtml"></div>
          <div>
            <h3 class="font-bold text-slate-900">{{ item.title }}</h3>
            <p class="text-sm text-slate-500">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHO ATTENDS -->
  <section class="py-16 px-6 lg:px-20 bg-white">
    <div class="max-w-5xl mx-auto">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Who Attends</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">A Curated, Invitation-Only Room</h2>
      <p class="text-slate-500 mb-10">Seats are limited to senior decision-makers from manufacturing and adjacent industries in Hyderabad.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-blue-50 rounded-2xl border border-blue-100 p-7">
          <h3 class="font-bold text-blue-700 text-xs uppercase tracking-widest mb-4">Priority Attendees</h3>
          <div class="flex flex-wrap gap-2">
            <span *ngFor="let role of priorityRoles" class="bg-white text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-200">{{ role }}</span>
          </div>
        </div>
        <div class="bg-slate-50 rounded-2xl border border-slate-100 p-7">
          <h3 class="font-bold text-slate-600 text-xs uppercase tracking-widest mb-4">Also Welcome</h3>
          <div class="flex flex-wrap gap-2">
            <span *ngFor="let role of welcomeRoles" class="bg-white text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200">{{ role }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TARGET INDUSTRIES -->
  <section class="py-16 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-5xl mx-auto">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Target Industries</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-8">Built for These Sectors</h2>
      <div class="flex flex-wrap gap-3">
        <span *ngFor="let ind of industries" class="bg-white text-slate-700 text-sm font-bold px-4 py-2 rounded-xl border border-slate-200">{{ ind }}</span>
      </div>
    </div>
  </section>

  <!-- FINAL CTA / FORM -->
  <section class="relative overflow-hidden py-20 px-6 lg:px-20 bg-[#0b1530]">
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/15 rounded-full blur-[90px]"></div>
    <div class="relative max-w-3xl mx-auto text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-black text-white">Reserve Your Seat</h2>
      <p class="text-slate-300 mt-3">Attendance is by invitation only. Submit your details and our team will confirm your eligibility within 24 hours.</p>
    </div>
    <div class="relative">
      <ng-container *ngTemplateOutlet="registrationForm"></ng-container>
    </div>
  </section>

</div>

<!-- SHARED REGISTRATION FORM TEMPLATE -->
<ng-template #registrationForm>
  <div class="max-w-xl mx-auto">

    <div *ngIf="submitted" class="bg-white rounded-3xl p-10 text-center shadow-xl">
      <div class="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#22c55e" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
      </div>
      <h3 class="text-2xl font-black text-slate-900 mb-2">Request Received!</h3>
      <p class="text-slate-500 font-medium">Our team will confirm your eligibility within 24 hours.</p>
    </div>

    <form *ngIf="!submitted" (ngSubmit)="onSubmit()" class="bg-white rounded-3xl p-8 shadow-xl space-y-4">
      <div class="mb-2">
        <span class="text-blue-600 font-black tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-md">Limited Seats Available</span>
        <h3 class="text-2xl font-black text-slate-900 mt-3">Request Your Invitation</h3>
        <p class="text-slate-500 text-sm mt-1">Our team will confirm your eligibility within 24 hours.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required type="text" placeholder="Company Name" [(ngModel)]="companyName" name="companyName"
          class="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none text-sm transition-all" />
        <input required type="text" placeholder="Guest Name" [(ngModel)]="guestName" name="guestName"
          class="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none text-sm transition-all" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required type="email" placeholder="Business Email" [(ngModel)]="businessEmail" name="businessEmail"
          class="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none text-sm transition-all" />
        <input required type="tel" placeholder="Mobile No." [(ngModel)]="mobile" name="mobile"
          class="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none text-sm transition-all" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required type="number" min="1" placeholder="No. of Guests" [(ngModel)]="guestCount" name="guestCount"
          class="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none text-sm transition-all" />
        <input type="tel" placeholder="Alternative Mobile No. (Optional)" [(ngModel)]="altMobile" name="altMobile"
          class="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none text-sm transition-all" />
      </div>
      <button type="submit" [disabled]="loading"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl h-14 flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-100 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">
        <ng-container *ngIf="loading">
          <svg class="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" viewBox="0 0 24 24"></svg>
          <span>Submitting...</span>
        </ng-container>
        <span *ngIf="!loading">Request Invitation</span>
      </button>
    </form>

  </div>
</ng-template>
  `,
})
export class Summit2026Component implements OnInit {
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  private emailApi = 'https://mail.nicpl.co/api/email/send';

  ngOnInit() {
    this.seo.update({
      title: 'Manufacturing Leadership Summit 2026 | Nowara Infotech',
      description: 'Join Nowara Infotech and Microsoft at the Manufacturing Leadership Summit 2026 in Hyderabad. An invitation-only event for C-level manufacturing leaders exploring AI-powered ERP and Dynamics 365.',
      keywords: 'Manufacturing Leadership Summit 2026, Dynamics 365 event, Nowara Infotech summit, Hyderabad ERP event',
    }, 'summit-2026');
  }

  companyName = ''; guestName = ''; businessEmail = ''; mobile = ''; guestCount = ''; altMobile = '';
  loading = false; submitted = false;

  scrollToForm() {
    if (isPlatformBrowser(this.platformId)) document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToAgenda() {
    if (isPlatformBrowser(this.platformId)) document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' });
  }

  async onSubmit() {
    this.loading = true;

    const bodyHtml = `
      <p><strong>Company Name:</strong> ${this.companyName}</p>
      <p><strong>Guest Name:</strong> ${this.guestName}</p>
      <p><strong>Business Email:</strong> ${this.businessEmail}</p>
      <p><strong>Mobile No:</strong> ${this.mobile}</p>
      <p><strong>No. of Guests:</strong> ${this.guestCount}</p>
      ${this.altMobile ? `<p><strong>Alternative Mobile No:</strong> ${this.altMobile}</p>` : ''}
    `.trim();

    const fd = new FormData();
    fd.append('to',      'info@nowarainfotech.com');
    fd.append('cc',      'info@nowarainfotech.com');
    fd.append('subject', `Summit 2026 Registration - ${this.companyName}`);
    fd.append('body',    bodyHtml);
    fd.append('isHtml',  'true');

    try {
      fetch(this.emailApi, { method: 'POST', body: fd, mode: 'no-cors' }).catch(() => {});
      await new Promise(r => setTimeout(r, 1000));
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
        this.companyName = ''; this.guestName = ''; this.businessEmail = '';
        this.mobile = ''; this.guestCount = ''; this.altMobile = '';
      }, 4000);
    } catch (err) {
      console.error('Registration failed:', err);
      alert('We encountered an error. Please try again or contact us via WhatsApp.');
    } finally {
      this.loading = false;
    }
  }

  stats = [
    { value: '50+', label: 'CXO Attendees' },
    { value: '15+', label: 'Qualified Meetings' },
    { value: '5-7', label: 'Opportunity Discussions' },
    { value: '90',  label: 'Days to Pipeline' },
  ];

  agenda = [
    { time: '9:00 - 9:30',   title: 'Registration & Welcome Coffee',   desc: 'Arrival, networking, badge pickup.', bg: 'bg-amber-50',   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#d97706" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' },
    { time: '9:30 - 9:45',   title: 'Welcome Address',                 desc: 'Setting the stage for the day.', bg: 'bg-blue-50',     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l9.586-9.586z"/></svg>' },
    { time: '9:45 - 10:30',  title: 'Microsoft Keynote',               desc: 'AI in enterprise: from Excel to intelligent operations.', bg: 'bg-orange-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#ea580c" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
    { time: '10:30 - 11:00', title: 'Customer Success Story',          desc: 'Real-world Dynamics 365 transformation case.', bg: 'bg-emerald-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#059669" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>' },
    { time: '11:00 - 11:45', title: 'AI & ERP Transformation Panel',   desc: 'Manufacturing leaders share lessons from the floor.', bg: 'bg-purple-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#7c3aed" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l3.586-3.586z"/></svg>' },
    { time: '11:45 - 1:00',  title: 'Networking Lunch',                desc: 'Hosted lunch, open conversations.', bg: 'bg-rose-50',    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#e11d48" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 2v8M7 2v4a2 2 0 004 0V2m0 0v8m6-8v20M19 2c-1.5 0-3 1.5-3 4v4h3"/></svg>' },
    { time: '1:00 - 3:00',   title: 'One-on-One Discussion Zone',      desc: 'Private meetings with Microsoft & partner teams.', bg: 'bg-indigo-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#4f46e5" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' },
  ];

  priorityRoles = ['CEO', 'MD', 'COO', 'CFO', 'CIO', 'CTO', 'VP Operations', 'VP Supply Chain', 'Head of Manufacturing'];
  welcomeRoles  = ['Digital Transformation Head', 'IT Director', 'ERP Head', 'Plant Head', 'Business Excellence Head'];
  industries = ['Manufacturing', 'Industrial Eng.', 'Auto Components', 'Chemicals', 'Packaging', 'Food & Beverage', 'Pharma', 'Healthcare Mfg.', 'Retail Chains', 'Distribution', 'FMCG'];
}
