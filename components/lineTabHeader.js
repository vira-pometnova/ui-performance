class LineTabHeader {
  get $tabLive() {
    return '[data-id="line-tab-live"]';
  }

  get $tabUpcomingMatches() {
    return '[data-id="line-tab-prematch"]';
  }
}

module.exports = new LineTabHeader();
