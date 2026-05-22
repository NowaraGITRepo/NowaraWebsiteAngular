import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SeoService } from '../../../services/seo.service';
import { SEO } from '../../../data/seo-data';

interface Blog {
  id: string;
  title: string;
  image?: string;
  content: string;
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
<div class="min-h-screen bg-white">
  <!-- HERO -->
  <div class="bg-gradient-to-r from-primary to-secondary py-24 px-6 text-center">
    <h1 class="text-5xl md:text-6xl font-black text-white mb-4">Our Latest <span class="text-blue-200">Blogs</span></h1>
    <p class="text-blue-100 text-lg max-w-2xl mx-auto">Insights, trends, and expertise from the Nowara Infotech team.</p>
  </div>

  <!-- LOADING -->
  <div *ngIf="loading" class="text-center py-24">
    <div class="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    <p class="mt-4 text-slate-500 font-medium">Loading amazing stories...</p>
  </div>

  <!-- BLOG GRID -->
  <div *ngIf="!loading" class="max-w-7xl mx-auto px-6 lg:px-20 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div *ngFor="let blog of displayedBlogs" (click)="goToBlog(blog.id)"
           class="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer group">
        <div class="relative h-52 overflow-hidden bg-slate-100">
          <img *ngIf="blog.image" [src]="blog.image" [alt]="blog.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
          <div *ngIf="!blog.image" class="w-full h-full flex items-center justify-center bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#93c5fd" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
          </div>
        </div>
        <div class="p-6">
          <h2 class="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">{{blog.title}}</h2>
          <p class="text-slate-500 text-sm leading-relaxed line-clamp-3" [innerHTML]="getExcerpt(blog.content)"></p>
          <div class="mt-5 flex items-center gap-2 text-primary font-bold text-sm">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </div>
        </div>
      </div>
    </div>

    <!-- PAGINATION -->
    <div *ngIf="totalPages > 1" class="flex justify-center gap-3 mt-16">
      <button *ngFor="let p of pages" (click)="currentPage = p"
              [class]="'px-5 py-2 rounded-xl font-bold text-sm transition-all ' + (currentPage === p ? 'bg-primary text-white shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200')">
        {{p}}
      </button>
    </div>
  </div>
</div>
  `,
})
export class BlogListComponent implements OnInit {
  private seo = inject(SeoService);
  blogs: Blog[] = [];
  loading = true;
  currentPage = 1;
  itemsPerPage = 6;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.seo.setPage(SEO.blogs.title, SEO.blogs.description);
    this.http.get<any>('https://nowarainfotech.co/blog_api.php?action=get_all').subscribe({
      next: (data) => {
        if (data.status) this.blogs = data.data;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  get displayedBlogs() {
    return this.blogs.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.blogs.length / this.itemsPerPage);
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToBlog(id: string) {
    this.router.navigate(['/blog', id]);
  }

  getExcerpt(content: string) {
    const stripped = content.replace(/<[^>]*>/g, '');
    return stripped.slice(0, 150) + '...';
  }
}
