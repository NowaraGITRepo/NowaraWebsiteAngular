import {
  Component, HostListener, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef,
  inject, PLATFORM_ID, ViewChild, ElementRef
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface ChatMessage { role: 'user' | 'ai'; text: string; }
interface Suggestion  { id: number; question: string; }

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scroll-to-top.component.html',
})
export class ScrollToTopComponent {
  private platformId = inject(PLATFORM_ID);
  private http       = inject(HttpClient);
  constructor(private cdr: ChangeDetectorRef) {}

private readonly CHAT_API = 'https://nowarainfotech.co/chatbot_api.php';

  @ViewChild('msgBox') msgBox?: ElementRef<HTMLDivElement>;

  scrollVisible = false;
  openEnquiry   = false;
  openChat      = false;
  isSubmitting  = false;
  isSuccess     = false;
  isAiTyping    = false;

  chatInput   = '';
  suggestions: Suggestion[] = [];
  private chatStarted = false;

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
    if (this.openChat) {
      this.openEnquiry = false;
      this.loadStarter();
    }
  }

  closeAll() { this.openEnquiry = false; this.openChat = false; }

  openWhatsApp() { if (isPlatformBrowser(this.platformId)) window.open('https://wa.me/919311205831', '_blank'); }
  openPhone()    { if (isPlatformBrowser(this.platformId)) window.location.href = 'tel:+919311205831'; }

  // ---------------- Enquiry form ----------------
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
      <p><strong>Name:</strong> ${this.escapeHtml(this.form.name)}</p>
      <p><strong>Mobile:</strong> ${this.escapeHtml(this.form.mobile)}</p>
      <p><strong>Email:</strong> ${this.escapeHtml(this.form.email)}</p>
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

  // ---------------- Chatbot ----------------
  private async callApi(params: Record<string, string | number>): Promise<any> {
    const res: any = await firstValueFrom(
      this.http.get<any>(this.CHAT_API, { params: { ...params, t: Date.now() } })
    );
    if (!res?.status) throw new Error('API error');
    return res.data;
  }

  private async loadStarter() {
    if (this.chatStarted || !isPlatformBrowser(this.platformId)) return;
    this.chatStarted = true;
    try {
      const r = await this.callApi({ action: 'start' });
      this.suggestions = r.suggestions ?? [];
    } catch {
      this.chatStarted = false;   // retry next time the chat opens
    }
    this.cdr.detectChanges();
  }

  private escapeHtml(t: string): string {
    return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  private scrollChat() {
    setTimeout(() => {
      const el = this.msgBox?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    }, 0);
  }

  async sendChat(text: string, id?: number) {
    text = (text ?? '').trim();
    if ((!text && !id) || this.isAiTyping) return;

    this.messages.push({ role: 'user', text: this.escapeHtml(text) });
    this.chatInput   = '';
    this.isAiTyping  = true;
    this.suggestions = [];
    this.cdr.detectChanges();
    this.scrollChat();

    try {
      const [r] = await Promise.all([
        this.callApi(id ? { action: 'faq', id } : { action: 'ask', q: text }),
        new Promise(res => setTimeout(res, 600)),   // natural typing pause
      ]);
      this.messages.push({ role: 'ai', text: r.answer });
      this.suggestions = r.suggestions ?? [];
      if (r.action === 'enquiry') {
        this.openChat    = false;
        this.openEnquiry = true;
      }
    } catch {
      this.messages.push({
        role: 'ai',
        text: 'Sorry, I am having trouble right now. Please call +91 9311205831 or email info@nowarainfotech.com.'
      });
    }

    this.isAiTyping = false;
    this.cdr.detectChanges();
    this.scrollChat();
  }
}