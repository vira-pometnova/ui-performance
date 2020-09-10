const CommonPage = require('./common.page');

class MainPage extends CommonPage {
  constructor() {
    super('/');
  }
}

module.exports = new MainPage();
