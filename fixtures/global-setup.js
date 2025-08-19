const { chromium } = require("@playwright/test");
const path = require('path');

async function globalSetup(config) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const baseUrl = process.env.BASE_URL || "https://automationteststore.com/";
  await page.goto(baseUrl);
  await page.context().storageState({
    path: path.join(__dirname, "../storageState.json"),
  });
  await browser.close();
}

module.exports = globalSetup;
