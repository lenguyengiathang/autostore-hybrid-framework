const CreateAccountPage = require('../pages/CreateAccountPage');
const AccountLoginPage = require('../pages/AccountLoginPage');
const AccountDashboardPage = require('../pages/AccountDashboardPage');

class PageGeneratorManager {
  static getCreateAccountPage(page) {
    return new CreateAccountPage(page);
  }

  static getAccountLoginPage(page) {
    return new AccountLoginPage(page);
  }

  static getAccountDashboardPage(page) {
    return new AccountDashboardPage(page);
  }
}

module.exports = PageGeneratorManager;