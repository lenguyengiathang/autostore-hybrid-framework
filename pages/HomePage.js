const BasePage = require('../core/BasePage');
const SearchResultsPage = require('./SearchResultsPage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.loginOrRegisterLink = page.getByRole("link", { name: "Login or register"});
    this.searchBar = page.locator('input[placeholder="Search Keywords"]');
    this.currencyDropdown = page.locator(".dropdown-menu.currency");
    this.minicart = page.locator('.hover>a[href*="cart"]');
    this.dynamicMenuItemByLabel = (label) => page.locator(`li[data-id='menu_${label.toLowerCase()}']`);
  }
  async navigateToHomepage() {
    await this.navigateToUrl("/");
  }

  async searchWithValue(value) {
    await this.fillTextbox(this.searchBar, value);
    await this.page.keyboard.press("Enter");
    return new SearchResultsPage(this.page);
  }

  async clickMenuItemByLabel(label) {
    await this.dynamicMenuItemByLabel(label).click();
  }
}

module.exports = HomePage;