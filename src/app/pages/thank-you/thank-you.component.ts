import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface ThankYouContent {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  badge: string;       // pill label above heading
  emoji: string;       // top emoji
  heading: string;
  subheading: string;
  detailLine: string;
  pillText: string;    // bottom confirmation pill (optional)
  backLink: string;
  backLabel: string;
}

const THANK_YOU_CONTENT: Record<string, ThankYouContent> = {
  'contact': {
    metaTitle: 'Thank You | Nowara Infotech',
    metaDescription: 'Thank you for reaching out to Nowara Infotech. Our team will respond within 24 business hours.',
    metaKeywords: 'Nowara Infotech contact thank you',
    badge: 'Message Received',
    emoji: '🙌',
    heading: 'Thank You for Reaching Out!',
    subheading: 'Your message has been received by our team.',
    detailLine: 'We typically respond within 24 business hours — watch your inbox 📩',
    pillText: "We'll be in touch soon",
    backLink: '/contact-us',
    backLabel: 'Back to Contact',
  },
  'career': {
    metaTitle: 'Application Received | Nowara Infotech Careers',
    metaDescription: 'Your job application has been received by Nowara Infotech. Our HR team will review and respond shortly.',
    metaKeywords: 'Nowara Infotech careers application received',
    badge: 'Application Submitted',
    emoji: '🎯',
    heading: 'Application Submitted!',
    subheading: "We've received your application and resume.",
    detailLine: 'Our HR team will review your profile and reach out if there\'s a match.',
    pillText: "We'll be in touch",
    backLink: '/career',
    backLabel: 'Back to Careers',
  },
  'summit-2026': {
    metaTitle: 'Thank You | Manufacturing Leadership Summit 2026',
    metaDescription: 'Your invitation request for the Manufacturing Leadership Summit 2026 has been received.',
    metaKeywords: 'Manufacturing Leadership Summit 2026 thank you, Nowara Infotech summit confirmation',
    badge: 'Invitation Requested',
    emoji: '🎊',
    heading: "Congratulations, You're In!",
    subheading: 'Thank you for requesting your invitation to the Manufacturing Leadership Summit 2026.',
    detailLine: 'Our team will confirm your eligibility within 24 hours — keep an eye on your inbox 📩',
    pillText: 'See you in Hyderabad on 31 July 🏙️',
    backLink: '/summit-2026',
    backLabel: 'Back to event details',
  },
};

const DEFAULT_CONTENT: ThankYouContent = {
  metaTitle: 'Thank You | Nowara Infotech',
  metaDescription: 'Thank you for reaching out to Nowara Infotech. Our team will be in touch shortly.',
  metaKeywords: 'Nowara Infotech thank you',
  badge: 'Request Received',
  emoji: '🎉',
  heading: 'Thank You!',
  subheading: 'We have received your request.',
  detailLine: 'Our team will get back to you shortly.',
  pillText: '',
  backLink: '/',
  backLabel: 'Back to home',
};

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
<div class="min-h-screen bg-[#0b1530] flex items-center justify-center px-6 py-20 relative overflow-hidden">

  <!-- Background glows -->
  <div class="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/15 rounded-full blur-[90px] pointer-events-none"></div>

  <div class="relative max-w-xl w-full bg-white rounded-3xl p-10 text-center shadow-2xl">

    <!-- Emoji -->
    <div class="text-6xl mb-5 leading-none select-none">{{ content.emoji }}</div>

    <!-- Badge -->
    <span class="inline-block text-blue-600 font-black tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-md">
      {{ content.badge }}
    </span>

    <!-- Heading -->
    <h1 class="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-3 leading-tight">
      {{ content.heading }}
    </h1>

    <!-- Subheading -->
    <p class="text-slate-500 font-medium leading-relaxed">{{ content.subheading }}</p>

    <!-- Detail line -->
    <p class="text-slate-400 text-sm font-medium mt-2">{{ content.detailLine }}</p>

    <!-- Confirmation pill (optional) -->
    <div *ngIf="content.pillText"
      class="mt-6 inline-flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"
        viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
      </svg>
      {{ content.pillText }}
    </div>

    <!-- Divider -->
    <div class="mt-8 mb-6 border-t border-slate-100"></div>

    <!-- Back link -->
    <a [routerLink]="content.backLink"
      class="text-slate-400 text-sm font-bold hover:text-slate-600 transition-colors inline-flex items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
      {{ content.backLabel }}
    </a>

  </div>
</div>
  `,
})
export class ThankYouComponent implements OnInit {
  private seo = inject(SeoService);
  private route = inject(ActivatedRoute);

  content: ThankYouContent = DEFAULT_CONTENT;

  ngOnInit() {
    // Scroll to top — user may have been mid-page before navigating here
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'instant' });

    const slug = this.route.snapshot.queryParamMap.get('for') ?? '';

    // Reject unknown slugs gracefully — fall to DEFAULT
    this.content = THANK_YOU_CONTENT[slug] ?? DEFAULT_CONTENT;

    this.seo.update({
      title: this.content.metaTitle,
      description: this.content.metaDescription,
      keywords: this.content.metaKeywords,
      // noindex: thank-you pages must never appear in search results
      robots: 'noindex, nofollow',
    }, `thank-you-${slug || 'default'}`);
  }
}