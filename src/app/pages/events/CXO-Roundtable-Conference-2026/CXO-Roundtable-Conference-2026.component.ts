import { Component, OnInit, inject, PLATFORM_ID, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

      <div>
        <span class="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-wide text-blue-300 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
          Invitation Only &middot; 7 August 2026 &middot; Hyderabad
        </span>

        <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-6">
          Nowara <span class="text-blue-400">CXO Roundtable<br/>Conference 2026</span>
        </h1>

        <p class="text-slate-300 text-base lg:text-lg leading-relaxed max-w-lg mb-8">
          Join an exclusive, invitation-only gathering of CXOs, business leaders, and technology decision-makers in Hyderabad. Explore AI-driven automation, advanced finance, supply chain flexibility, and enterprise transformation with Dynamics 365 Business Central.
        </p>

        <div class="flex flex-wrap gap-x-8 gap-y-3 mb-8 text-slate-300 text-sm">
          <span class="flex items-center gap-2">📅 Friday, 7 August 2026</span>
          <span class="flex items-center gap-2">🕖 07:00 PM – 11:00 PM</span>
          <span style="display:inline-flex; align-items:center; gap:8px; padding:8px 12px; background:#f9fafb; border-radius:8px; color:#374151; font-size:12px; border:1px solid #e5e7eb;">
            📍 Hotel Lemon Tree Banjara Hills, Hyderabad, India
          </span>
          <span class="flex items-center gap-2">👥 Invitation Only · CXOs & IT Leaders</span>
        </div>

        <div class="flex flex-wrap gap-4">
          <button (click)="scrollToForm()" class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-900/40">
            Request Invitation →
          </button>
          <button (click)="scrollToAgenda()" class="border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/5 transition-all">
            View Agenda
          </button>
        </div>
      </div>

      <div id="register-form" class="relative">
        <ng-container *ngTemplateOutlet="registrationForm"></ng-container>
      </div>

    </div>
  </section>

  <!-- PARTNER BAR -->
  <section class="py-6 px-6 lg:px-20 bg-white border-y border-slate-100">
    <div class="max-w-7xl mx-auto flex items-center justify-center gap-3 text-slate-500 text-sm font-medium">
      Presented in partnership with <span class="font-bold text-slate-800">Microsoft</span> &middot; Featuring Dynamics 365 Business Central
    </div>
  </section>

  <!-- WHY ATTEND -->
  <section class="py-16 px-6 lg:px-20 bg-white">
    <div class="max-w-6xl mx-auto">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Why Attend</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-4">Why Attend the Nowara CXO Roundtable Conference 2026</h2>
      <p class="text-slate-500 mb-10 max-w-4xl">
        Gain practical insights into how modern organisations are using AI, cloud, ERP, and data to improve business performance, strengthen financial control, build supply chain agility, and stay competitive.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div *ngFor="let benefit of benefits" class="bg-slate-50 border border-slate-100 rounded-xl p-4 text-slate-700 font-medium">
          ✓ {{ benefit }}
        </div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="py-14 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
      <div *ngFor="let s of stats" class="text-center bg-white rounded-2xl border border-slate-100 py-8 px-4">
        <p class="text-3xl font-black text-blue-600">{{ s.value }}</p>
        <p class="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">{{ s.label }}</p>
      </div>
    </div>
  </section>

  <!-- AGENDA -->
  <section id="agenda" class="py-16 px-6 lg:px-20 bg-white">
    <div class="max-w-4xl mx-auto">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Conference Agenda</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">A Full Day Built for CXOs and Technology Leaders</h2>
      <p class="text-slate-500 mb-10">
        Explore practical insights, enterprise technology trends, customer experiences, and meaningful networking opportunities designed for senior business and IT decision-makers.
      </p>

      <div class="space-y-3">
        <div *ngFor="let item of agenda" class="flex items-start gap-5 bg-slate-50 rounded-2xl border border-slate-100 p-5 hover:border-blue-100 hover:shadow-sm transition-all">
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
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">Designed for Business & Technology Decision-Makers</h2>
      <p class="text-slate-500 mb-10">
        Connect with senior leaders responsible for innovation, digital transformation, enterprise applications, cloud adoption, finance, supply chain operations, and business growth.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-blue-50 rounded-2xl border border-blue-100 p-7">
          <h3 class="font-bold text-blue-700 text-xs uppercase tracking-widest mb-4">Priority Attendees</h3>
          <div class="flex flex-wrap gap-2">
            <span *ngFor="let role of priorityRoles" class="bg-white text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-200">{{ role }}</span>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-slate-100 p-7">
          <h3 class="font-bold text-slate-600 text-xs uppercase tracking-widest mb-4">Also Welcome</h3>
          <div class="flex flex-wrap gap-2">
            <span *ngFor="let role of welcomeRoles" class="bg-slate-50 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200">{{ role }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- INDUSTRIES -->
  <section class="py-16 px-6 lg:px-20 bg-white">
    <div class="max-w-5xl mx-auto">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Industries in Focus</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-4">Built for Forward-Thinking Industries</h2>
      <p class="text-slate-500 mb-8">
        This conference is designed for organisations looking to modernise operations, improve efficiency, and accelerate enterprise transformation initiatives.
      </p>
      <div class="flex flex-wrap gap-3">
        <span *ngFor="let ind of industries" class="bg-slate-50 text-slate-700 text-sm font-bold px-4 py-2 rounded-xl border border-slate-200">{{ ind }}</span>
      </div>
    </div>
  </section>

  <!-- EXPERTS -->
  <section class="py-16 px-6 lg:px-20 bg-slate-50">
    <div class="max-w-5xl mx-auto text-center">
      <span class="text-blue-600 font-black tracking-widest text-xs uppercase">Meet Experts</span>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-4">Meet Industry Experts & Technology Specialists</h2>
      <p class="text-slate-500 max-w-3xl mx-auto">
        Engage directly with experienced consultants, technology architects, and business transformation specialists. Discuss your organisation’s goals, challenges, and future technology roadmap in a focused roundtable environment.
      </p>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="relative overflow-hidden py-20 px-6 lg:px-20 bg-[#0b1530]">
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/15 rounded-full blur-[90px]"></div>

    <div class="relative max-w-3xl mx-auto text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-black text-white">Reserve Your Seat</h2>
      <p class="text-slate-300 mt-3">
        Attendance is by invitation only. Submit your details and our team will review your registration and confirm your participation.
      </p>
      <p class="text-slate-400 mt-3">
        Join senior business and technology leaders for a day of practical insights, meaningful conversations, and enterprise innovation.
      </p>
    </div>

    <div class="relative">
      <ng-container *ngTemplateOutlet="registrationForm"></ng-container>
    </div>
  </section>

</div>

<!-- REGISTRATION FORM -->
<ng-template #registrationForm>
  <div class="max-w-xl mx-auto">

    <div *ngIf="submitted" class="bg-white rounded-3xl p-10 text-center shadow-xl">
      <svg class="w-14 h-14 text-green-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <h3 class="text-xl font-black text-slate-900 mb-1">Registration Submitted!</h3>
      <p class="text-slate-500 text-sm">We'll be in touch soon.</p>
    </div>

    <form *ngIf="!submitted" (ngSubmit)="onSubmit()" class="bg-white rounded-3xl p-8 shadow-xl space-y-4">
      <div class="mb-2">
        <span class="text-blue-600 font-black tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-md">Invitation Only</span>
        <h3 class="text-2xl font-black text-slate-900 mt-3">Request Your Invitation Today</h3>
        <p class="text-slate-500 text-sm mt-1">Submit your details and our team will review your registration.</p>
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
  private ngZone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  private emailApi = 'https://email.nowarainfotech.co/api/email/send';
  private powerAutomateUrl =
  'https://default17be3ff79c23478ab4799e1439af95.8f.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/18/workflows/c4e9a45d65634b18af63fa745d0fd78a/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=g-jRWyiht4Nd7Mw3w5rSbM8n5MAg073qUSC3SaOf0Bk'; 
  companyName = '';
  guestName = '';
  businessEmail = '';
  mobile = '';
  // altMobile = '';
  guestCount = '';
  loading = false;
  submitted = false;

  ngOnInit() {
    this.seo.update({
      title: 'Nowara CXO Roundtable Conference 2026 | Dynamics 365 Business Central',
      description: 'Join Nowara Infotech at the CXO Roundtable Conference 2026 in Hyderabad. Explore AI-driven automation, advanced finance, supply chain flexibility, cloud, ERP, and Dynamics 365 Business Central.',
      keywords: 'Nowara CXO Roundtable Conference 2026, Dynamics 365 Business Central event, AI automation event Hyderabad, ERP conference Hyderabad, CXO event 2026',
    }, 'CXO-Roundtable-Conference-2026');
  }

  scrollToForm() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToAgenda() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit() {
    this.loading = true;

    const bodyHtml = `
      <p><strong>Company Name:</strong> ${this.companyName}</p>
      <p><strong>Guest Name:</strong> ${this.guestName}</p>
      <p><strong>Business Email:</strong> ${this.businessEmail}</p>
      <p><strong>Mobile Number:</strong> ${this.mobile}</p>
      <p><strong>Number of Guests:</strong> ${this.guestCount}</p>
    `.trim();

    const fd = new FormData();
    fd.append('to', 'nitesh@exogenoustechnology.com');
    fd.append('cc', 'rahul@nowarainfotech.com');
    fd.append('subject', `CXO Roundtable Conference 2026 Registration - ${this.companyName}`);
    fd.append('body', bodyHtml);
    fd.append('isHtml', 'true');
    const ticketId =
    `NOWARA-CXO-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // const attendeeEmailHtml = `
    // <div style="font-family:Arial,sans-serif;background:#f4f7fb;padding:30px;">
    //   <div style="max-width:650px;margin:auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">
        
    //     <div style="background:#0b1530;color:white;padding:28px;text-align:center;">
    //       <h2 style="margin:0;font-size:24px;">Nowara CXO Roundtable Conference 2026</h2>
    //       <p style="margin:8px 0 0;color:#cbd5e1;">Registration Confirmation</p>
    //     </div>

    //     <div style="padding:30px;">
    //       <h2 style="color:#0f172a;margin-top:0;">Thank you for registering, ${this.guestName}!</h2>
    //       <p style="color:#475569;font-size:15px;line-height:1.6;">
    //         We have received your registration for the Nowara CXO Roundtable Conference 2026.
    //         Our team will review your request and confirm your participation shortly.
    //       </p>

    //       <div style="border:2px dashed #2563eb;border-radius:16px;padding:22px;margin:25px 0;background:#eff6ff;">
    //         <p style="margin:0 0 10px;color:#2563eb;font-weight:bold;letter-spacing:1px;">REGISTRATION TICKET</p>
    //         <h3 style="margin:0 0 18px;color:#0f172a;">Ticket ID: ${ticketId}</h3>

    //         <p><strong>Guest Name:</strong> ${this.guestName}</p>
    //         <p><strong>Company:</strong> ${this.companyName}</p>
    //         <p><strong>Email:</strong> ${this.businessEmail}</p>
    //         <p><strong>Number of Guests:</strong> ${this.guestCount}</p>
    //         <p><strong>Date:</strong> Friday, 7 August 2026</p>
    //         <p><strong>Time:</strong> 07:00 PM – 11:00 PM</p>
    //         <p><strong>Venue:</strong> Hotel Lemon Tree Banjara Hills, Hyderabad, India</p>
    //       </div>

    //       <p style="color:#475569;font-size:15px;line-height:1.6;">
    //         We look forward to welcoming you for an evening of networking, enterprise technology discussions,
    //         AI innovation, and meaningful business conversations.
    //       </p>

    //       <h3 style="color:#0f172a;">See you soon in Hyderabad!</h3>

    //       <p style="color:#64748b;font-size:14px;">
    //         Regards,<br/>
    //         <strong>Nowara Infotech</strong>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    // `.trim();

    this.ngZone.runOutsideAngular(() => {
      // Send Email
      fetch(this.emailApi, {
        method: 'POST',
        body: fd,
        mode: 'no-cors'
      }).catch(err => console.error('Email Error:', err));

      // Save to Excel
      const excelData = {
        ticketId: ticketId,
        companyName: this.companyName,
        guestName: this.guestName,
        businessEmail: this.businessEmail,
        mobile: this.mobile,
        guestCount: String(this.guestCount),
        date: new Date().toLocaleDateString('en-IN'),
        time: new Date().toLocaleTimeString('en-IN')
      };
      // const attendeeFd = new FormData();
      // attendeeFd.append('to', this.businessEmail);
      // // attendeeFd.append('cc', 'gopal@nowarainfotech.com');
      // attendeeFd.append('subject', `Your Registration Ticket - ${ticketId}`);
      // attendeeFd.append('body', attendeeEmailHtml);
      // attendeeFd.append('isHtml', 'true');

      // fetch(this.emailApi, {
      //   method: 'POST',
      //   body: attendeeFd,
      //   mode: 'no-cors'
      // }).catch(err => console.error('Attendee Email Error:', err));
      fetch(this.powerAutomateUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(excelData)
      }).catch(err => console.error('Power Automate Error:', err));
    });

    setTimeout(() => {
      this.ngZone.run(() => {
        this.loading = false;
        this.router.navigate(['/thank-you'], { queryParams: { for: 'CXO-Roundtable-Conference-2026' } });
      });
    }, 300);
  }

  benefits = [
    'AI-driven automation and innovation sessions',
    'Live enterprise solution demonstrations',
    'Dynamics 365 Business Central insights',
    'Real-world customer success stories',
    'Expert panel discussions',
    'One-on-one consultation with technology specialists',
    'Strategic networking with business and IT leaders',
    'Technology roadmap planning',
  ];

  stats = [
    { value: '50+', label: 'CXO & IT Leaders' },
    { value: '15+', label: 'Enterprise Discussions' },
    { value: '10+', label: 'Industry Experts' },
    { value: '1 Day', label: 'Strategic Networking' },
  ];

  agenda = [
    {
      time: '07:00 PM',
      title: 'Registration & Welcome Networking',
      desc: 'Connect with fellow CXOs, technology leaders, and industry experts over refreshments.',
      bg: 'bg-amber-50',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#d97706" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>'
    },
    {
      time: '07:30 PM',
      title: 'Welcome Address by Nowara Infotech',
      desc: "Opening remarks and an overview of the evening's agenda.",
      bg: 'bg-blue-50',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l9.586-9.586z"/></svg>'
    },
    {
      time: '07:45 PM',
      title: 'Keynote: AI, Cloud & Enterprise Transformation',
      desc: 'Explore how AI, cloud, and modern ERP are transforming business operations and decision-making.',
      bg: 'bg-orange-50',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#ea580c" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
    },
    {
      time: '08:15 PM',
      title: 'Live Microsoft Dynamics 365 Business Central Demonstration',
      desc: 'Experience AI-powered ERP capabilities, finance automation, and supply chain solutions in action.',
      bg: 'bg-emerald-50',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#059669" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>'
    },
    {
      time: '08:45 PM',
      title: 'Customer Success Stories',
      desc: 'Learn from real-world digital transformation journeys and business outcomes.',
      bg: 'bg-purple-50',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#7c3aed" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l3.586-3.586z"/></svg>'
    },
    {
      time: '09:10 PM',
      title: 'CXO Roundtable & Expert Panel Discussion',
      desc: 'Discuss AI adoption, ERP modernization, finance transformation, supply chain agility, and future technology trends.',
      bg: 'bg-indigo-50',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#4f46e5" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'
    },
    {
      time: '09:50 PM',
      title: 'Networking Dinner & One-on-One Discussions',
      desc: 'Engage with Microsoft, Redington, Nowara experts, and fellow business leaders while enjoying dinner.',
      bg: 'bg-rose-50',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#e11d48" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 2v8M7 2v4a2 2 0 004 0V2m0 0v8m6-8v20M19 2c-1.5 0-3 1.5-3 4v4h3"/></svg>'
    },
    {
      time: '10:50 PM',
      title: 'Closing Remarks',
      desc: 'Thank attendees, share key takeaways, and explore future collaboration opportunities.',
      bg: 'bg-blue-50',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l9.586-9.586z"/></svg>'
    },
    {
      time: '11:00 PM',
      title: 'Event Concludes',
      desc: 'End of the Nowara CXO Roundtable Conference 2026.',
      bg: 'bg-gray-50',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#64748b" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>'
    }
  ];

  priorityRoles = [
    'CEO',
    'CTO',
    'CIO',
    'CXO',
    'VP IT',
    'IT Director',
    'Head of IT',
    'Technology Head',
    'Technology Director',
  ];

  welcomeRoles = [
    'Digital Transformation Leader',
    'Enterprise Applications Head',
    'Cloud Leader',
    'ERP Program Manager',
    'Business Technology Leader',
    'Finance Transformation Leader',
    'Supply Chain Leader',
    'Innovation Manager',
    'Infrastructure Manager',
    'IT Operations Manager',
  ];

  industries = ['Manufacturing', 'Retail', 'Pharma'];
}