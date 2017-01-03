import { DefaultNgBasePage } from './app.po';

describe('default-ng-base App', function() {
  let page: DefaultNgBasePage;

  beforeEach(() => {
    page = new DefaultNgBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
