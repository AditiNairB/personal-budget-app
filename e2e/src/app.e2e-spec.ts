import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to login', () => {
    page.navigateToLogin();
    expect(page.getLoginHeader()).toEqual('Login');
  });

  it('should display quote', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Stop living paycheck to paycheck, get out of debt, and save more money?');
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('personal-budget-app app is running!');
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
