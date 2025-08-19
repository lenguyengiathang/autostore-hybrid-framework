const BasePage = require("../core/BasePage");
const PageGeneratorManager = require("../core/page-generator-manager");
const AccountDashboardPage = require("./AccountDashboardPage");

class AccountLoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.continueButton = this.page.getByRole("button", { name: "Continue" });
    this.loginNameTextbox = this.page.locator("#loginFrm_loginname");
    this.passwordTextbox = this.page.locator("#loginFrm_password");
    this.forgotYourPasswordLink = this.page.getByRole("link", { name: "Forgot your password?" });
    this.forgotYourLoginLink = this.page.getByRole("link", { name: "Forgot your login?"});
    this.loginButton = this.page.getByRole("button", { name: "Login" });
  }

  async clickcontinueButton() {
    await this.clickElement(this.continueButton);
  }

  async fillLoginNameTextbox(loginName) {
    await this.fillTextbox(this.loginNameTextbox, loginName);
  }

  async fillPasswordTextbox(password) {
    await this.fillTextbox(this.passwordTextbox, password);
  }

  async clickForgotYourPasswordLink() {
    await this.clickElement(this.forgotYourPasswordLink);
  }

  async clickForgotYourLoginLink() {
    await this.clickElement(this.forgotYourLoginLink);
  }

  async clickLoginButton() {
    await this.clickElement(this.loginButton);
  }

  async login(loginName, password) {
    await this.fillLoginNameTextbox(loginName);
    await this.fillPasswordTextbox(password);
    return this.clickLoginButton();
  }
}

module.exports = AccountLoginPage;
