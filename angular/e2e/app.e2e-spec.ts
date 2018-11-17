import { LangGamePage } from './app.po';

describe('lang-game App', () => {
  let page: LangGamePage;

  beforeEach(() => {
    page = new LangGamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
