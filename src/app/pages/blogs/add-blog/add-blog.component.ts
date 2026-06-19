import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-blog',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Inter:wght@400;500;600;700&display=swap');

    :host { display: block; font-family: 'Inter', sans-serif; }

    .page { background: #F8F5F0; min-height: 100vh; padding: 40px 32px 64px; }

    /* ── Page header ── */
    .pg-head {
      background: #FFFFFF;
      border: 1px solid #E5DDD2;
      border-radius: 4px;
      padding: 28px 32px;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .eyebrow {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #9A8C7A;
      margin-bottom: 6px;
    }
    .pg-head h1 {
      font-family: 'Merriweather', Georgia, serif;
      font-size: 22px;
      font-weight: 700;
      color: #18150F;
    }
    .pg-head p { font-size: 13px; color: #7A6E60; margin-top: 4px; }
    .clear-btn {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.09em;
      text-transform: uppercase;
      color: #5A5040;
      background: #F0EAE1;
      border: 1px solid #E5DDD2;
      border-radius: 3px;
      padding: 9px 18px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .clear-btn:hover { background: #E8E0D5; }

    /* ── Form card ── */
    .form-card {
      background: #FFFFFF;
      border: 1px solid #E5DDD2;
      border-radius: 4px;
      padding: 28px 32px;
      margin-bottom: 28px;
    }
    .section-label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #4A6B4A;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #F0EAE1;
    }
    .section-label.spaced { margin-top: 32px; }
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .fg { display: flex; flex-direction: column; gap: 6px; }
    .fg.full { grid-column: 1 / -1; }
    .fg label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: #5A5040;
    }
    .req { color: #C04A2C; margin-left: 2px; }
    .hint { font-size: 10.5px; font-weight: 400; text-transform: none; letter-spacing: 0; color: #9A8C7A; margin-left: 4px; }
    .f-input {
      width: 100%;
      padding: 10px 13px;
      border: 1px solid #E5DDD2;
      border-radius: 3px;
      font-size: 13px;
      font-family: 'Inter', sans-serif;
      color: #18150F;
      background: #FDFAF7;
      outline: none;
      transition: border-color 0.15s;
    }
    .f-input:focus { border-color: #4A6B4A; }
    textarea.f-input { resize: vertical; min-height: 70px; line-height: 1.5; }
    input[type="file"].f-input { padding: 8px 13px; color: #5A5040; cursor: pointer; }

    /* Image preview */
    .img-preview-wrap { margin-top: 10px; display: flex; align-items: center; gap: 12px; }
    .img-preview {
      width: 90px;
      height: 64px;
      object-fit: contain;
      border: 1px solid #E5DDD2;
      border-radius: 3px;
      background: #F0EAE1;
      padding: 4px;
    }
    .img-label { font-size: 11px; color: #7A6E60; }

    /* ── Rich text editor ── */
    .editor-wrap { border: 1px solid #E5DDD2; border-radius: 3px; overflow: hidden; margin-top: 6px; }
    .toolbar {
      background: #F8F5F0;
      border-bottom: 1px solid #E5DDD2;
      padding: 8px 12px;
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
    }
    .tool-btn {
      font-size: 12px;
      font-weight: 700;
      padding: 4px 11px;
      border: 1px solid #E5DDD2;
      border-radius: 2px;
      background: #FFFFFF;
      color: #3A3020;
      cursor: pointer;
      transition: background 0.13s;
    }
    .tool-btn:hover { background: #F0EAE1; }
    .editor-body {
      min-height: 200px;
      padding: 16px;
      font-size: 13.5px;
      line-height: 1.75;
      color: #18150F;
      background: #FFFFFF;
      outline: none;
    }

    /* ── Form footer ── */
    .form-footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid #F0EAE1;
    }
    .save-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #FFFFFF;
      background: #2C4A2C;
      border: none;
      border-radius: 3px;
      padding: 11px 26px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .save-btn:hover { background: #3D6B3D; }
    .save-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .save-btn svg { transition: transform 0.2s; }
    .save-btn:hover svg { transform: translateX(3px); }

    /* ── Table section ── */
    .table-card {
      background: #FFFFFF;
      border: 1px solid #E5DDD2;
      border-radius: 4px;
      overflow: hidden;
    }
    .table-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px 16px;
      border-bottom: 1px solid #F0EAE1;
    }
    .table-top h2 {
      font-family: 'Merriweather', Georgia, serif;
      font-size: 17px;
      font-weight: 700;
      color: #18150F;
    }
    .count-badge {
      font-size: 11px;
      font-weight: 700;
      color: #7A6E60;
      background: #F0EAE1;
      border-radius: 2px;
      padding: 3px 10px;
    }
    table { width: 100%; border-collapse: collapse; }
    thead th {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #9A8C7A;
      padding: 11px 16px;
      text-align: left;
      background: #FDFAF7;
      border-bottom: 1px solid #F0EAE1;
    }
    tbody tr { border-bottom: 1px solid #F8F5F0; transition: background 0.12s; }
    tbody tr:last-child { border-bottom: none; }
    tbody tr:hover { background: #FDFAF7; }
    td { padding: 13px 16px; vertical-align: middle; }

    /* Thumbnail cell */
    .td-thumb {
      width: 52px;
      height: 38px;
      object-fit: contain;
      background: #F0EAE1;
      border: 1px solid #E5DDD2;
      border-radius: 2px;
      display: block;
      padding: 3px;
    }
    .td-thumb-ph {
      width: 52px;
      height: 38px;
      background: #F0EAE1;
      border: 1px solid #E5DDD2;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Text cells */
    .cell-title { font-size: 13px; font-weight: 600; color: #18150F; max-width: 220px; }
    .cell-sub { font-size: 11.5px; color: #7A6E60; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; }
    .cell-slug {
      font-family: monospace;
      font-size: 11.5px;
      color: #6B6052;
      background: #F0EAE1;
      padding: 3px 7px;
      border-radius: 2px;
      white-space: nowrap;
    }
    .cell-date { font-size: 12px; color: #9A8C7A; white-space: nowrap; }

    /* Action links */
    .act-edit {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.09em;
      text-transform: uppercase;
      color: #2C4A2C;
      background: transparent;
      border: none;
      cursor: pointer;
      position: relative;
      padding: 0;
    }
    .act-edit::after {
      content: '';
      position: absolute;
      bottom: -1px; left: 0;
      width: 100%; height: 1px;
      background: #2C4A2C;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s;
    }
    .act-edit:hover::after { transform: scaleX(1); }

    .act-del {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.09em;
      text-transform: uppercase;
      color: #8B2020;
      background: transparent;
      border: none;
      cursor: pointer;
      position: relative;
      padding: 0;
      margin-left: 16px;
    }
    .act-del::after {
      content: '';
      position: absolute;
      bottom: -1px; left: 0;
      width: 100%; height: 1px;
      background: #8B2020;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s;
    }
    .act-del:hover::after { transform: scaleX(1); }

    .empty-cell { text-align: center; padding: 40px 0; color: #9A8C7A; font-size: 13px; }

    /* Responsive */
    @media (max-width: 700px) {
      .page { padding: 24px 16px 48px; }
      .pg-head { flex-direction: column; align-items: flex-start; gap: 14px; padding: 20px; }
      .form-card { padding: 20px; }
      .form-grid { grid-template-columns: 1fr; }
      .fg.full { grid-column: 1; }
      table { font-size: 12px; }
    }
  `],
  template: `
<div class="page">

  <!-- Page header -->
  <div class="pg-head">
    <div>
      <div class="eyebrow">Blog Management</div>
      <h1>{{ isEdit ? 'Edit Article' : 'Add New Article' }}</h1>
      <p>{{ isEdit ? 'Update the details below and save your changes.' : 'Fill in the details below to publish a new article.' }}</p>
    </div>
    <button type="button" class="clear-btn" (click)="resetForm()">Clear form</button>
  </div>

  <!-- Form -->
  <div class="form-card">
    <div class="section-label">Article Details</div>

    <form (ngSubmit)="saveBlog()">
      <div class="form-grid">

        <div class="fg">
          <label>Heading <span class="req">*</span></label>
          <input class="f-input" [(ngModel)]="blog.heading" name="heading"
                 (keyup)="generateSlug()" placeholder="Enter article heading" required />
        </div>

        <div class="fg">
          <label>Subheading</label>
          <input class="f-input" [(ngModel)]="blog.subheading" name="subheading"
                 placeholder="Short supporting description" />
        </div>

        <div class="fg">
          <label>Page slug <span class="req">*</span></label>
          <input class="f-input" [(ngModel)]="blog.page_name" name="page_name"
                 placeholder="auto-generated-from-heading" required />
        </div>

        <div class="fg">
          <label>Publication date <span class="req">*</span></label>
          <input type="date" class="f-input" [(ngModel)]="blog.creation_date"
                 name="creation_date" required />
        </div>

        <div class="fg full">
          <label>Cover image</label>
          <input type="file" class="f-input" (change)="onFileSelect($event)" accept="image/*" />
          <div *ngIf="blog.image" class="img-preview-wrap">
            <img [src]="blog.image" class="img-preview" alt="Preview" />
            <span class="img-label">Current image</span>
          </div>
        </div>

        <div class="fg full">
          <label>Description <span class="req">*</span></label>
          <div class="editor-wrap">
            <div class="toolbar">
              <button type="button" class="tool-btn" (click)="format('bold')"><b>B</b></button>
              <button type="button" class="tool-btn" (click)="format('italic')"><i>I</i></button>
              <button type="button" class="tool-btn" (click)="format('underline')"><u>U</u></button>
              <button type="button" class="tool-btn" (click)="format('insertUnorderedList')">List</button>
              <button type="button" class="tool-btn" (click)="format('insertOrderedList')">1. List</button>
            </div>
            <div id="editor" class="editor-body" contenteditable="true"
                 (input)="syncDescription()"></div>
          </div>
        </div>

      </div>

      <!-- SEO & Metadata -->
      <div class="section-label spaced">SEO &amp; Metadata</div>
      <div class="form-grid">

        <div class="fg">
          <label>Meta Title</label>
          <input class="f-input" [(ngModel)]="blog.meta_title" name="meta_title"
                 placeholder="SEO title for browser/search engine" />
        </div>

        <div class="fg">
          <label>Meta Keywords</label>
          <input class="f-input" [(ngModel)]="blog.meta_keywords" name="meta_keywords"
                 placeholder="ERP, Business Central, Software" />
        </div>

        <div class="fg full">
          <label>Meta Description</label>
          <textarea class="f-input" rows="3" [(ngModel)]="blog.meta_description"
                    name="meta_description"
                    placeholder="Short SEO description"></textarea>
        </div>

        <div class="fg">
          <label>OG Title</label>
          <input class="f-input" [(ngModel)]="blog.og_title" name="og_title" />
        </div>

        <div class="fg">
          <label>OG Image URL</label>
          <input class="f-input" [(ngModel)]="blog.og_image" name="og_image"
                 placeholder="https://nowarainfotech.com/..." />
        </div>

        <div class="fg full">
          <label>OG Description</label>
          <textarea class="f-input" rows="3" [(ngModel)]="blog.og_description"
                    name="og_description"></textarea>
        </div>

        <div class="fg">
          <label>Twitter Title</label>
          <input class="f-input" [(ngModel)]="blog.twitter_title" name="twitter_title" />
        </div>

        <div class="fg">
          <label>Twitter Image URL</label>
          <input class="f-input" [(ngModel)]="blog.twitter_image" name="twitter_image" />
        </div>

        <div class="fg full">
          <label>Twitter Description</label>
          <textarea class="f-input" rows="3" [(ngModel)]="blog.twitter_description"
                    name="twitter_description"></textarea>
        </div>

      </div>

      <div class="form-footer">
        <button type="submit" class="save-btn" [disabled]="saving">
          {{ saving ? 'Saving…' : isEdit ? 'Update article' : 'Save article' }}
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4"/>
          </svg>
        </button>
      </div>
    </form>
  </div>

  <!-- Existing articles table -->
  <div class="table-card">
    <div class="table-top">
      <h2>Existing Articles</h2>
      <span class="count-badge">{{ blogs.length }} {{ blogs.length === 1 ? 'article' : 'articles' }}</span>
    </div>

    <table>
      <thead>
        <tr>
          <th>Blog Image</th>
          <th>Title</th>
          <th>Slug</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngIf="blogs.length === 0">
          <td colspan="5" class="empty-cell">No articles yet. Create one above.</td>
        </tr>
        <tr *ngFor="let item of blogs">
          <td>
            <img *ngIf="item.image" [src]="item.image" class="td-thumb"
                 [alt]="item.heading" (error)="item.image = ''" />
            <div *ngIf="!item.image" class="td-thumb-ph">
              <svg width="16" height="16" fill="none" stroke="#9A8C7A" stroke-width="1.3" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
            </div>
          </td>
          <td>
            <div class="cell-title">{{ item.heading }}</div>
            <div class="cell-sub">{{ item.subheading }}</div>
          </td>
          <td><span class="cell-slug">{{ item.page_name }}</span></td>
          <td class="cell-date">{{ item.creation_date }}</td>
          <td>
            <button type="button" class="act-edit" (click)="editBlog(item.id)">Edit</button>
            <button type="button" class="act-del" (click)="deleteBlog(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
  `
})
export class AddBlogComponent implements OnInit {
  apiUrl = 'https://nowarainfotech.co/blog_api.php';

  saving = false;
  isEdit = false;
  selectedImage: File | null = null;
  blogs: any[] = [];
  blog: any = this.emptyBlog();

  constructor(private http: HttpClient) {}

  ngOnInit() { this.loadBlogs(); }

  emptyBlog() {
    return {
      id: '',
      heading: '',
      subheading: '',
      page_name: '',
      creation_date: new Date().toISOString().slice(0, 10),
      description: '',
      image: '',
      meta_title: '',
      meta_description: '',
      meta_keywords: '',
      og_title: '',
      og_image: '',
      og_description: '',
      twitter_title: '',
      twitter_image: '',
      twitter_description: ''
    };
  }

  loadBlogs() {
    this.http.get<any>(`${this.apiUrl}?action=get_all`).subscribe({
      next: (res) => { if (res.status) this.blogs = res.data; },
      error: () => Swal.fire('Error', 'Unable to load articles', 'error')
    });
  }

  generateSlug() {
    if (this.isEdit || !this.blog.heading) return;
    this.blog.page_name = this.blog.heading
      .toLowerCase().trim()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  onFileSelect(event: any) { this.selectedImage = event.target.files[0]; }

  format(command: string) {
    document.execCommand(command, false);
    this.syncDescription();
  }

  syncDescription() {
    const editor = document.getElementById('editor');
    this.blog.description = editor ? editor.innerHTML : '';
  }

  editBlog(id: string) {
    this.http.get<any>(`${this.apiUrl}?action=get_by_id&id=${id}`).subscribe({
      next: (res) => {
        if (res.status) {
          this.isEdit = true;
          this.blog = { ...this.emptyBlog(), ...res.data };
          setTimeout(() => {
            const editor = document.getElementById('editor');
            if (editor) editor.innerHTML = this.blog.description || '';
          }, 0);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          Swal.fire('Failed', res.message, 'error');
        }
      },
      error: () => Swal.fire('Error', 'Unable to fetch article details', 'error')
    });
  }

  deleteBlog(id: string) {
    Swal.fire({
      title: 'Delete article?',
      text: 'This cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8B2020',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (!result.isConfirmed) return;
      const fd = new FormData();
      fd.append('action', 'delete');
      fd.append('id', id);
      this.http.post<any>(this.apiUrl, fd).subscribe({
        next: (res) => {
          if (res.status) {
            Swal.fire({ icon: 'success', title: 'Deleted', timer: 1200, showConfirmButton: false })
              .then(() => { this.loadBlogs(); });
          } else {
            Swal.fire('Failed', res.message, 'error');
          }
        },
        error: () => Swal.fire('Error', 'Delete failed', 'error')
      });
    });
  }

  saveBlog() {
    this.syncDescription();
    if (!this.blog.heading || !this.blog.page_name || !this.blog.description) {
      Swal.fire('Required', 'Heading, slug and description are required.', 'warning');
      return;
    }
    const wasEdit = this.isEdit;
    const fd = new FormData();
    fd.append('action', wasEdit ? 'update' : 'add');
    Object.keys(this.blog).forEach(k => { if (k !== 'image') fd.append(k, this.blog[k] ?? ''); });
    if (this.selectedImage) fd.append('image', this.selectedImage);
    this.saving = true;
    this.http.post<any>(this.apiUrl, fd).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.status) {
          Swal.fire({
            icon: 'success',
            title: wasEdit ? 'Updated' : 'Published',
            text: wasEdit ? 'Article updated successfully.' : 'Article published successfully.',
            timer: 1400,
            showConfirmButton: false
          }).then(() => { this.resetForm(); this.loadBlogs(); });
        } else {
          Swal.fire('Failed', res.message, 'error');
        }
      },
      error: () => { this.saving = false; Swal.fire('Error', 'Save failed', 'error'); }
    });
  }

  resetForm() {
    this.isEdit = false;
    this.selectedImage = null;
    this.blog = this.emptyBlog();
    const editor = document.getElementById('editor');
    if (editor) editor.innerHTML = '';
  }
}