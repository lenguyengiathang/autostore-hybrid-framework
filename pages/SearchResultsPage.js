const BasePage = require("../core/BasePage");

class SearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInputTextbox = page.locator("input#keyword");
    this.categoryDropdownList = page.locator("select#category_id");
    this.searchInProductDescriptionsCheckbox = page.getByRole("checkbox", { name: "Search in product descriptions" });
    this.searchInProductModelCheckbox = page.getByRole("checkbox", { name: "Search in product model" });
    this.searchButton = page.getByRole("button", { name: "Search" });
    this.noProductsFoundMessage = page.locator(
      '//h4[contains(.,"Products meeting the search criteria")]/following-sibling::div'
    );
  }

  async fillInSearchInputTextbox(text) {
    await this.fillTextbox(this.searchInputTextbox, text);
  }

  async selectOptionCategoryDropdown(option) {
    await this.categoryDropdownList.selectOption(option);
  }

  async clickSearchInProductDescriptionsCheckbox() {
    await this.searchInProductDescriptionsCheckbox.clickElement();
  }

  async clickSearchInProductModelCheckbox() {
    await this.searchInProductModelCheckbox.clickElement();
  }

  async clickSearchButton() {
    await this.clickElement(this.searchButton);
  }

  async areProductsDisplayedCorrectly(searchValue) {
    await this.pageTitle.filter({ hasText: "Search" }).waitFor({ state: "visible" });
    const count = await this.product.count();

    if (count === 0) {
      return false;
    }

    for (let i = 0; i < count; i++) {
      const element = this.product.nth(i);
      let text = await element.textContent();
      text = text.toLowerCase();
      const lowerSearchValue = searchValue.toLowerCase();

      if (text.includes(lowerSearchValue) === false) {
        return false;
      }
    }

    return true;
  }
}

module.exports = SearchResultsPage;
