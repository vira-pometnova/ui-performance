const moment = require('moment');
const mainPage = require('../components/main.page');

class PerformanceFlows {
  async getPageCoefficientsTimeToBeDisplayed(url) {
    const startTime = await moment().valueOf();
    await Promise.all([
      mainPage.open(url),
      mainPage.waitForPageLoad(),
      mainPage.waitForFirstCoefficientToBeDisplayed(),
    ]);
    const endTime = await moment().valueOf();
    return (endTime - startTime) / 1000;
  }
}

module.exports = new PerformanceFlows();
