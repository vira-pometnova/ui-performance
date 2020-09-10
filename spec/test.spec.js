const livePage = require('../components/live.page');
const Helpers = require('../utils/helpers');
const mustache = require('mustache');
const template = require('../test-data/report.template');
const css = '../test-data/report.css';
const models = require('../test-data/models');
const performanceFlows = require('../flows/performance.flows');
const lighthouseMetrics = require('../lighthouse/lighthoseMetrics');
const chromeOptions = require('../configs/chromeOptions');
const config = require('../configs/config');
const mainPage = require('../components/main.page');
const configLoader = require('../web-api/configLoader');
const configMapper = require('../web-api/configMapper');
const eventFlows = require('../flows/event.flows');
const htmlCreator = require('../utils/htmlCreator');
const moment = require('moment');

describe('Performance', async function() {
  let results,
    categoryScores,
    auditDisplayValues,
    eventsCount,
    coefDisplayingTime,
    screenshotsSource;
  let view = {
    brand: config.brand,
    resolution: config.resolution,
    env: config.env,
    date: moment(),
  };
  const featureConfig = await configLoader.getFeatureConfig(config.baseUrl);
  const isSportsNavigationMenuEnabled = await configMapper.isFeatureEnabled(
    featureConfig,
    'sportNavigationMenu',
    config.brand,
  );

  after(async () => {
    const output = await mustache.render(template, view);
    const html = await htmlCreator.createHtml(output, css);
    await htmlCreator.saveHtml(
      `${config.brand}-${config.resolution}-${config.env}`,
      html,
    );
  });

  beforeEach(async () => {
    results = await Helpers.clone(models.audits);
    auditDisplayValues = await Helpers.clone(models.audits);
    categoryScores = await Helpers.clone(models.categories);
    eventsCount = [];
    coefDisplayingTime = [];
    screenshotsSource = [];
  });

  it('Open main page', async function() {
    this.timeout(90000 * config.retries);
    view.name1 = 'Open main page';

    for (let i = 0; i <= config.retries; i++) {
      await mainPage.init(
        chromeOptions.chromeFlags,
        config.settings.resolution,
      );

      const screenshotName = await Helpers.getScreenshotName();
      const displayingTime = await performanceFlows.getPageCoefficientsTimeToBeDisplayed(
        config.baseUrl,
      );
      await mainPage.takeScreenshot(screenshotName);

      eventsCount.push(await mainPage.getEventCardsCount());
      await mainPage.close();
      coefDisplayingTime.push(displayingTime);
      screenshotsSource.push(screenshotName);

      const lhReport = await lighthouseMetrics.getLighthouseReport(
        chromeOptions,
        config.baseUrl,
        config.settings,
      );
      const lhCategories = await lighthouseMetrics.getLighthouseCategories(
        lhReport,
      );
      categoryScores = await models.copyObjectPropertiesToModel(
        lhCategories,
        categoryScores,
      );
      const lhAuditsDisplayValues = await lighthouseMetrics.getLighthouseAuditsDisplayValues(
        lhReport,
      );
      auditDisplayValues = await models.copyObjectPropertiesToModel(
        lhAuditsDisplayValues,
        auditDisplayValues,
      );
      const lhAuditsNumericValues = await lighthouseMetrics.getLighthouseAuditsInSeconds(
        lhReport,
      );
      results = await models.copyObjectPropertiesToModel(
        lhAuditsNumericValues,
        results,
      );
    }
    const mpMedian = await Helpers.clone(results);
    mpMedian.map(
      async (value) =>
        (value.values = await Helpers.calculateMedian(value.values)),
    );
    const mpMean = await Helpers.clone(results);
    mpMean.map(
      async (value) =>
        (value.values = await Helpers.calculateAverage(value.values)),
    );

    view.eventsCount1 = eventsCount;
    view.category1 = categoryScores;
    view.audit1 = auditDisplayValues;
    view.average1 = mpMean;
    view.median1 = mpMedian;
    view.coefDisplayingTime1 = coefDisplayingTime;
    view.screenshotsSrc1 = screenshotsSource;
    view.coefAverage1 = await Helpers.calculateAverage(coefDisplayingTime);
    view.coefMedian1 = await Helpers.calculateMedian(coefDisplayingTime);
  });

  it('Open live page', async function() {
    this.timeout(90000 * config.retries);
    view.name2 = 'Open live page';

    for (let i = 0; i <= config.retries; i++) {
      await mainPage.init(
        chromeOptions.chromeFlags,
        config.settings.resolution,
      );

      if (isSportsNavigationMenuEnabled) {
        config.resolution === 'mobile'
          ? await eventFlows.openMobileLiveEvents(config.baseUrl)
          : await eventFlows.openDesktopLiveEvents(config.baseUrl);
      } else {
        await mainPage.open(config.baseUrl);
        await mainPage.clickTabBarLiveTab();
      }

      const livePageUrl = await mainPage.getCurrentUrl();
      eventsCount.push(await mainPage.getEventCardsCount());
      const screenshotName = await Helpers.getScreenshotName();
      const displayingTime = await performanceFlows.getPageCoefficientsTimeToBeDisplayed(
        livePageUrl,
      );
      await mainPage.takeScreenshot(screenshotName);

      coefDisplayingTime.push(displayingTime);
      screenshotsSource.push(screenshotName);
      await mainPage.close();

      const lhReport = await lighthouseMetrics.getLighthouseReport(
        chromeOptions,
        livePageUrl,
        config.settings,
      );
      const lhCategories = await lighthouseMetrics.getLighthouseCategories(
        lhReport,
      );
      categoryScores = await models.copyObjectPropertiesToModel(
        lhCategories,
        categoryScores,
      );
      const lhAuditsDisplayValues = await lighthouseMetrics.getLighthouseAuditsDisplayValues(
        lhReport,
      );
      auditDisplayValues = await models.copyObjectPropertiesToModel(
        lhAuditsDisplayValues,
        auditDisplayValues,
      );
      const lhAuditsNumericValues = await lighthouseMetrics.getLighthouseAuditsInSeconds(
        lhReport,
      );
      results = await models.copyObjectPropertiesToModel(
        lhAuditsNumericValues,
        results,
      );
    }
    const mpMedian = await Helpers.clone(results);
    mpMedian.map(
      async (value) =>
        (value.values = await Helpers.calculateMedian(value.values)),
    );
    const mpMean = await Helpers.clone(results);
    mpMean.map(
      async (value) =>
        (value.values = await Helpers.calculateAverage(value.values)),
    );

    view.eventsCount2 = eventsCount;
    view.category2 = categoryScores;
    view.audit2 = auditDisplayValues;
    view.average2 = mpMean;
    view.median2 = mpMedian;
    view.coefDisplayingTime2 = coefDisplayingTime;
    view.screenshotsSrc2 = screenshotsSource;
    view.coefAverage2 = await Helpers.calculateAverage(coefDisplayingTime);
    view.coefMedian2 = await Helpers.calculateMedian(coefDisplayingTime);
  });

  if (isSportsNavigationMenuEnabled) {
    it('Open prematch page', async function() {
      this.timeout(90000 * config.retries);
      view.name3 = 'Open prematch page';

      for (let i = 0; i <= config.retries; i++) {
        await mainPage.init(
          chromeOptions.chromeFlags,
          config.settings.resolution,
        );

        config.resolution === 'mobile'
          ? await eventFlows.openMobileUpcomingEvents(config.baseUrl)
          : await eventFlows.openDesktopUpcomingEvents(config.baseUrl);
        const prematchPageUrl = await mainPage.getCurrentUrl();
        eventsCount.push(await mainPage.getEventCardsCount());

        const screenshotName = await Helpers.getScreenshotName();
        const displayingTime = await performanceFlows.getPageCoefficientsTimeToBeDisplayed(
          prematchPageUrl,
        );
        await mainPage.takeScreenshot(screenshotName);

        coefDisplayingTime.push(displayingTime);
        screenshotsSource.push(screenshotName);
        await mainPage.close();

        const lhReport = await lighthouseMetrics.getLighthouseReport(
          chromeOptions,
          prematchPageUrl,
          config.settings,
        );

        const lhCategories = await lighthouseMetrics.getLighthouseCategories(
          lhReport,
        );
        categoryScores = await models.copyObjectPropertiesToModel(
          lhCategories,
          categoryScores,
        );
        const lhAuditsDisplayValues = await lighthouseMetrics.getLighthouseAuditsDisplayValues(
          lhReport,
        );
        auditDisplayValues = await models.copyObjectPropertiesToModel(
          lhAuditsDisplayValues,
          auditDisplayValues,
        );
        const lhAuditsNumericValues = await lighthouseMetrics.getLighthouseAuditsInSeconds(
          lhReport,
        );
        results = await models.copyObjectPropertiesToModel(
          lhAuditsNumericValues,
          results,
        );
      }
      const mpMedian = await Helpers.clone(results);
      mpMedian.map(
        async (value) =>
          (value.values = await Helpers.calculateMedian(value.values)),
      );
      const mpMean = await Helpers.clone(results);
      mpMean.map(
        async (value) =>
          (value.values = await Helpers.calculateAverage(value.values)),
      );

      view.eventsCount3 = eventsCount;
      view.category3 = categoryScores;
      view.audit3 = auditDisplayValues;
      view.average3 = mpMean;
      view.median3 = mpMedian;
      view.coefDisplayingTime3 = coefDisplayingTime;
      view.screenshotsSrc3 = screenshotsSource;
      view.coefAverage3 = await Helpers.calculateAverage(coefDisplayingTime);
      view.coefMedian3 = await Helpers.calculateMedian(coefDisplayingTime);
    });
  }
});
