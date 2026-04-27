import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ContactFormComponent } from '../../../components/shared/contact-form/contact-form.component';

@Component({
  selector: 'app-apps-dev',
  standalone: true,
  imports: [ContactFormComponent, NgFor],
  template: `
<div class="min-h-screen bg-[#020617] text-slate-300">
  <!-- GRID BACKGROUND -->
  <div class="fixed inset-0 z-0 opacity-20 pointer-events-none"
       style="background-image: linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px); background-size: 50px 50px;"></div>

  <!-- HERO -->
  <section class="relative min-h-screen flex items-center px-6 lg:px-20 max-w-7xl mx-auto z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full pt-20">
      <div class="lg:col-span-7 space-y-8">
        <div class="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-sm backdrop-blur-md">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span class="text-[10px] font-mono tracking-[0.2em] uppercase text-cyan-400">Deploying Version 4.0.2</span>
        </div>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
          ENGINEERED <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EXPERIENCES.</span>
        </h1>
        <p class="text-lg text-slate-400 max-w-xl font-light leading-relaxed border-l-2 border-slate-800 pl-6">
          Beyond simple development. We architect <span class="text-white font-medium">high-throughput digital ecosystems</span> using low-latency infrastructures and intuitive interface logic.
        </p>
        <div class="flex flex-wrap gap-4 pt-4">
          <button (click)="scrollTo('contact-form-section')" class="group relative px-8 py-4 bg-cyan-500 text-slate-950 font-bold overflow-hidden transition-all hover:bg-white">
            INITIATE STACK
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="inline ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </button>
        </div>
      </div>
      <!-- BENTO STATS -->
      <div class="lg:col-span-5 grid grid-cols-2 gap-4">
        <div *ngFor="let stat of stats" [class]="'rounded-3xl p-6 flex flex-col justify-between border ' + stat.style">
          <div [innerHTML]="stat.icon"></div>
          <div class="mt-4">
            <p class="text-2xl font-black" [class]="stat.valColor">{{stat.val}}</p>
            <p class="text-xs text-slate-500 font-mono mt-1">{{stat.label}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CAPABILITIES -->
  <section class="py-24 px-6 lg:px-20 max-w-7xl mx-auto relative z-10">
    <div class="mb-16">
      <span class="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase block mb-4">Core Capabilities</span>
      <h2 class="text-4xl md:text-6xl font-bold text-white">What We <span class="text-cyan-400">Build</span></h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div *ngFor="let cap of capabilities" class="group bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all cursor-pointer">
        <div class="flex items-start gap-6">
          <div class="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 flex-shrink-0" [innerHTML]="cap.icon"></div>
          <div>
            <h3 class="text-white font-bold text-xl mb-1">{{cap.name}}</h3>
            <p class="text-slate-500 text-xs font-mono mb-3">{{cap.desc}}</p>
            <p class="text-slate-400 text-sm leading-relaxed">{{cap.fullContent}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TECH STACK -->
  <section class="py-16 bg-slate-900/50 border-y border-slate-800 px-6 lg:px-20 relative z-10">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-white mb-12 text-center">Our <span class="text-cyan-400">Tech Stack</span></h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div *ngFor="let tech of techStack" class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all">
          <p class="text-white font-bold mb-1">{{tech.name}}</p>
          <p class="text-slate-500 text-xs font-mono">{{tech.category}}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact-form-section" class="py-24 px-6 lg:px-20 relative z-10">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span class="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase block mb-6">Initiate Contact</span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Ready to <span class="text-cyan-400">Build?</span></h2>
          <p class="text-slate-400 leading-relaxed">Tell us about your project and we'll design the architecture that scales with your ambitions.</p>
        </div>
        <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8">
          <app-contact-form></app-contact-form>
        </div>
      </div>
    </div>
  </section>
</div>
  `,
})
export class AppsDevComponent {
  stats = [
    { val: '99.9%', label: 'Uptime SLA', valColor: 'text-cyan-400', style: 'bg-slate-900 border-slate-800', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#22d3ee" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' },
    { val: '100ms', label: 'Avg Response Time', valColor: 'text-white', style: 'bg-cyan-500 border-cyan-400', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
    { val: '50+', label: 'Projects Delivered', valColor: 'text-white', style: 'bg-slate-800 border-slate-700', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' },
    { val: 'Type-Safe', label: 'Full-Stack Dev', valColor: 'text-cyan-400', style: 'bg-slate-900 border-slate-800', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#22d3ee" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
  ];
  capabilities = [
    { name: 'Architecture', desc: 'Microservices & Event-Driven', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/></svg>', fullContent: 'Our architecture focus utilizes event-driven microservices to ensure system resilience. We implement high-availability clusters and distributed caching for sub-100ms response times globally.' },
    { name: 'Full-Stack', desc: 'Type-Safe Development', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>', fullContent: 'We maintain 100% type safety across the entire stack using TypeScript and Rust. This eliminates runtime errors and creates a self-documenting codebase that scales with your team.' },
    { name: 'Cloud Native', desc: 'AWS / Azure / GCP Hosting', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>', fullContent: 'Serverless-first approach with automated CI/CD pipelines. We specialize in Kubernetes orchestration and infrastructure-as-code (Terraform) to ensure your environment is reproducible.' },
    { name: 'Intelligence', desc: 'LLM & Agentic Integration', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', fullContent: 'Integrating vector databases (Pinecone/Milvus) and custom RAG pipelines. We build agentic workflows that allow your application to reason and execute complex tasks autonomously.' },
  ];
  techStack = [
    { name: 'Angular / Next.js', category: 'Frontend' },
    { name: 'Node.js / NestJS', category: 'Backend' },
    { name: 'PostgreSQL / MongoDB', category: 'Database' },
    { name: 'AWS / Azure / GCP', category: 'Cloud' },
    { name: 'Docker / Kubernetes', category: 'DevOps' },
    { name: 'TypeScript / Rust', category: 'Languages' },
    { name: 'Terraform / Pulumi', category: 'IaC' },
    { name: 'GPT-4 / Claude API', category: 'AI/LLM' },
  ];
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
