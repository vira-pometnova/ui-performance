const AbstractPage = require('./abstract.page');
const eventCard = require('./eventCard');
const tabBar = require('./tabBar');
const lineTabHeader = require('./lineTabHeader');

module.exports = class CommonPage extends AbstractPage {
  async getEventCardsCount() {
    await this.page.waitForSelector(eventCard.$eventCard);
    const eventCards = await this.page.$$(eventCard.$eventCard);
    return eventCards.length;
  }

  async clickSportsTab() {
    await this.page.waitForSelector(tabBar.$sportsTab);
    await this.page.click(tabBar.$sportsTab);
  }

  async clickLineHeaderLiveTab() {
    await this.page.waitForSelector(lineTabHeader.$tabLive);
    await this.page.click(lineTabHeader.$tabLive);
  }

  async clickLineHeaderUpcomingMatchesTab() {
    await this.page.waitForSelector(lineTabHeader.$tabUpcomingMatches);
    await this.page.click(lineTabHeader.$tabUpcomingMatches);
  }

  async clickTabBarLiveEventsTab() {
    await this.page.waitForSelector(tabBar.$liveEventsTab);
    await this.page.click(tabBar.$liveEventsTab);
  }

  async clickTabBarUpcomingMatchesTab() {
    await this.page.waitForSelector(tabBar.$upcomingMatchesTab);
    await this.page.click(tabBar.$upcomingMatchesTab);
  }

  async waitForFirstCoefficientToBeDisplayed() {
    await this.page.waitForSelector(eventCard.$eventCard, { visible: true });
    await this.page.waitForSelector(eventCard.$animatedOdd, { visible: true });
  }

  async clickTabBarLiveTab() {
    await this.page.waitForSelector(tabBar.$liveTab);
    await this.page.click(tabBar.$liveTab);
  }
};
