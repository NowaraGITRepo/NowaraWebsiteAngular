import { Component, OnInit, HostListener, inject } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SeoService } from '../../../services/seo.service';

interface Blog {
  id: string;
  heading: string;
  subheading: string;
  page_name: string;
  image?: string;
  description: string;
  creation_date: string;

  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;

  og_title?: string;
  og_description?: string;
  og_image?: string;

  twitter_title?: string;
  twitter_description?: string;
}

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink],
  template: `
<div class="min-h-screen bg-[#FAF5EE]">

  <div class="fixed top-0 left-0 right-0 h-[3px] bg-[#ECE3D6] z-50">
    <div class="h-full bg-[#A6742E] transition-[width] duration-150 ease-out"
         [style.width.%]="readProgress"></div>
  </div>

  <div *ngIf="loading" class="max-w-4xl mx-auto px-6 py-12 animate-pulse">
    <div class="h-4 w-28 bg-[#ECE3D6] rounded mb-8"></div>
    <div class="h-64 md:h-80 bg-[#ECE3D6] rounded-2xl mb-6"></div>
    <div class="h-3 w-32 bg-[#ECE3D6] rounded mb-4"></div>
    <div class="h-9 w-3/4 bg-[#ECE3D6] rounded mb-3"></div>
    <div class="h-9 w-1/2 bg-[#ECE3D6] rounded mb-8"></div>
    <div class="space-y-3">
      <div class="h-3 bg-[#ECE3D6] rounded"></div>
      <div class="h-3 bg-[#ECE3D6] rounded"></div>
      <div class="h-3 w-5/6 bg-[#ECE3D6] rounded"></div>
    </div>
  </div>

  <div *ngIf="!loading && !blog" class="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
    <h2 class="text-2xl md:text-3xl font-semibold text-[#2A211A] mb-2">We couldn't find that article</h2>
    <p class="text-[#6B5D4F] mb-7 max-w-sm">
      It may have been moved, renamed, or unpublished. Head back to the blog index to keep reading.
    </p>
    <a routerLink="/blogs"
       class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2A211A] text-[#FAF5EE] font-medium hover:bg-[#A6742E] transition-colors">
      ← Back to Blogs
    </a>
  </div>

  <article *ngIf="!loading && blog" class="max-w-4xl mx-auto px-6 pb-20">

    <a routerLink="/blogs"
       class="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B5D4F] hover:text-[#A6742E] transition-colors pt-8 pb-6">
      ← Back to Blogs
    </a>

    <div *ngIf="blog.image"
         class="rounded-2xl bg-[#F1E9DC] border border-[#ECE3D6] p-6 md:p-10 flex items-center justify-center h-64 md:h-80">
      <img [src]="blog.image" [alt]="blog.heading" class="max-h-full max-w-full object-contain"/>
    </div>

    <div [ngClass]="blog.image ? 'mt-6' : 'mt-2'"
         class="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(42,33,26,0.12)] px-6 md:px-12 py-8 md:py-12">

      <div class="flex items-center gap-3 mb-5 font-mono text-xs uppercase tracking-wide text-[#A6742E]">
        <span>{{ formattedDate }}</span>
        <span class="text-[#ECE3D6]">/</span>
        <span>{{ readingTime }} min read</span>
      </div>

      <h1 class="text-3xl md:text-[2.75rem] font-serif font-semibold text-[#2A211A] leading-[1.15] mb-4">
        {{ blog.heading }}
      </h1>

      <p *ngIf="blog.subheading" class="text-lg text-[#6B5D4F] leading-relaxed mb-8 max-w-2xl">
        {{ blog.subheading }}
      </p>

      <div class="h-px bg-[#ECE3D6] mb-8"></div>

      <div class="article-content text-[#2A211A]" [innerHTML]="safeContent"></div>
    </div>

    <div class="flex justify-center mt-12">
      <a routerLink="/blogs"
         class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#ECE3D6] text-[#2A211A] font-medium hover:border-[#A6742E] hover:text-[#A6742E] transition-colors">
        ← Browse more articles
      </a>
    </div>

  </article>
</div>
  `,
  styles: [`
    :host ::ng-deep .article-content {
      font-size: 1.0625rem;
      line-height: 1.8;
    }
    :host ::ng-deep .article-content p { margin-bottom: 1.5rem; }
    :host ::ng-deep .article-content h2 {
      font-family: ui-serif, Georgia, Cambria, serif;
      font-size: 1.75rem;
      font-weight: 600;
      color: #2A211A;
      margin: 2.5rem 0 1rem;
    }
    :host ::ng-deep .article-content h3 {
      font-size: 1.375rem;
      font-weight: 600;
      color: #2A211A;
      margin: 2rem 0 0.75rem;
    }
    :host ::ng-deep .article-content a {
      color: #A6742E;
      text-decoration: underline;
      text-decoration-color: #ECE3D6;
      text-underline-offset: 3px;
    }
    :host ::ng-deep .article-content a:hover { color: #7C4F18; }
    :host ::ng-deep .article-content blockquote {
      border-left: 3px solid #A6742E;
      padding-left: 1.25rem;
      margin: 2rem 0;
      font-style: italic;
      color: #6B5D4F;
    }
    :host ::ng-deep .article-content code {
      background: #FAF5EE;
      color: #7C4F18;
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-size: 0.9em;
    }
    :host ::ng-deep .article-content pre {
      background: #2A211A;
      color: #FAF5EE;
      padding: 1.25rem;
      border-radius: 12px;
      overflow-x: auto;
      margin: 1.5rem 0;
    }
    :host ::ng-deep .article-content pre code {
      background: transparent;
      color: inherit;
      padding: 0;
    }
    :host ::ng-deep .article-content img {
      border-radius: 12px;
      margin: 2rem 0;
      max-width: 100%;
    }
    :host ::ng-deep .article-content ul,
    :host ::ng-deep .article-content ol {
      margin: 1.5rem 0;
      padding-left: 1.5rem;
    }
    :host ::ng-deep .article-content li { margin-bottom: 0.5rem; }
    :host ::ng-deep .article-content li::marker { color: #A6742E; }
  `],
})
export class BlogDetailComponent implements OnInit {
  private seo = inject(SeoService);

