import { Component, OnInit, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SeoService } from '../../../services/seo.service';

interface Blog {
  id: string;
  title: string;
  image?: string;
  content: string;
}

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [NgIf, RouterLink],
  template: `
<div class="min-h-screen bg-white">
  <!-- LOADING -->
  <div *ngIf="loading" class="flex items-center justify-center min-h-screen">
    <div class="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>

  <!-- ERROR -->
  <div *ngIf="!loading && !blog" class="text-center py-32 px-6">
    <h2 class="text-3xl font-black text-slate-900 mb-4">Blog Not Found</h2>
    <a routerLink="/blogs" class="text-primary font-bold hover:underline">← Back to Blogs</a>
  </div>

  <!-- ARTICLE -->
  <article *ngIf="!loading && blog" class="max-w-4xl mx-auto px-6 py-12">
    <div class="mb-8">
      <a routerLink="/blogs" class="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-medium text-sm transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12"/></svg>
        Back to Blogs
      </a>
      <h1 class="text-4xl md:text-5xl font-black text-slate-900 leading-tight mt-6 mb-8">{{blog.title}}</h1>
      <div *ngIf="blog.image" class="rounded-[2rem] overflow-hidden mb-10 h-72 md:h-96">
        <img [src]="blog.image" [alt]="blog.title" class="w-full h-full object-cover"/>
      </div>
    </div>
    <div class="prose prose-lg max-w-none text-slate-700 leading-relaxed" [innerHTML]="safeContent"></div>
  </article>
</div>
  `,
})
export class BlogDetailComponent implements OnInit {
  private seo = inject(SeoService);
  blog: Blog | null = null;
  loading = true;
  safeContent: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.http.get<any>('https://nowarainfotech.co/blog_api.php?action=get_all').subscribe({
      next: (data) => {
        if (data.status) {
          this.blog = data.data.find((b: Blog) => b.id === slug) || null;
          if (this.blog) {
            this.safeContent = this.sanitizer.bypassSecurityTrustHtml(this.blog.content);
            this.seo.setPage(`${this.blog.title} | Nowara Infotech`, this.blog.content.replace(/<[^>]*>/g, '').slice(0, 160));
          }
        }
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }
}
