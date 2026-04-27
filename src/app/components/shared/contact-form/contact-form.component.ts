import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  name = '';
  email = '';
  phone = '';
  subject = '';
  message = '';
  resume: File | null = null;
  loading = false;
  submitted = false;

  private emailApi = 'https://email.nowarainfo.com/api/email/send';

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

    const fd = new FormData();
    fd.append('name', this.name);
    fd.append('email', this.email);
    fd.append('phoneNumber', this.phone);
    fd.append('subject', `Lead: ${this.subject} - ${this.name}`);
    fd.append('message', this.message);
    fd.append('receiver', 'info@nowarainfotech.com');
    if (this.isCareerPage && this.resume) fd.append('resume', this.resume);

    try {
      const resp = await fetch(this.emailApi, { method: 'POST', body: fd });
      if (resp.ok) {
        if (!this.isCareerPage) this.downloadBrochure();
        this.submitted = true;
        this.success.emit();
        setTimeout(() => { this.submitted = false; this.resetForm(); }, 3500);
      } else throw new Error('Failed');
    } catch {
      alert('We encountered an error. Please try again or contact us via WhatsApp.');
    } finally {
      this.loading = false;
    }
  }

  downloadBrochure() {
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
