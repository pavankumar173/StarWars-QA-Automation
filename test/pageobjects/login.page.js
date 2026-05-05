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

    async login(email, password) {

        await this.email.waitForDisplayed({ timeout: 10000 });
        await this.email.click();
        await this.email.setValue(email);

        await this.password.waitForDisplayed({ timeout: 10000 });
        await this.password.click();
        await this.password.setValue(password);

        await this.loginBtn.waitForDisplayed({ timeout: 10000 });
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();