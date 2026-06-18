import { Component, Input, Output, EventEmitter, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  @Input() isModal = false;
  @Input() isCareerPage = false;
  @Output() success = new EventEmitter<void>();
  private platformId = inject(PLATFORM_ID);

  name = '';
  email = '';
  phone = '';
  subject = '';
  message = '';
  resume: File | null = null;
  loading = false;
  submitted = false;

  private emailApi = 'https://mail.nicpl.co/api/email/send';

  constructor(private http: HttpClient) {}

  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) { alert('File exceeds 20MB limit.'); input.value = ''; return; }
    if (file.type !== 'application/pdf') { alert('Please upload only PDF files.'); input.value = ''; return; }
    this.resume = file;
  }

  async onSubmit() {
    if (!this.phone || this.phone.length < 7) { alert('Please enter a valid phone number.'); return; }
    this.loading = true;

    const bodyHtml = `
      <p><strong>Name:</strong> ${this.name}</p>
      <p><strong>Email:</strong> ${this.email}</p>
      <p><strong>Phone:</strong> ${this.phone}</p>
      ${this.message ? `<br><p><strong>Message:</strong></p><p>${this.message.replace(/\n/g, '<br>')}</p>` : ''}
    `.trim();

    const fd = new FormData();
    fd.append('to',      'info@nowarainfotech.com');
    fd.append('cc',      'info@nowarainfotech.com');
    fd.append('subject', `Lead: ${this.subject} - ${this.name}`);
    fd.append('body',    bodyHtml);
    fd.append('isHtml',  'true');
    if (this.isCareerPage && this.resume) fd.append('resume', this.resume);

    try {
      // Fire-and-forget — CORS blocks reading the response but server receives & processes it
      fetch(this.emailApi, { method: 'POST', body: fd, mode: 'no-cors' }).catch(() => {});
      // Wait 1s to ensure request is dispatched, then show success
      await new Promise(r => setTimeout(r, 1000));
      if (!this.isCareerPage) this.downloadBrochure();
      this.submitted = true;
      this.success.emit();
      setTimeout(() => { this.submitted = false; this.resetForm(); }, 3500);
    } catch (err) {
      console.error('Mail send failed:', err);
      alert('We encountered an error. Please try again or contact us via WhatsApp.');
    } finally {
      this.loading = false;
    }
  }

  downloadBrochure() {
    if (!isPlatformBrowser(this.platformId)) return;
    const link = document.createElement('a');
    link.href = '/brochures/NowaraBrochure.pdf';
    link.setAttribute('download', 'Nowara_Brochure.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  resetForm() {
    this.name = ''; this.email = ''; this.phone = '';
    this.subject = ''; this.message = ''; this.resume = null;
  }
}
