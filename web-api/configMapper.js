const operators = require('./predicateOperators');
const jsonFind = require('json-find');

class ConfigMapper {
  getFeatureConfiguration(config, featureName) {
    const validConfig = jsonFind(config);
    return validConfig.featureConfigurations.filter(
      (item) => item.feature === featureName,
    );
  }

  isFeatureEnabled(config, featureName, brand) {
    const featureConfiguration = this.getFeatureConfiguration(
      config,
      featureName,
    );
    const configuration = featureConfiguration[0];
    const predicates = this.getPredicates(brand);

    if (configuration) {
      if (
        Object.prototype.hasOwnProperty.call(configuration, 'enabled') &&
        !configuration.enabled
      ) {
        return configuration.disabledVariation;
      }

      const rule = this.matchRule(configuration.rules, predicates);

      if (!rule) {
        return configuration.defaultVariation;
      }

      return rule.variation;
    }
    return configuration;
  }

  getPredicates(brand) {
    return {
      'user.isLoggedIn': true, // TODO: check is user logged in
      'app.brand': brand,
    };
  }

  matchRule(rules = [], predicates) {
    return rules.find((rule) =>
      rule.conditions.every((condition) =>
        this.checkCondition({
          ...condition,
          predicateValue: predicates[condition.predicate],
        }),
      ),
    );
  }

  checkCondition({ operator, predicateValue, values }) {
    return operators[operator](predicateValue, values);
  }
}

module.exports = new ConfigMapper();
