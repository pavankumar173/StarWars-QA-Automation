class DashboardPage {

  get dashboard() { return $('~dashboardScreen'); }
  get createGroupBtn() { return $('~createGroupButton'); }

  async isLoaded() {
    return await this.dashboard.isDisplayed();
  }

  async goToCreateGroup() {
    await this.createGroupBtn.click();
  }
}

export default new DashboardPage();