class GroupPage {

    get groupName() {
        return $('android=new UiSelector().text("Enter group name")');
    }

    get description() {
        return $('android=new UiSelector().text("Enter group description")');
    }

    get starshipDropdown() {
        return $('android=new UiSelector().descriptionContains("Starship")');
    }

    get searchField() {
        return $('android=new UiSelector().text("Search people by name")');
    }

    get inviteMemberBtn() {
        return $('android=new UiSelector().descriptionContains("Invite member")');
    }

    get emailInput() {
        return $('android=new UiSelector().text("Email address")');
    }

    get inviteBtn() {
        return $('~Invite');
    }

    get saveBtn() {
        return $('android=new UiSelector().text("Save")');
    }

    async selectStarship(name) {
        await this.starshipDropdown.click();
        await this.searchField.setValue(name);
        await $(`android=new UiSelector().text("${name}")`).click();
    }

    async inviteMember(email) {
        await this.inviteMemberBtn.click();
        await this.emailInput.setValue(email);
        await this.inviteBtn.click();
    }

    async createGroup(data) {
        await this.groupName.waitForDisplayed();
        await this.groupName.setValue(data.name);

        await this.description.setValue(data.description);

        await this.selectStarship(data.starship);

        for (let member of data.members) {
            await this.inviteMember(member);
        }
    }

    async saveGroup() {
        await this.saveBtn.waitForClickable();
        await this.saveBtn.click();
    }
}

module.exports = new GroupPage();