import { LangGamePage } from '../app.po';

describe('lang-game App', () => {
  let page: LangGamePage;

  beforeEach(() => {
    page = new LangGamePage();
  });

  it('should display page title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Language Game');
  });
});
