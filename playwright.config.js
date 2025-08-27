require("dotenv").config();
const { expect } = require("@playwright/test");

module.exports = {
  globalSetup: undefined,
  globalTeardown: undefined,
  testDir: "tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5 * 1000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["list"],
    ["junit", { outputFile: "reports/junit/results.xml" }],
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["json", { outputFile: "results.json" }],
  ],
  use: {
    headless: false,
    viewport: null,
    ignoreHTTPSErrors: true,
    trace: "on",
    screenshot: {
      mode: "on",
      fullPage: true,
    },
    baseURL: process.env.BASE_URL || "https://automationteststore.com/",
    storageState: "storageState.json",
    launchOptions: {
      args: ["--start-maximized"],
    },
  },
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "Firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "WebKit",
      use: { browserName: "webkit" },
    },
  ],
};
