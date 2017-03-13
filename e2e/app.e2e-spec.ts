import { Central1Page } from './app.po';

describe('central1 App', () => {
  let page: Central1Page;

  beforeEach(() => {
    page = new Central1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
