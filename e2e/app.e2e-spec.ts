import { CommaNumberPage } from './app.po';

describe('comma-number App', () => {
  let page: CommaNumberPage;

  beforeEach(() => {
    page = new CommaNumberPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
