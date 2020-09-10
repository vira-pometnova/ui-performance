class EventCard {
  get $eventCard() {
    return '[data-id="event-card"]';
  }

  get $animatedOdd() {
    return '[data-id="animated-odds-value"]';
  }
}

module.exports = new EventCard();
