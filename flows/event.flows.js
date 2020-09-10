const mainPage = require('../components/main.page');

class EventFlows {
  async openMobileLiveEvents(url) {
    await mainPage.open(url);
    await mainPage.clickSportsTab();
    await mainPage.clickLineHeaderLiveTab();
  }

  async openMobileUpcomingEvents(url) {
    await mainPage.open(url);
    await mainPage.clickSportsTab();
    await mainPage.clickLineHeaderUpcomingMatchesTab();
  }

  async openDesktopLiveEvents(url) {
    await mainPage.open(url);
    await mainPage.clickTabBarLiveEventsTab();
  }

  async openDesktopUpcomingEvents(url) {
    await mainPage.open(url);
    await mainPage.clickTabBarUpcomingMatchesTab();
  }
}

module.exports = new EventFlows();
