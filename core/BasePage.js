/**
 * @typedef {import('@playwright/test').Page} Page
 */
class BasePage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    /** @type {Page} */
    this.page = page;
    this.loginOrRegisterLink = page.getByRole('link', { name: 'Login or register' });
    this.searchBar = page.locator('input[placeholder="Search Keywords"]');
    this.currencyDropdown = page.locator('.dropdown-menu.currency');
    this.minicart = page.locator('.hover>a[href*="cart"]');
    this.dynamicMenuItemByLabel = (label) => page.locator(`li[data-id='menu_${label.toLowerCase()}']`);
  
  }

  async navigateToUrl(url) {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async refreshPage() {
    await this.page.reload({ waitUntil: 'networkidle' });
  }

  async setcookie(name, value) {
    await this.page.context().addCookies([{ name, value, url: this.page.url() }]);
  }

  async getCookie(name) {
    const cookies = await this.page.context().cookies();
    const cookie = cookies.find(cookie => cookie.name === name);
    return cookie ? cookie.value : null;
  }

  async clickElement(locator) {
    await this.page.click(locator, { force: true });
  }

  async fillTextbox(locator, text) {
    await this.clearInput(locator);
    await this.page.fill(locator, text);
  }

  async clearInput(locator) {
    await this.page.fill(locator, '', { force: true });
  }

  async selectCheckbox(locator, checked = true) {
    const isChecked = await this.page.isChecked(locator);
    if (isChecked !== checked) {
      await this.page.check(locator, { force: true });
    }
  }

  async unselectCheckbox(locator) {
    const isChecked = await this.page.isChecked(locator);
    if (isChecked) {
      await this.page.uncheck(locator, { force: true });
    }
  } 

  async selectRadioButton(locator) {
    const isChecked = await this.page.isChecked(locator);
    if (!isChecked) {
      await this.page.check(locator, { force: true });
    }
  }

  async getText(locator) {
    return await this.page.textContent(locator);
  }

  async getElementAttribute(locator, attribute) {
    return await this.page.getAttribute(locator, attribute);
  }

  async hover(locator) {
    await this.page.hover(locator, { force: true });
  }

  async selectOptionDropdown(locator, value) {
    await this.page.selectOption(locator, value);
  }

  async switchToTab(index) {
    const pages = this.page.context().pages();
    if (index < pages.length) {
      await pages[index].bringToFront();
    }
  }

  async switchToWindow() {
    const pages = this.page.context().pages();
    if (pages.length > 1) {
      await pages[1].bringToFront();
    }
  }

  async closeTab(index) {
    const pages = this.page.context().pages();
    if (index < pages.length) {
      await pages[index].close();
    }
  }

  async getNumberOfElements(locator) {
    return await this.page.locator(locator).count();
  }

  async searchWithValue(value) {
    await this.fillTextbox(this.searchBar, value);
    await this.page.keyboard.press('Enter');
  }

  async clickMenuItemByLabel(label) {
    await this.dynamicMenuItemByLabel(label).click();
  }
}

module.exports = BasePage;
