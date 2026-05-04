import LoginPage from '../pageobjects/login.page.js';
import DashboardPage from '../pageobjects/dashboard.page.js';
import GroupPage from '../pageobjects/group.page.js';
import InvitePage from '../pageobjects/invite.page.js';
import { generateUser } from '../utils/testData.js';

describe('Group + Invite Flow', () => {

  it('should create group and invite user', async () => {

    const data = generateUser();

    await LoginPage.login('existing_user@test.com', 'Test@123');

    await DashboardPage.goToCreateGroup();

    await GroupPage.createGroup(data.groupName, "Automation");

    await GroupPage.openGroup(data.groupName);

    await InvitePage.invite('receiver@test.com');

  });

});