module.exports = {
  'is-one-of': (predicateValue, values) => values.includes(predicateValue),
  'is-not-one-of': (predicateValue, values) => !values.includes(predicateValue),
  'ends-with': (predicateValue, values) =>
    values.some((value) => predicateValue.endsWith(value)),
  'does-not-end-with': (predicateValue, values) =>
    values.every((value) => !predicateValue.endsWith(value)),
  'starts-with': (predicateValue, values) =>
    values.some((value) => predicateValue.startsWith(value)),
  'does-not-start-with': (predicateValue, values) =>
    values.every((value) => !predicateValue.startsWith(value)),
  matches: (predicateValue, values) =>
    values.some((value) => RegExp(value).test(predicateValue)),
  'does-not-match': (predicateValue, values) =>
    values.every((value) => !RegExp(value).test(predicateValue)),
  contains: (predicateValue, values) =>
    values.some((value) => predicateValue.includes(value)),
  'does-not-contain': (predicateValue, values) =>
    values.every((value) => !predicateValue.includes(value)),
  'greater-than': (predicateValue, values) =>
    values.some((value) => predicateValue > value),
  'less-than': (predicateValue, values) =>
    values.some((value) => predicateValue < value),
  'greater-than-or-equal-to': (predicateValue, values) =>
    values.some((value) => predicateValue >= value),
  'less-than-or-equal-to': (predicateValue, values) =>
    values.some((value) => predicateValue <= value),
  is: (predicateValue, [value]) => value === predicateValue,
  'is-not': (predicateValue, [value]) => value !== predicateValue,
};
