class RegisterPage {

    get email() { return $('android=new UiSelector().text("Email")'); }
    get firstName() { return $('android=new UiSelector().text("First name")'); }
    get lastName() { return $('android=new UiSelector().text("Last name")'); }
    get password() { return $('android=new UiSelector().text("Password")'); }
    get confirmPassword() { return $('android=new UiSelector().text("Confirm password")'); }
    get roleDropdown() { return $('android=new UiSelector().text("Select user role")'); }
    get roleSearch() { return $('android=new UiSelector().text("Search people by name")'); }
    get saveBtn() { return $('android=new UiSelector().text("Save")'); }

    async selectRole(roleName) {
        await this.roleDropdown.click();
        await this.roleSearch.setValue(roleName);
        await $(`android=new UiSelector().text("${roleName}")`).click();
    }

    async register(user) {

        await this.email.waitForDisplayed();
        await this.email.setValue(user.email);

        await this.firstName.setValue(user.firstName);
        await this.lastName.setValue(user.lastName);

        await this.password.setValue(user.password);
        await this.confirmPassword.setValue(user.password);

        await this.selectRole(user.role);

        await this.saveBtn.waitForClickable();
        await this.saveBtn.click();
    }
}

module.exports = new RegisterPage();