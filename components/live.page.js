const CommonPage = require('./common.page');

class LivePage extends CommonPage {
  constructor() {
    super('/live');
  }
}

module.exports = new LivePage();
