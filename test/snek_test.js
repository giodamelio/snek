const test = require('ava').test;

const Snek = require('../src');

test.beforeEach((t) => {
  t.context.outputLog = [];
  t.context.stream = {
    write(data) {
      t.context.outputLog.push(data);
    },
  };
});

test.serial('', (t) => {
});

