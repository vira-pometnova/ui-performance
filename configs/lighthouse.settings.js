module.exports = {
  mobile: {
    extends: 'lighthouse:default',
    settings: {
      onlyCategories: ['performance', 'accessibility', 'seo'],
      emulatedFormFactor: 'mobile',
    },
    resolution: { width: 420, height: 840 },
  },
  desktop: {
    extends: 'lighthouse:default',
    settings: {
      onlyCategories: ['performance', 'accessibility', 'seo'],
      emulatedFormFactor: 'desktop',
    },
    resolution: { width: 1280, height: 786 },
  },
};
