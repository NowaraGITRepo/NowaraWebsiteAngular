import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SEO } from '../../data/seo-data';
import { ContactFormComponent } from '../../components/shared/contact-form/contact-form.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [ContactFormComponent],
  template: `
<div class="min-h-screen bg-white">
  <!-- HERO -->
  <section class="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
    <img src="/images/company-profile/about-1.webp" alt="Career at Nowara" class="absolute inset-0 w-full h-full object-cover"/>
    <div class="absolute inset-0 bg-slate-900/70"></div>
    <div class="relative z-10 text-center px-6">
      <h1 class="text-5xl md:text-7xl font-black text-white mb-4">Join Our Visionary Team</h1>
      <p class="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto">Shape the future of technology with Nowara Infotech.</p>
    </div>
  </section>

  <!-- MAIN LAYOUT -->
  <div class="max-w-7xl mx-auto px-6 lg:px-20 py-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- LEFT SIDE: INFO -->
      <div class="space-y-8">
        <span class="inline-block px-4 py-1.5 text-xs font-black tracking-widest text-blue-600 uppercase bg-blue-50 rounded-lg">Careers</span>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          Grow Beyond <br/> Boundaries
        </h2>
        <p class="text-lg text-slate-500 leading-relaxed">
          At Nowara Infotech, we embrace a dynamic, team-driven approach that prioritizes results. Our company and our team members share a limitless potential for growth.
        </p>
        <div class="bg-blue-50 rounded-2xl p-6 flex items-start gap-4">
          <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Direct Inquiries</p>
            <a href="mailto:hr@nowarainfotech.com" class="text-blue-600 font-bold text-lg hover:underline">hr@nowarainfotech.com</a>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-slate-900">Why Join Nowara?</h3>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-slate-600">
              <div class="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>Work with Microsoft Gold Partner technologies
            </li>
            <li class="flex items-center gap-3 text-slate-600">
              <div class="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>Global exposure with clients in 30+ countries
            </li>
            <li class="flex items-center gap-3 text-slate-600">
              <div class="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>Continuous learning and certification support
            </li>
            <li class="flex items-center gap-3 text-slate-600">
              <div class="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>Hybrid work culture and flexible hours
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT SIDE: FORM -->
      <div class="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl">
        <div class="mb-8">
          <h3 class="text-2xl font-black text-slate-900 mb-2">Apply Now</h3>
          <p class="text-slate-500">Fill out the form below and our HR team will get back to you.</p>
        </div>
        <app-contact-form [isCareerPage]="true"></app-contact-form>
      </div>
    </div>
  </div>
</div>
  `,
})
export class CareerComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage(SEO.career.title, SEO.career.description); }}
