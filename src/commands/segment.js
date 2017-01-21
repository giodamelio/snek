const sleep = require('sleep');

module.exports = function(output, chars, delay) {
  for (const char of chars) {
    output.write(char);
    sleep.msleep(delay);
    if (chars.indexOf(char) + 1 !== chars.length) {
      output.write('\b');
    }
  }
};