  blog: Blog | null = null;
  loading = true;
  safeContent: SafeHtml = '';
  readingTime = 1;
  readProgress = 0;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  get formattedDate(): string {
    const raw = this.blog?.creation_date || '';
    const d = new Date(raw);

    return isNaN(d.getTime())
      ? raw
      : d.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    this.readProgress = docHeight > 0
      ? Math.min(100, (scrollTop / docHeight) * 100)
      : 0;
  }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug) {
      this.loading = false;
      return;
    }

    const encodedSlug = encodeURIComponent(slug);

    this.http.get<any>(
      `https://nowarainfotech.co/blog_api.php?action=get_by_page&page_name=${encodedSlug}&t=${Date.now()}`
    ).subscribe({
      next: (res) => {
        if (res.status && res.data) {
          this.blog = res.data;

          this.safeContent = this.sanitizer.bypassSecurityTrustHtml(
            this.blog?.description || ''
          );

          const plainText = (this.blog?.description || '')
            .replace(/<[^>]*>/g, '')
            .replace(/\s+/g, ' ')
            .trim();

          const wordCount = plainText.split(/\s+/).filter(Boolean).length;
          this.readingTime = Math.max(1, Math.round(wordCount / 200));

          this.setBlogSeo(plainText);
        }

        this.loading = false;
      },
      error: (err) => {
        console.log('Blog detail API error:', err);
        this.loading = false;
      }
    });
  }

  private setBlogSeo(plainText: string) {
    if (!this.blog) return;

    const title =
      this.blog.meta_title?.trim() ||
      `${this.blog.heading} | Nowara Infotech`;

    const description =
      this.blog.meta_description?.trim() ||
      this.blog.subheading?.trim() ||
      plainText.slice(0, 160);

    this.seo.setPage(title, description,this.blog.meta_keywords || '');
  }
}