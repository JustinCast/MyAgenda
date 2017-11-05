import { MyAgendaPage } from './app.po';

describe('my-agenda App', () => {
  let page: MyAgendaPage;

  beforeEach(() => {
    page = new MyAgendaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
