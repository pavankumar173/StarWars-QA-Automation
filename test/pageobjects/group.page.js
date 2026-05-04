class GroupPage {

  get name() { return $('~groupNameInput'); }
  get desc() { return $('~groupDescriptionInput'); }
  get save() { return $('~saveGroupButton'); }

  async createGroup(name, desc) {
    await this.name.setValue(name);
    await this.desc.setValue(desc);
    await this.save.click();
  }

  async openGroup(name) {
    const group = $(`//*[@text="${name}"]`);
    await group.waitForDisplayed();
    await group.click();
  }
}

export default new GroupPage();