const { test, expect } = require("../fixtures/fixtures");

test.describe("Login Tests", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.refreshPage();
  });

  test("login with empty or invalid credentials", async ({ loginPage }) => {
    await loginPage.fillLoginNameTextbox("");
    await loginPage.fillPasswordTextbox("");
    await loginPage.clickLoginButton();
    await expect(loginPage.errorMessage).toContainText("Error: Incorrect login or password provided.");
    await loginPage.refreshPage();
    await loginPage.fillLoginNameTextbox("invalidUser");
    await loginPage.fillPasswordTextbox("invalidPassword");
    await loginPage.clickLoginButton();
    await expect(loginPage.errorMessage).toContainText("Error: Incorrect login or password provided.");
  });

  test("login with valid credentials", async ({ loginPage }) => {
    await loginPage.fillLoginNameTextbox("validUser");
    await loginPage.fillPasswordTextbox("validPassword");
    await loginPage.clickLoginButton();
    const dashboardPage = PageGeneratorManager.getAccountDashboardPage(loginPage.page);
  });

  test("retrieve password using login name and email address", async ({ loginPage }) => {
    
  });
});
