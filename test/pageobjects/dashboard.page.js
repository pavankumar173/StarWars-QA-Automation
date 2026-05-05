class DashboardPage {

    get createGroupBtn() {
        return $('android=new UiSelector().descriptionContains("Create Group")');
    }

    async goToCreateGroup() {
        await this.createGroupBtn.click();
    }
}

module.exports = new DashboardPage();