import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'google-recaptcha-component',
  templateUrl: './google-recaptcha-component.component.html',
  styleUrls: ['./google-recaptcha-component.component.css']
})
export class GoogleRecaptchaComponent implements OnInit {

  constructor(){ }

  ngOnInit(){
    this.loadScript('https://www.google.com/recaptcha/api.js');
  }
  
  loadScript = (url) => {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementById('recaptchScript').appendChild(node);
  }

  getResponseToken = () => {
    const captchaResponseToken = window["grecaptcha"].getResponse();
    return captchaResponseToken;
  }
}
