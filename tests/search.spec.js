const { expect } = require("@playwright/test");
const { test } = require("../fixtures/fixtures");
const SearchResultsPage = require("../pages/SearchResultsPage");

test.describe("Search Tests", () => {
  test("message displayed when no product matches the search input", async ({ homePage }) => {
    const searchResultsPage = await homePage.searchWithValue("nonexistentproduct");
    await expect(searchResultsPage.noProductsFoundMessage).toContainText("There is no product that matches the search criteria.");
  });

  test("search a product by all categories", async ({ homePage }) => {
    const searchResultsPage = await homePage.searchWithValue("cream");
    const displayed = await searchResultsPage.areProductsDisplayedCorrectly("cream");
    await expect(displayed).toBeTruthy();
  });
});
