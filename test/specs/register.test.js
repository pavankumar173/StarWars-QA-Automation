const loginPage = require('../pageobjects/login.page');
const registerPage = require('../pageobjects/Registration.page');

describe('Register Test', () => {

    it('should create user', async () => {

        await loginPage.createAccountBtn.click();

        await registerPage.register({
            email: 'luke@starwars.com',
            firstName: 'Luke',
            lastName: 'Skywalker',
            password: '123456',
            role: 'Darth Vader'
        });

    });

});