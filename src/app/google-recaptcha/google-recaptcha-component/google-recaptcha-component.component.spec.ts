import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleRecaptchaComponentComponent } from './google-recaptcha-component.component';

describe('GoogleRecaptchaComponentComponent', () => {
  let component: GoogleRecaptchaComponentComponent;
  let fixture: ComponentFixture<GoogleRecaptchaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleRecaptchaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleRecaptchaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
