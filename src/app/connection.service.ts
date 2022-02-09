import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url: string = 'https://api.emailjs.com/api/v1.0/email/send';
  constructor(private http: HttpClient) { }
  
  sendMessage(formData: any) {
    // formData.add('service_id', 'service_uwl8g0g');
    // formData.append('template_id', 'YOUR_TEMPLATE_ID');
    // formData.append('user_id', 'user_FPHLKerILr9qnqyX0FMgz');
    console.log(formData)
    return this.http.post(this.url,
    JSON.stringify(formData),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }

  public sendEmail(e: Event) {
    console.log(e, e.target)
    emailjs.sendForm('service_uwl8g0g', 'contact_form', e.target as HTMLFormElement, 'user_FPHLKerILr9qnqyX0FMgz')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
