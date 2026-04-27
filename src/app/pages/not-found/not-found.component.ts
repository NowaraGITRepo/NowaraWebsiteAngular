import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
<div class="min-h-screen bg-white flex items-center justify-center px-6">
  <div class="text-center max-w-2xl">
    <div class="relative mb-8">
      <h1 class="text-[12rem] font-black text-slate-100 leading-none select-none">404</h1>
      <div class="absolute inset-0 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="#86a4da" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </div>
    <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-4">Page Not Found</h2>
    <p class="text-xl text-slate-500 mb-10 leading-relaxed">
      The page you're looking for doesn't exist or has been moved. Let's get you back on track.
    </p>
    <div class="flex flex-wrap gap-4 justify-center">
      <a routerLink="/" class="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary transition-colors shadow-lg shadow-primary/30">
        Go Home
      </a>
      <a routerLink="/contact-us" class="bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-colors">
        Contact Us
      </a>
    </div>
  </div>
</div>
  `,
})
export class NotFoundComponent {}
