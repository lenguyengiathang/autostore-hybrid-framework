const { test, expect } = require("@playwright/test");
const userData = require("../../data/userData.json"); 

test("Login and save storage state", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("/index.php?rt=account/login");
  await page.locator("#loginFrm_loginname").fill(userData.defaultUser.username);
  await page.locator("#loginFrm_password").fill(userData.defaultUser.password);
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.locator('h1')).toContainText('My Account');

  await context.storageState({ path: 'storageState.json' });
})