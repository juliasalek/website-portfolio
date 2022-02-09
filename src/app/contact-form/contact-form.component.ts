import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import{ init } from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  disabledSubmitButton: boolean = true;


  constructor(private _builder: FormBuilder,
    private _connectionService: ConnectionService) { }

  public ngOnInit(): void {
    this.contactForm = this._builder.group({
      name: '',
      topic: [],
      message: '',
      // service_id: 'service_uwl8g0g',
      // user_id: 'user_FPHLKerILr9qnqyX0FMgz'
    })
  }

  onSubmit(contactForm: any) {
    this._connectionService.sendEmail(contactForm)
    // this._connectionService.sendEmail(this.contactForm.value)
    // .subscribe(() => {
    //   alert('Your message has been sent.');
    //   this.contactForm.reset();
    //   this.disabledSubmitButton = true;
    // }, error => {
    //   console.log('Error', error);
    // });
  }
}
