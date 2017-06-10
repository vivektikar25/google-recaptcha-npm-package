import { Component, ViewChild } from '@angular/core';
import { GoogleRecaptchaComponent } from './google-recaptcha/google-recaptcha-component/google-recaptcha-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(GoogleRecaptchaComponent) googleRecaptchaComponent:GoogleRecaptchaComponent;
  title = 'app works!';
  siteKey: string;

  constructor() {
    this.siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  }

  getResponse = () => {
    console.log(this.googleRecaptchaComponent.getResponseToken());
  }
}
