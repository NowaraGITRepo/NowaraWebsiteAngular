import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

interface Blog {
  id: string;
  heading: string;
  subheading: string;
  page_name: string;
  image?: string;
  creation_date: string;
  created_at?: string;
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [NgFor, NgIf],
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Inter:wght@400;500;600;700&display=swap');

    :host { display: block; }

    .page { background: #F8F5F0; font-family: 'Inter', sans-serif; min-height: 100vh; }

    /* Header */
    .page-header {
      background: #f5ead7;
      border-bottom: 1px solid #E5DDD2;
      padding: 64px 32px 52px;
      text-align: center;
    }
    .eyebrow {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #9A8C7A;
      margin-bottom: 18px;
    }
    .page-title {
      font-family: 'Merriweather', Georgia, serif;
      font-size: clamp(28px, 4vw, 44px);
      font-weight: 700;
      color: #18150F;
      line-height: 1.2;
      margin: 0 0 14px;
    }
    .page-sub {
      font-size: 15px;
      color: #7A6E60;
      line-height: 1.7;
      max-width: 520px;
      margin: 0 auto;
    }

    /* Content */
    .content {
      max-width: 1160px;
      margin: 0 auto;
      padding: 52px 32px 72px;
    }

    /* States */
    .state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 80px 0;
      gap: 14px;
    }
    .spinner {
      width: 32px; height: 32px;
      border: 2px solid #DDD5CA;
      border-top-color: #4A6B4A;
      border-radius: 50%;
      animation: spin 0.75s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .state-text { font-size: 14px; color: #7A6E60; }

    /* Grid */
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    /* Card */
    .card {
      background: #FFFFFF;
      border: 1px solid #E5DDD2;
      border-radius: 4px;
      overflow: hidden;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
      cursor: pointer;
    }
    .card:hover {
      box-shadow: 0 6px 24px rgba(0,0,0,0.08);
      transform: translateY(-2px);
    }
    .card-img {
      height: 192px;
      background: #EDE8E0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .card-img img {
      width: 100%; height: 100%;
      object-fit: contain;
      padding: 12px;
    }
    .img-placeholder {
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: 8px;
      color: #C0B4A5;
    }
    .img-placeholder span {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* Card body */
    .card-body { padding: 22px 22px 20px; }
    .card-cat {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.13em;
      text-transform: uppercase;
      color: #4A6B4A;
      margin-bottom: 10px;
    }
    .card-title {
      font-family: 'Merriweather', Georgia, serif;
      font-size: 16px;
      font-weight: 700;
      color: #18150F;
      line-height: 1.4;
      margin: 0 0 9px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card-sub {
      font-size: 13px;
      color: #7A6E60;
      line-height: 1.65;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin: 0 0 18px;
    }
    .card-divider { height: 1px; background: #F0EAE1; margin-bottom: 16px; }
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .author { display: flex; align-items: center; gap: 10px; }
    .avatar {
      width: 30px; height: 30px;
      border-radius: 50%;
      background: #2C4A2C;
      color: #C8E0C8;
      font-size: 12px;
      font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .author-name { font-size: 11.5px; font-weight: 700; color: #2E2820; }
    .author-date { font-size: 11px; color: #A89880; margin-top: 1px; }

    .read-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #2C4A2C;
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
      position: relative;
    }
    .read-btn::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #2C4A2C;
      transform: scaleX(0.35);
      transform-origin: left;
      transition: transform 0.25s ease;
    }
    .card:hover .read-btn::after { transform: scaleX(1); }
    .read-btn .btn-arrow {
      display: inline-flex;
      align-items: center;
      transition: transform 0.22s ease;
    }
    .card:hover .read-btn .btn-arrow { transform: translateX(4px); }

    /* Pagination */
    .pagination {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-top: 48px;
    }
    .page-btn {
      width: 36px; height: 36px;
      border-radius: 3px;
      border: 1px solid #D8CFC4;
      background: #FFFFFF;
      color: #5A5040;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.15s ease;
    }
    .page-btn:hover { border-color: #4A6B4A; color: #2C4A2C; }
    .page-btn.active {
      background: #2C4A2C;
      border-color: #2C4A2C;
      color: #FFFFFF;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 580px) {
      .page-header { padding: 48px 20px 40px; }
      .content { padding: 36px 16px 56px; }
      .grid { grid-template-columns: 1fr; gap: 16px; }
    }
  `],
  template: `
<div class="page">

  <header class="page-header">
    <div class="eyebrow">Nowara Infotech &nbsp;·&nbsp; Insights</div>
    <h1 class="page-title">Resources &amp; Insights</h1>
    <p class="page-sub">The latest in technology, development practice, and industry thinking from our team.</p>
  </header>

  <div class="content">

    <div *ngIf="loading" class="state">
      <div class="spinner"></div>
      <p class="state-text">Loading articles…</p>
    </div>

    <div *ngIf="!loading && blogs.length === 0" class="state">
      <p class="state-text">No articles found. Check back soon.</p>
    </div>

    <div *ngIf="!loading && blogs.length > 0" class="grid">
      <article
        *ngFor="let blog of displayedBlogs"
        class="card"
        (click)="goToBlog(blog.page_name)"
        role="button"
        [attr.aria-label]="blog.heading">

        <div class="card-img">
          <img
            *ngIf="blog.image"
            [src]="blog.image"
            [alt]="blog.heading"
            loading="lazy"
            decoding="async" />
          <div *ngIf="!blog.image" class="img-placeholder">
            <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.3" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
            <span>No image</span>
          </div>
        </div>

        <div class="card-body">
          <div class="card-cat">Article</div>
          <h2 class="card-title">{{ blog.heading }}</h2>
          <p class="card-sub">{{ blog.subheading }}</p>
          <div class="card-divider"></div>
          <div class="card-footer">
            <div class="author">
              <div class="avatar">N</div>
              <div>
                <div class="author-name">Nowara Infotech</div>
                <div class="author-date">{{ blog.creation_date }}</div>
              </div>
            </div>
            <button
              type="button"
              class="read-btn"
              (click)="$event.stopPropagation(); goToBlog(blog.page_name)">
              Read more
              <span class="btn-arrow">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </article>
    </div>

    <div *ngIf="totalPages > 1" class="pagination">
      <button
        *ngFor="let p of pages"
        type="button"
        class="page-btn"
        [class.active]="currentPage === p"
        (click)="currentPage = p">
        {{ p }}
      </button>
    </div>

  </div>
</div>
  `
})
export class BlogListComponent implements OnInit {
  private seo = inject(SeoService);
  blogs: Blog[] = [];
  loading = true;
  currentPage = 1;
  itemsPerPage = 6;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.seo.setPage(SEO.blogs.title, SEO.blogs.description);
    this.loadBlogs();
  }

  loadBlogs() {
    this.loading = true;
    this.cdr.detectChanges();
    this.http.get<any>(
      'https://nowarainfotech.co/blog_api.php?action=get_all&t=' + new Date().getTime()
    ).subscribe({
      next: (data) => {
        if (data.status) this.blogs = data.data || [];
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('Blog API Error:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  get displayedBlogs() {
    return this.blogs.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  get totalPages() {
    return Math.ceil(this.blogs.length / this.itemsPerPage);
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToBlog(pageName: string) {
    this.router.navigate(['/blog', pageName]);
  }
}