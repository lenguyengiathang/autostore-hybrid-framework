const BasePage = require('../core/BasePage');

class AccountDashboardPage extends BasePage {
  constructor(page) {
    super(page);
    this.dynamicAccountMenuButtonByTitle = (title) => page.locator(`a[data-original-title='${title}']`);
  }

  async clickDynamicAccountMenuButtonByTitle(title) {
    await this.clickElement(this.dynamicAccountMenuButtonByTitle(title));
  }
  
}

module.exports = AccountDashboardPage;