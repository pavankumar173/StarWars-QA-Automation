const loginPage = require('../pageobjects/login.page');

describe('Login Test', () => {

    it('should login successfully', async () => {

        await driver.pause(5000); // wait for app load

        await loginPage.login('pavan1@gmail.com', 'Pavankumar@123');

        await driver.pause(7000);

         // ✅ Assertion (IMPORTANT)
                const createGroupBtn = await $('android=new UiSelector().descriptionContains("Create Group")');

                await createGroupBtn.waitForDisplayed({ timeout: 30000 });

                await expect(createGroupBtn).toBeDisplayed();

    });

});