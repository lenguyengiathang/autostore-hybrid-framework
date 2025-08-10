const BasePage = require('../core/BasePage');

class SearchPage extends BasePage{
    constructor(page) {
        super(page);
        this.searchInputTextbox = page.locator('input#keyword');
        this.categoryDropdownList = page.locator('select#category_id');
        this.searchInProductDescriptionsCheckbox = page.getByRole('checkbox', { name: 'Search in product descriptions' });
        this.searchInProductModelCheckbox = page.getByRole('checkbox', { name: 'Search in product model' });
        this.searchButton = page.getByRole('button', { name: 'Search' });
    }

    async fillInSearchInputTextbox(text) {
        await this.fillTextbox(this.searchInputTextbox, text);
    }

    async selectOptionCategoryDropdown(option) {
        await this.categoryDropdownList.selectOption(option);
    }

    async clickSearchInProductDescriptionsCheckbox() {
        await this.searchInProductDescriptionsCheckbox.clickElement()
    }

    async clickSearchInProductModelCheckbox() {
        await this.searchInProductModelCheckbox.clickElement()
    }

    async clickSearchButton() {
        await this.clickElement(this.searchButton);
    }
    
}

module.exports = SearchPage;