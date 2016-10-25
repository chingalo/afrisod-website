import { AfrosodPage } from './app.po';

describe('afrosod App', function() {
  let page: AfrosodPage;

  beforeEach(() => {
    page = new AfrosodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
