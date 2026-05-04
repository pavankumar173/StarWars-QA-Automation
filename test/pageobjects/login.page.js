class LoginPage {

  get email() { return $('~emailInput'); }
  get password() { return $('~passwordInput'); }
  get loginBtn() { return $('~loginButton'); }

  async login(email, password) {
    await this.email.setValue(email);
    await this.password.setValue(password);
    await this.loginBtn.click();
  }
}

export default new LoginPage();