class TabBar {
  get $sportsTab() {
    return '[data-id="tab-sports"]';
  }

  get $liveEventsTab() {
    return '[data-id="tab-sport_menu_live"]';
  }

  get $upcomingMatchesTab() {
    return '[data-id="tab-sport_menu_prematch"]';
  }

  get $liveTab() {
    return '[data-id="tab-live"]';
  }
}

module.exports = new TabBar();
