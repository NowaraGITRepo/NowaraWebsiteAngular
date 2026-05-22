import { Component, HostListener, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  constructor(private cdr: ChangeDetectorRef) {}

  scrollVisible = false;
  openEnquiry   = false;
  openChat      = false;
  isSubmitting  = false;
  isSuccess     = false;
  isAiTyping    = false;

  form   = { name: '', mobile: '', pincode: '' };
  errors = { name: '', mobile: '', pincode: '' };

  messages: ChatMessage[] = [
    { role: 'ai', text: 'Hello! I am your Nowara Assistant. 😊 How can I help you today?' }
  ];

  @HostListener('window:scroll')
  onScroll() { this.scrollVisible = window.scrollY > 500; }

  scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

  toggleEnquiry() {
    this.openEnquiry = !this.openEnquiry;
    if (this.openEnquiry) this.openChat = false;
  }

  toggleChat() {
    this.openChat = !this.openChat;
    if (this.openChat) this.openEnquiry = false;
  }

  closeAll() { this.openEnquiry = false; this.openChat = false; }

  openWhatsApp() { window.open('https://wa.me/919311205831', '_blank'); }
  openPhone()    { window.location.href = 'tel:+919311205831'; }

  validate(): boolean {
    this.errors = { name: '', mobile: '', pincode: '' };
    if (this.form.name.length < 3)               this.errors.name    = 'Enter full name';
    if (!/^\d{10}$/.test(this.form.mobile))      this.errors.mobile  = 'Enter 10 digits';
    if (!/^\d{6}$/.test(this.form.pincode))      this.errors.pincode = 'Enter 6 digits';
    return !this.errors.name && !this.errors.mobile && !this.errors.pincode;
  }

  async submitEnquiry() {
    if (!this.validate()) return;
    this.isSubmitting = true;
    await new Promise(r => setTimeout(r, 800));
    const link = document.createElement('a');
    link.href = '/brochures/NowaraBrochure.pdf';
    link.setAttribute('download', 'Nowara_Brochure.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.isSuccess    = true;
    this.isSubmitting = false;
    setTimeout(() => {
      this.openEnquiry = false;
      this.isSuccess   = false;
      this.form        = { name: '', mobile: '', pincode: '' };
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
        this.messages.push({ role: 'ai', text: `🚀 Our Expertise:<br><br>• Microsoft Dynamics 365<br>• Business Central & LS Central<br>• Power BI & Reporting<br>• Cloud Services (Azure / AWS)<br>• SAP & ERP Consulting` });
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
