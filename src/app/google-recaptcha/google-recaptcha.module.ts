import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleRecaptchaComponent } from './google-recaptcha-component/google-recaptcha-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GoogleRecaptchaComponent
  ],
  declarations: [
    GoogleRecaptchaComponent
  ]
})
export class GoogleRecaptchaModule { }
