const BasePage = require('../core/BasePage');

class CreateAccountPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameTextbox = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameTextbox = page.getByRole('textbox', { name: 'Last Name' });
    this.emailTextbox = page.getByRole('textbox', { name: 'E-Mail' });
    this.telephoneTextbox = page.getByRole('textbox', { name: 'Telephone' });
    this.faxTextbox = page.getByRole('textbox', { name: 'Fax' });
    this.companyTextbox = page.getByRole('textbox', { name: 'Company' });
    this.address1Textbox = page.getByRole('textbox', { name: 'Address 1' });
    this.address2Textbox = page.getByRole('textbox', { name: 'Address 2' });    
    this.cityTextbox = page.getByRole('textbox', { name: 'City' });
    this.regionStateDropdown = page.getByRole('listbox', { name: 'Region / State' });
    this.zipcodeTextbox = page.getByRole('textbox', { name: 'ZIP Code' });
    this.countryDropdown = page.getByRole('listbox', { name: 'Country' });
    this.loginNameTextbox = page.getByRole('textbox', { name: 'Login name' });
    this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
    this.confirmPasswordTextbox = page.getByRole('textbox', { name: 'Confirm Password' });
    this.dynamicSubscribeRadioButtonByLabel = (label) => page.getByRole('radio', { name: label });
    this.privacyPolicyCheckbox = page.getByRole('checkbox', { name: 'I have read and agree to the Privacy Policy' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async fillFirstNameTextbox(firstName) {
    await this.fillTextbox(this.firstNameTextbox, firstName);
  }

  async fillLastNameTextbox(lastName) {
    await this.fillTextbox(this.lastNameTextbox, lastName);
  } 

  async fillEmailTextbox(email) {
    await this.fillTextbox(this.emailTextbox, email);
  }

  async fillTelephoneTextbox(telephone) {
    await this.fillTextbox(this.telephoneTextbox, telephone);
  } 

  async fillFaxTextbox(fax) {
    await this.fillTextbox(this.faxTextbox, fax);
  }

  async fillCompanyTextbox(company) {
    await this.fillTextbox(this.companyTextbox, company);
  }

  async fillAddress1Textbox(address1) {
    await this.fillTextbox(this.address1Textbox, address1);
  }

  async fillAddress2Textbox(address2) {
    await this.fillTextbox(this.address2Textbox, address2);
  }

  async fillCityTextbox(city) {
    await this.fillTextbox(this.cityTextbox, city);
  }

  async selectRegionStateDropdown(regionState) {   
    await this.selectOptionDropdown(this.regionStateDropdown, regionState);
  }

  async fillZipcodeTextbox(zipcode) {
    await this.fillTextbox(this.zipcodeTextbox, zipcode);
  } 

  async selectCountryDropdown(country) {
    await this.selectOptionDropdown(this.countryDropdown, country);
  }

  async fillLoginNameTextbox(loginName) {
    await this.fillTextbox(this.loginNameTextbox, loginName);
  } 

  async fillPasswordTextbox(password) {
    await this.fillTextbox(this.passwordTextbox, password);
  }

  async fillConfirmPasswordTextbox(confirmPassword) {
    await this.fillTextbox(this.confirmPasswordTextbox, confirmPassword);
  }

  async clickDynamicSubscribeRadioButton(label) {
    const radioButton = this.dynamicSubscribeRadioButtonByLabel(label);
    await this.clickElement(radioButton);
  }
  async clickPrivacyPolicyCheckbox() {
    await this.clickElement(this.privacyPolicyCheckbox);
  }

  async clickContinueButton() {
    await this.clickElement(this.continueButton);
  }
  
}

module.exports = CreateAccountPage;