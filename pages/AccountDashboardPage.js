const BasePage = require('../core/BasePage');
const userData = require("../data/userData.json");
const HomePage = require('./HomePage');


class AccountDashboardPage extends BasePage {
  constructor(page) {
    super(page);

  }

  async selectOptionCustomerDropdownByLabel(optionLabel) {
    await this.selectOptionCustomDropdown(this.customerDropdown, optionLabel);
    switch (optionLabel) {
      case `Not ${userData.defaultUser.firstName}? Logoff`:
        return new HomePage(this.page);
      default:
        throw new Error(`Unknown option label: ${optionLabel}`);
    }
  }

}

module.exports = AccountDashboardPage;