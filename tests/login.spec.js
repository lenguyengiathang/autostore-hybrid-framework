const { test, expect } = require("../fixtures/fixtures");
const userData = require("../data/userData.json");

let dashboardPage;

test.describe("Login Tests", () => {
  test.beforeEach(async ({ loginPage }) => {
  });

  test("login with empty or invalid credentials", async ({ loginPage }) => {
    await loginPage.fillLoginNameTextbox("");
    await loginPage.fillPasswordTextbox("");
    await loginPage.clickLoginButton();
    await expect(loginPage.errorMessage).toContainText("Error: Incorrect login or password provided.");
    await loginPage.refreshPage();
    await loginPage.fillLoginNameTextbox(userData.invalidUser.username);
    await loginPage.fillPasswordTextbox(userData.invalidUser.password);
    await loginPage.clickLoginButton();
    await expect(loginPage.errorMessage).toContainText("Error: Incorrect login or password provided.");
  });

  test("login with valid credentials", async ({ loginPage }) => {
    await loginPage.fillLoginNameTextbox(userData.defaultUser.username);
    await loginPage.fillPasswordTextbox(userData.defaultUser.password);
    dashboardPage = await loginPage.clickLoginButton();
    await expect(dashboardPage.pageTitle).toContainText("My Account");
  });

  test("logout", async ({ homePage, loginPage }) => {
    await loginPage.fillLoginNameTextbox(userData.defaultUser.username);
    await loginPage.fillPasswordTextbox(userData.defaultUser.password);
    dashboardPage = await loginPage.clickLoginButton();
    homePage = await dashboardPage.selectOptionCustomerDropdownByLabel(`Not ${userData.defaultUser.firstName}? Logoff`);
    await expect(homePage.pageTitle).toContainText("Account Logout");
  });
});
