import { Component, HostListener, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage { role: 'user' | 'ai'; text: string; }

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scroll-to-top.component.html',
})
export class ScrollToTopComponent {
  private platformId = inject(PLATFORM_ID);
  constructor(private cdr: ChangeDetectorRef) {}

  scrollVisible = false;
  openEnquiry   = false;
  openChat      = false;
  isSubmitting  = false;
  isSuccess     = false;
  isAiTyping    = false;

  form   = { name: '', mobile: '', email: '' };
  errors = { name: '', mobile: '', email: '' };

  messages: ChatMessage[] = [
    { role: 'ai', text: 'Hello! I am your Nowara Assistant. 😊 How can I help you today?' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollVisible = window.scrollY > 500;
    }
  }

  scrollTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleEnquiry() {
    this.openEnquiry = !this.openEnquiry;
    if (this.openEnquiry) this.openChat = false;
  }

  toggleChat() {
    this.openChat = !this.openChat;
    if (this.openChat) this.openEnquiry = false;
  }

  closeAll() { this.openEnquiry = false; this.openChat = false; }

  openWhatsApp() { if (isPlatformBrowser(this.platformId)) window.open('https://wa.me/919311205831', '_blank'); }
  openPhone()    { if (isPlatformBrowser(this.platformId)) window.location.href = 'tel:+919311205831'; }

  validate(): boolean {
    this.errors = { name: '', mobile: '', email: '' };
    if (this.form.name.length < 3)               this.errors.name    = 'Enter full name';
    if (!/^\d{10}$/.test(this.form.mobile))      this.errors.mobile  = 'Enter 10 digits';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) this.errors.email = 'Enter valid email';
    return !this.errors.name && !this.errors.mobile && !this.errors.email;
  }

  async submitEnquiry() {
    if (!this.validate()) return;
    this.isSubmitting = true;

    const bodyHtml = `
      <p><strong>Name:</strong> ${this.form.name}</p>
      <p><strong>Mobile:</strong> ${this.form.mobile}</p>
      <p><strong>Email:</strong> ${this.form.email}</p>
    `.trim();
    const fd = new FormData();
    fd.append('to',      'info@nowarainfotech.com');
    fd.append('cc',      'info@nowarainfotech.com');
    fd.append('subject', `Expert Consultation Enquiry - ${this.form.name}`);
    fd.append('body',    bodyHtml);
    fd.append('isHtml',  'true');
    fetch('https://email.nowarainfotech.co/api/email/send', { method: 'POST', body: fd, mode: 'no-cors' }).catch(() => {});

    await new Promise(r => setTimeout(r, 800));
    if (isPlatformBrowser(this.platformId)) {
      const link = document.createElement('a');
      link.href = '/brochures/NowaraBrochure.pdf';
      link.setAttribute('download', 'Nowara_Brochure.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    this.isSuccess    = true;
    this.isSubmitting = false;
    setTimeout(() => {
      this.openEnquiry = false;
      this.isSuccess   = false;
      this.form        = { name: '', mobile: '', email: '' };
      this.cdr.detectChanges();
    }, 3000);
  }

  sendChat(key: string) {
    if (this.isAiTyping) return;

    const labels: Record<string, string> = {
      services:  'Our Services 🛠️',
      expertise: 'Our Expertise 🚀',
      contact:   'Contact Us 📞',
      quote:     'Book Quote 📩',
    };

    this.messages.push({ role: 'user', text: labels[key] ?? key });
    this.isAiTyping = true;
    this.cdr.detectChanges();

    setTimeout(() => {
      if (key === 'services') {
        this.messages.push({ role: 'ai', text: `Here are our core services:<br><br>• ERP Implementation & Consulting<br>• Custom Development & Integration<br>• Upgrade & Migration<br>• Application Support (AMS)<br>• Resource Augmentation<br>• Web & Mobile App Development` });
      } else if (key === 'expertise') {
        this.messages.push({ role: 'ai', text: `🚀 Our Expertise:<br><br>• Microsoft Dynamics 365<br>• Business Central & LS Central<br>• Power BI & Reporting<br>• Cloud Services (Azure / AWS)<br>• ERP Consulting` });
      } else if (key === 'contact') {
        this.messages.push({ role: 'ai', text: `📞 Reach Us:<br><br>📍 Anthurium Tower A-212, Sector 73, Noida 201301<br><br>📞 +91 9311205831<br>✉️ info@nowarainfotech.com` });
      } else if (key === 'quote') {
        this.openChat    = false;
        this.openEnquiry = true;
      }
      this.isAiTyping = false;
      this.cdr.detectChanges();
    }, 900);
  }
}
