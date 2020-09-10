const Helpers = require('../utils/helpers');
const puppeteer = require('puppeteer');

module.exports = class AbstractPage {
  constructor(relativeUrl) {
    this.relativeUrl = relativeUrl;
    this.browser = null;
    this.page = null;
  }

  async init(chromeFlags, resolution) {
    this.browser = await puppeteer.launch({
      args: chromeFlags,
    });
    this.page = await this.browser.newPage();
    await this.page.setViewport(resolution);
  }

  async open(baseUrl) {
    await this.page.goto(`${baseUrl}${this.relativeUrl}`);
  }

  async close() {
    await this.browser.close();
  }

  async getCurrentUrl() {
    return await this.page.url();
  }

  async waitForPageLoad() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      await this.page.waitForNavigation({ waitUntil: 'load' }),
    ]);
  }

  async takeScreenshot(name) {
    const path = 'performance/results';
    await Helpers.createDirectory(path);
    await this.page.screenshot({
      path: `${path}/${name}`,
      type: 'jpeg',
      fullPage: false,
    });
  }
};
