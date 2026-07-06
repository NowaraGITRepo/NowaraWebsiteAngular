import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private emailApi = 'https://email.nowarainfotech.co/api/email/send';
  private receiverEmail = 'info@nowarainfotech.com';

  constructor(private http: HttpClient) {}

  sendContactEmail(formData: FormData): Observable<any> {
    formData.set('to', this.receiverEmail);
    formData.set('cc', this.receiverEmail);
    formData.set('isHtml', 'true');

    return this.http.post(this.emailApi, formData);
  }

  sendHrEmail(formData: FormData): Observable<any> {
    formData.append('receiver', this.receiverEmail);
    return this.http.post(this.emailApi, formData);
  }
}
