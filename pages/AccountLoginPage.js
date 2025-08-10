const BasePage = require('../core/BasePage');
const PageGeneratorManager = require('../core/PageGeneratorManager');
const AccountDashboardPage = require('./AccountDashboardPage');

class AccountLoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.loginNameTextbox = page.getByRole('textbox', { name: 'Login Name' });
    this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
    this.forgotYourPasswordLink = page.getByRole('link', {
      name: 'Forgot your password?',
    });
    this.forgotYourLoginLink = page.getByRole('link', {
      name: 'Forgot your login?',
    });
    this.loginButton = page.getByRole('button', { name: 'Login' });
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
    await Promise.all([
      this.page.getByRole('heading', { name: 'My Account' }).waitFor(),
      this.clickElement(this.loginButton)
    ]);
    return PageGeneratorManager.getAccountDashboardPage(this.page);
  }

  async login(loginName, password) {
    await this.fillLoginNameTextbox(loginName);
    await this.fillPasswordTextbox(password);
    return this.clickLoginButton();
  }
}

module.exports = AccountLoginPage;
