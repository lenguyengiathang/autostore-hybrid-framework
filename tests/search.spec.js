const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');

test('message displayed when no product matches the search input', async ({ homePage }) => {
  const searchResultsPage = await homePage.searchWithValue('nonexistentproduct');
  
});