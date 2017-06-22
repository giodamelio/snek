module.exports = {
  setTimeout(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, delay);
    });
  },
};
