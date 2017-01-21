module.exports = function *(array) {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    for (const item of array) {
      yield item;
    }
  }
};
