const { test: base, expect } = require('@playwright/test');
const LoginPage = require('../pages/AccountLoginPage');
const DashboardPage = require('../pages/AccountDashboardPage');
const PageGeneratorManager = require('../core/page-generator-manager');
const BasePage = require('../core/BasePage');

let homePage;

const test = base.extend({
  homePage: async ({ page }, use) => {
    await page.goto(process.env.BASE_URL || 'https://automationteststore.com/');
    const homePage = PageGeneratorManager.getHomePage(page);
    await use(homePage);
  },

  loginPage: async ({ homePage }, use) => {
    await homePage.clickLoginOrRegisterLink();
    const loginPage = PageGeneratorManager.getAccountLoginPage(homePage.page);
    await use(loginPage);
  },
});

module.exports = { test, expect };