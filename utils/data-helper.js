const faker = require("faker");

class DataHelper {
  static getRandomFirstName() {
    return faker.person.firstName();
  }

  static getRandomLastName() {
    return faker.person.lastName();
  }
}

module.exports = DataHelper;
