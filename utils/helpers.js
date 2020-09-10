const mathjs = require('mathjs');
const moment = require('moment');
const fs = require('fs-extra');

module.exports = class Helpers {
  static async toFloatNumber(string, fractionDigits = 3) {
    const number = +string;
    return +number.toFixed(fractionDigits);
  }

  static async divideIn(operand1, operand2, fractionDigits) {
    return this.toFloatNumber(operand1 / operand2, fractionDigits);
  }

  static async calculateMedian(array, fractionDigits) {
    return this.toFloatNumber(mathjs.median(array), fractionDigits);
  }

  static async calculateAverage(array, fractionDigits) {
    return this.toFloatNumber(mathjs.mean(array), fractionDigits);
  }

  static async clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  static async getScreenshotName() {
    return `${moment().valueOf()}.jpg`;
  }

  static async createDirectory(path) {
    if (!fs.existsSync(`${path}`)) {
      fs.mkdirSync(`${path}`);
    }
  }
};
