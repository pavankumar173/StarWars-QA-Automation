const loginPage = require('../pageobjects/login.page');
const registerPage = require('../pageobjects/Registration.page');
const dashboardPage = require('../pageobjects/dashboard.page');
const groupPage = require('../pageobjects/group.page');

describe('Full Flow', () => {

    it('should register and create group', async () => {

        await loginPage.createAccountBtn.click();

        await registerPage.register({
            email: 'luke@starwars.com',
            firstName: 'Luke',
            lastName: 'Skywalker',
            password: '123456',
            role: 'Darth Vader'
        });

        // Handle popup
        const yesBtn = await $('~Yes, I do');
        if (await yesBtn.isDisplayed()) {
            await yesBtn.click();
        }

        await dashboardPage.goToCreateGroup();

        await groupPage.createGroup({
            name: 'Rebels Alliance',
            description: 'Resistance group',
            starship: 'X-wing',
            members: ['han@falcon.com']
        });

        await groupPage.saveGroup();

        const groupTitle = await $('android=new UiSelector().text("Rebels Alliance")');
        await expect(groupTitle).toBeDisplayed();

    });

});