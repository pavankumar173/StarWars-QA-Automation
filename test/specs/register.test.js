const loginPage = require('../pageobjects/login.page');
const registerPage = require('../pageobjects/register.page');

describe('Register Test', () => {

    it('should create user', async () => {

        await loginPage.openRegisterPage();

        await registerPage.register({
            email: 'pavan3@starwars.com',
            firstName: 'pavan',
            lastName: 'Skywalker',
            password: 'Pavan@1234',
            role: 'Darth Vader'
        });

    });

});