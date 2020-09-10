const fs = require('fs-extra');
const createHtml = require('create-html');
const Helpers = require('./helpers');
const dirPath = 'performance/results';

class HtmlCreator {
  async saveHtml(path, html) {
    await Helpers.createDirectory(dirPath);
    return fs.writeFileSync(`${dirPath}/result-${path}.html`, html);
  }

  async createHtml(body, css) {
    return createHtml({
      title: 'Performance test results',
      body,
      css,
    });
  }
}

module.exports = new HtmlCreator();
