const lighthouse = require('lighthouse');
const puppeteer = require('puppeteer');
const Helpers = require('../utils/helpers');

const chromeLauncher = require('chrome-launcher');
const reportGenerator = require('lighthouse/lighthouse-core/report/report-generator');
const request = require('request');
const util = require('util');

class LighthouseMetrics {
  async getLighthouseReport(chromeOptions, url, config) {
    const chrome = await chromeLauncher.launch(chromeOptions);
    chromeOptions.port = chrome.port;

    const resp = await util.promisify(request)(
      `http://localhost:${chromeOptions.port}/json/version`,
    );
    const { webSocketDebuggerUrl } = JSON.parse(resp.body);
    const browser = await puppeteer.connect({
      browserWSEndpoint: webSocketDebuggerUrl,
    });

    const { lhr } = await lighthouse(url, chromeOptions, config);
    await browser.disconnect();
    await chrome.kill();

    const json = reportGenerator.generateReport(lhr, 'json');
    return JSON.parse(json);
  }

  async getLighthouseCategories(lhReport) {
    const { categories } = lhReport;
    const performance = categories.performance.score;
    const accessibility = categories.accessibility.score;
    const seo = categories.seo.score;
    return { performance, accessibility, seo };
  }

  async getLighthouseAudits(lhReport) {
    const { audits } = lhReport;
    const firstContentfulPaint = audits['first-contentful-paint'];
    const totalBlockingTime = audits['total-blocking-time'];
    const timeToInteractive = audits.interactive;
    const speedIndex = audits['speed-index'];
    const largestContentfulPaint = audits['largest-contentful-paint'];
    const cumulativeLayoutShift = audits['cumulative-layout-shift'];
    return {
      firstContentfulPaint,
      totalBlockingTime,
      timeToInteractive,
      speedIndex,
      largestContentfulPaint,
      cumulativeLayoutShift,
    };
  }

  async getLighthouseAuditsDisplayValues(lhReport) {
    let displayValues = {};
    const lhAudits = await this.getLighthouseAudits(lhReport);
    for (const audit in lhAudits) {
      displayValues[audit] = lhAudits[audit].displayValue;
    }
    return displayValues;
  }

  async getLighthouseAuditsNumericValues(lhReport) {
    let numericValues = {};
    const lhAudits = await this.getLighthouseAudits(lhReport);
    for (const audit in lhAudits) {
      numericValues[audit] = lhAudits[audit].numericValue;
    }
    return numericValues;
  }

  async getLighthouseAuditsInSeconds(lhReport) {
    let valuesInSeconds = {};
    const auditsNumericValues = await this.getLighthouseAuditsNumericValues(
      lhReport,
    );
    for (const audit in auditsNumericValues) {
      if (audit === 'cumulativeLayoutShift') {
        valuesInSeconds[audit] = await Helpers.toFloatNumber(
          auditsNumericValues[audit],
        );
      } else {
        valuesInSeconds[audit] = await Helpers.divideIn(
          auditsNumericValues[audit],
          1000,
        );
      }
    }
    return valuesInSeconds;
  }
}

module.exports = new LighthouseMetrics();
