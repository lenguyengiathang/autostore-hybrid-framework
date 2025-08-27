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
    this.loginOrRegisterLink = page.getByRole("link", { name: "Login or register" });
    this.pageTitle = page.locator("h1");
    this.customerDropdown = page.locator("#customernav");
    this.errorMessage = page.locator(".alert-error");
    this.product = page.locator(".prdocutname");
  }

  async navigateToUrl(url, locator) {
    await this.page.goto(url);
  }

  async refreshPage() {
    await this.page.reload({ waitUntil: "networkidle" });
  }

  async setcookie(name, value) {
    await this.page.context().addCookies([{ name, value, url: this.page.url() }]);
  }

  async getCookie(name) {
    const cookies = await this.page.context().cookies();
    const cookie = cookies.find((cookie) => cookie.name === name);
    return cookie ? cookie.value : null;
  }

  async clickElement(locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.waitFor({ state: "visible" });
    await locator.click({ force: true });
  }

  async fillTextbox(locator, text) {
    await locator.waitFor({ state: "visible" });
    await locator.fill(text);
  }

  async selectCheckbox(locator, checked = true) {
    const isChecked = await locator.isChecked();
    if (isChecked !== checked) {
      if (checked) {
        await locator.check({ force: true });
      } else {
        await locator.uncheck({ force: true });
      }
    }
  }

  async unselectCheckbox(locator) {
    const isChecked = await locator.isChecked();
    if (isChecked) {
      await locator.uncheck({ force: true });
    }
  }

  async selectRadioButton(locator) {
    const isChecked = await locator.isChecked();
    if (!isChecked) {
      await locator.check({ force: true });
    }
  }

  async getText(locator) {
    return await locator.textContent();
  }

  async getElementAttribute(locator, attribute) {
    return await locator.getAttribute(attribute);
  }

  async hover(locator) {
    await locator.hover({ force: true });
  }

  async selectOptionDefaultDropdown(locator, value) {
    await locator.selectOption(value);
  }

  async selectOptionCustomDropdown(locator, optionLabel) {
    await this.clickElement(locator);
    await this.page.locator(`text=${optionLabel}`).click();
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
    return await locator.count();
  }

  // Specific to this project

  async clickLoginOrRegisterLink() {
    await this.clickElement(this.loginOrRegisterLink);
  }

  async getErrorMessage() {
    return this.errorMessage;
  }

  
}

module.exports = BasePage;
