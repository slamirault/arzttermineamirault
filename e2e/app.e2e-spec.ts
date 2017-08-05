import { ArzttermineAmiraultPage } from './app.po';

describe('arzttermine-amirault App', () => {
  let page: ArzttermineAmiraultPage;

  beforeEach(() => {
    page = new ArzttermineAmiraultPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
