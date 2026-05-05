class ProfilePage {

    get youTab() {
        return $('android=new UiSelector().descriptionContains("You")');
    }

    get logoutBtn() {
        return $('~Logout');
    }

    async goToProfile() {
        await this.youTab.click();
    }

    async logout() {
        await this.logoutBtn.click();
    }
}

module.exports = new ProfilePage();