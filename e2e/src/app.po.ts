import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  navigateToLogin(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/login') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.id('top')).getText() as Promise<string>;
  }
  getHeadingText(): Promise<string> {
    return element(by.id('header')).getText() as Promise<string>;
  }
  getLoginHeader(): Promise<string> {
    return element(by.id('login')).getText() as Promise<string>;
  }
}
