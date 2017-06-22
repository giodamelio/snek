const util = require('../src/util');

it('time delayed promise', () => {
  return expect(util.setTimeout(500)).resolves.toBeUndefined();
});
