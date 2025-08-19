const AccountLoginPage = require('../pages/AccountLoginPage');
const AccountDashboardPage = require('../pages/AccountDashboardPage');
const SearchResultsPage = require('../pages/SearchResultsPage');

class PageGeneratorManager {
  static getHomePage(page) {
    const HomePage = require('../pages/HomePage');
    return new HomePage(page);
  }

    static getCreateAccountPage(page) { 
    const CreateAccountPage = require('../pages/CreateAccountPage');
    return new CreateAccountPage(page);
  }

  static getAccountLoginPage(page) {
    const AccountLoginPage = require('../pages/AccountLoginPage');
    return new AccountLoginPage(page);
  }

  static getSearchResultsPage(page) {
    const SearchResultsPage = require('../pages/SearchResultsPage');  
    return new SearchResultsPage(page);
  }

  static getAccountDashboardPage(page) {
    const AccountDashboardPage = require('../pages/AccountDashboardPage');  
    return new AccountDashboardPage(page);
  }
}

module.exports = PageGeneratorManager;