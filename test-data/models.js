const audits = [
  { name: 'firstContentfulPaint', values: [] },
  { name: 'totalBlockingTime', values: [] },
  { name: 'timeToInteractive', values: [] },
  { name: 'speedIndex', values: [] },
  { name: 'largestContentfulPaint', values: [] },
  { name: 'cumulativeLayoutShift', values: [] },
];
const categories = [
  { name: 'performance', values: [] },
  { name: 'accessibility', values: [] },
  { name: 'seo', values: [] },
];

async function copyObjectPropertiesToModel(obj, model) {
  for (const prop in obj) {
    model.map((el) => {
      if (prop === el.name) {
        el.values.push(obj[prop]);
      }
    });
  }
  return model;
}

module.exports = {
  audits,
  categories,
  copyObjectPropertiesToModel: copyObjectPropertiesToModel,
};
