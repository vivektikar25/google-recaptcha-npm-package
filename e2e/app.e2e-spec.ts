import { GoogleRecaptchaPage } from './app.po';

describe('google-recaptcha App', () => {
  let page: GoogleRecaptchaPage;

  beforeEach(() => {
    page = new GoogleRecaptchaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
