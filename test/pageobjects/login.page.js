class LoginPage {

    get email() {
        return $('android=new UiSelector().textContains("E-mail")');
    }

    get password() {
        return $('android=new UiSelector().text("Password")');
    }

    get loginBtn() {
        return $('~LOGIN');
    }

    get createAccountBtn() {
        return $('android=new UiSelector().textContains("Create a new account")');
    }

    async login(email, password) {

        await this.email.waitForDisplayed({
            timeout: 100000
        });

        await this.email.click();

        await this.email.setValue(email);

        await this.password.waitForDisplayed({
            timeout: 30000
        });

        await this.password.click();

        await this.password.setValue(password);

        await this.loginBtn.waitForDisplayed({
            timeout: 30000
        });

        await this.loginBtn.click();
    }

    async openRegisterPage() {

        await this.createAccountBtn.waitForDisplayed({
            timeout: 30000
        });

        await this.createAccountBtn.click();
    }
}

module.exports = new LoginPage();