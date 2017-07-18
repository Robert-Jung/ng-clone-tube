import { NgCloneTubePage } from './app.po';

describe('ng-clone-tube App', () => {
  let page: NgCloneTubePage;

  beforeEach(() => {
    page = new NgCloneTubePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
