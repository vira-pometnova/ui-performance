const lighthouseSettings = require('./lighthouse.settings');
const urls = require('../test-data/urls.json');
const resolution = process.env.RESOLUTION || '';
const brand = process.env.BRAND || '';
const env = process.env.ENV || '';
const retries = process.env.RETRIES || 4;
const baseUrl = urls[env][brand];
const settings =
  resolution === 'mobile'
    ? lighthouseSettings.mobile
    : lighthouseSettings.desktop;

module.exports = {
  settings,
  baseUrl,
  retries,
  resolution,
  brand,
  env,
};
