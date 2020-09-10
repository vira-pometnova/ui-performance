const request = require('sync-request');
const headers = {
  'user-agent':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
};

class ConfigLoader {
  getManifest(baseUrl) {
    const res = request('GET', `${baseUrl}/config/manifest.json`, {
      headers,
    });
    const response = res.getBody('utf-8');
    return JSON.parse(response);
  }

  getFeatureConfig(baseUrl) {
    const configName = this.getManifest(baseUrl).features;
    return this.getConfigByName(baseUrl, configName);
  }

  getConfigByName(baseUrl, configName) {
    const res = request('GET', `${baseUrl}/config/${configName}`, {
      headers,
    });
    const response = res.getBody('utf-8');
    return JSON.parse(response);
  }
}

module.exports = new ConfigLoader();
