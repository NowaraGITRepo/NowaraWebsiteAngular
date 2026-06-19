import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SeoService } from '../../../services/seo.service';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';

@Component({
  selector: 'app-customer-connect-2026',
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
          Invitation Only &middot; 31 July 2026 &middot; Hyderabad
        </span>
        <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-4">
          Nowara Infotech <span class="text-blue-400">Customer<br/>Connect 2026</span>
        </h1>
        <p class="text-blue-300 font-bold text-base lg:text-lg mb-5">
          Driving Digital Transformation with AI, Cloud &amp; Enterprise Innovation
        </p>
        <p class="text-slate-300 text-base lg:text-lg leading-relaxed max-w-lg mb-8">
          Join an exclusive gathering of business and technology leaders to explore how AI, Cloud, ERP, Data, and Enterprise Technologies are reshaping modern organizations. Discover practical strategies, real-world success stories, and innovative solutions that accelerate business growth, improve operational efficiency, and support long-term business transformation.
        </p>

        <div class="flex flex-wrap gap-x-8 gap-y-3 mb-8 text-slate-300 text-sm">
          <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> Friday, 31 July 2026</span>
          <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg> 9:30 AM &ndash; 5:00 PM</span>
          <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg> Hyderabad, India</span>
          <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" stroke-width="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg> CXOs, IT Leaders &amp; Business Decision-Makers</span>
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

  <!-- EVENT HIGHLIGHTS (STATS) -->
  <section class="py-14 px-6 lg:px-20 bg-white">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
      <div *ngFor="let s of stats" class="text-center bg-slate-50 rounded-2xl border border-slate-100 py-8 px-4">
        <p class="text-3xl font-black text-blue-600">{{ s.value }}</p>
        <p class="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">{{ s.label }}</p>
      </div>
    </div>
  </section>

  <!-- WHY ATTEND -->
  <section class="py-16 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-5xl mx-auto">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Why Attend</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">Why Attend Nowara Infotech Customer Connect 2026</h2>
      <p class="text-slate-500 mb-10">Gain valuable insights into emerging technologies and learn how organizations are leveraging digital transformation to improve business performance and stay competitive.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div *ngFor="let b of benefits" class="flex items-center gap-3 bg-white rounded-xl border border-slate-100 p-4">
          <span class="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </span>
          <span class="text-sm font-bold text-slate-700">{{ b }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- AGENDA -->
  <section id="agenda" class="py-16 px-6 lg:px-20 bg-white">
    <div class="max-w-4xl mx-auto">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Event Agenda</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">A Full Day Built for Business &amp; Technology Leaders</h2>
      <p class="text-slate-500 mb-10">Explore practical insights, technology trends, customer success stories, and networking opportunities designed for enterprise decision-makers.</p>

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
  <section class="py-16 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-5xl mx-auto">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Who Attends</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">Designed for Technology &amp; Business Decision-Makers</h2>
      <p class="text-slate-500 mb-10">Connect with senior executives and technology leaders responsible for driving innovation, digital transformation, enterprise applications, cloud adoption, cybersecurity, and business growth.</p>

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
  <section class="py-16 px-6 lg:px-20 bg-white">
    <div class="max-w-5xl mx-auto">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Industries</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">Built for Forward-Thinking Industries</h2>
      <p class="text-slate-500 mb-8">This event is designed for organizations looking to modernize operations, improve efficiency, and accelerate digital transformation initiatives.</p>
      <div class="flex flex-wrap gap-3">
        <span *ngFor="let ind of industries" class="bg-slate-50 text-slate-700 text-sm font-bold px-4 py-2 rounded-xl border border-slate-200">{{ ind }}</span>
      </div>
    </div>
  </section>

  <!-- MEET THE EXPERTS -->
  <section class="py-16 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-3xl mx-auto text-center">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Industry Experts</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">Meet Industry Experts &amp; Technology Specialists</h2>
      <p class="text-slate-500">Engage directly with experienced consultants, technology architects, and business transformation experts to discuss your organization&rsquo;s goals, challenges, and future technology roadmap.</p>
    </div>
  </section>

  <!-- FINAL CTA / FORM -->
  <section class="relative overflow-hidden py-20 px-6 lg:px-20 bg-[#0b1530]">
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/15 rounded-full blur-[90px]"></div>
    <div class="relative max-w-3xl mx-auto text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-black text-white">Reserve Your Seat</h2>
      <p class="text-slate-300 mt-3">Attendance is by invitation only. Submit your details and our team will review your registration and confirm your participation. Join senior business and technology leaders for a day of innovation, collaboration, and practical insights into the future of enterprise technology.</p>
    </div>
    <div class="relative">
      <ng-container *ngTemplateOutlet="registrationForm"></ng-container>
    </div>
  </section>

</div>

<!-- SHARED REGISTRATION FORM TEMPLATE -->
<ng-template #registrationForm>
  <div class="max-w-xl mx-auto">

    <form (ngSubmit)="onSubmit()" class="bg-white rounded-3xl p-8 shadow-xl space-y-4">
      <div class="mb-2">
        <span class="text-blue-600 font-black tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-md">Invitation Only</span>
        <h3 class="text-2xl font-black text-slate-900 mt-3">Request Your Invitation</h3>
        <p class="text-slate-500 text-sm mt-1">Submit your details and our team will review your registration and confirm your participation.</p>
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
        <input required type="tel" placeholder="Mobile Number" [(ngModel)]="mobile" name="mobile"
          class="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none text-sm transition-all" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required type="number" min="1" placeholder="Number of Guests" [(ngModel)]="guestCount" name="guestCount"
          class="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none text-sm transition-all" />
        <input type="tel" placeholder="Alternative Mobile Number (Optional)" [(ngModel)]="altMobile" name="altMobile"
          class="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none text-sm transition-all" />
      </div>
      <button type="submit" [disabled]="loading"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl h-14 flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-100 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">
        <ng-container *ngIf="loading">
          <svg class="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" viewBox="0 0 24 24"></svg>
          <span>Submitting...</span>
        </ng-container>
        <span *ngIf="!loading">Request Your Invitation Today</span>
      </button>
    </form>

  </div>
</ng-template>
  `,
})
export class Summit2026Component implements OnInit {
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private emailApi = 'https://mail.nicpl.co/api/email/send';

  ngOnInit() {
    this.seo.update({
      title: 'Nowara Infotech Customer Connect 2026 | Driving Digital Transformation with AI, Cloud & Enterprise Innovation',
      description: 'Join Nowara Infotech Customer Connect 2026 in Hyderabad. An invitation-only gathering of CXOs, IT Leaders & Business Decision-Makers exploring AI, Cloud, ERP, Data, and Enterprise Technologies.',
      keywords: 'Nowara Infotech Customer Connect 2026, AI Cloud ERP event, Hyderabad enterprise technology event, digital transformation summit',
    }, 'customer-connect-2026');
  }

  companyName = ''; guestName = ''; businessEmail = ''; mobile = ''; guestCount = ''; altMobile = '';
  loading = false;

  scrollToForm() {
    if (isPlatformBrowser(this.platformId)) document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToAgenda() {
    if (isPlatformBrowser(this.platformId)) document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' });
  }

  async onSubmit() {
    if (this.loading) return;
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
    fd.append('subject', `Customer Connect 2026 Registration - ${this.companyName}`);
    fd.append('body',    bodyHtml);
    fd.append('isHtml',  'true');

    try {
      fetch(this.emailApi, { method: 'POST', body: fd, mode: 'no-cors' }).catch(() => {});
      await new Promise(r => setTimeout(r, 600));
      this.router.navigateByUrl('/thank-you/customer-connect-2026');
    } catch (err) {
      console.error('Registration failed:', err);
      alert('We encountered an error. Please try again or contact us via WhatsApp.');
      this.loading = false;
    }
  }

  stats = [
    { value: '50+', label: 'CXO & IT Leaders' },
    { value: '15+', label: 'Enterprise Discussions' },
    { value: '10+', label: 'Industry Experts' },
    { value: '1 Day', label: 'Strategic Networking' },
  ];

  benefits = [
    'Live Solution Demonstrations',
    'AI & Cloud Innovation Sessions',
    'Enterprise Technology Best Practices',
    'Customer Success Stories',
    'One-on-One Consultation with Experts',
    'Strategic Networking Opportunities',
    'Interactive Q&A Discussions',
    'Technology Roadmap Planning',
  ];

  agenda = [
    { time: '09:30 AM', title: 'Registration & Welcome Coffee',              desc: 'Meet fellow attendees, industry experts, and technology leaders.', bg: 'bg-amber-50',   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#d97706" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' },
    { time: '10:00 AM', title: 'Opening Keynote by Nowara Infotech',         desc: 'Opening remarks and vision for digital transformation in modern enterprises.', bg: 'bg-blue-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l9.586-9.586z"/></svg>' },
    { time: '10:45 AM', title: 'Digital Transformation Trends & AI Innovations', desc: 'Explore emerging technologies, AI adoption strategies, and business impact.', bg: 'bg-orange-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#ea580c" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
    { time: '11:30 AM', title: 'Live Product Demonstrations',                desc: 'Experience enterprise solutions and technology innovations in action.', bg: 'bg-emerald-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#059669" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>' },
    { time: '12:30 PM', title: 'Lunch & Networking',                         desc: 'Connect with peers, partners, and industry leaders.', bg: 'bg-rose-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#e11d48" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 2v8M7 2v4a2 2 0 004 0V2m0 0v8m6-8v20M19 2c-1.5 0-3 1.5-3 4v4h3"/></svg>' },
    { time: '02:00 PM', title: 'Customer Success Stories',                   desc: 'Learn from real-world business transformation journeys and implementation experiences.', bg: 'bg-purple-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#7c3aed" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>' },
    { time: '03:00 PM', title: 'Expert Panel Discussion',                    desc: 'Industry experts discuss challenges, opportunities, and future technology trends.', bg: 'bg-indigo-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#4f46e5" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l3.586-3.586z"/></svg>' },
    { time: '04:00 PM', title: 'One-on-One Consultation Sessions',           desc: 'Meet technology specialists and discuss your business challenges.', bg: 'bg-cyan-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#0891b2" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' },
    { time: '05:00 PM', title: 'Networking & Closing Remarks',               desc: 'Build valuable relationships and explore future collaboration opportunities.', bg: 'bg-teal-50', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#0d9488" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"/></svg>' },
  ];

  priorityRoles = ['CEO', 'CTO', 'CIO', 'CXO', 'VP IT', 'IT Director', 'Head of IT', 'Technology Head', 'Technology Director'];
  welcomeRoles  = ['Digital Transformation Head', 'Enterprise Applications Head', 'Cloud Solutions Head', 'ERP Program Manager', 'Innovation Manager', 'Business Technology Leader', 'Infrastructure Manager', 'IT Operations Manager'];
  industries = ['Manufacturing', 'Retail', 'Pharma'];
}