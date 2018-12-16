import { browser, by, element } from 'protractor';

export class LangGamePage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('.header-container__title')).getText();
  }
}
