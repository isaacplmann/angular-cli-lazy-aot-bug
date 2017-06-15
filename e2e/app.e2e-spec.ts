import { LazyAotPage } from './app.po';

describe('lazy-aot App', () => {
  let page: LazyAotPage;

  beforeEach(() => {
    page = new LazyAotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
