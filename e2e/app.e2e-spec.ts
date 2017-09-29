import { RoboticsClubOrganizerPage } from './app.po';

describe('robotics-club-organizer App', () => {
  let page: RoboticsClubOrganizerPage;

  beforeEach(() => {
    page = new RoboticsClubOrganizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
