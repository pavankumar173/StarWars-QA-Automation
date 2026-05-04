import LoginPage from '../pageobjects/login.page.js';
import DashboardPage from '../pageobjects/dashboard.page.js';

describe('Login Test', () => {

  it('should login successfully', async () => {
    await LoginPage.login('existing_user@test.com', 'Test@123');
    await expect(await DashboardPage.isLoaded()).toBe(true);
  });

});