const test = require('ava').test;

const snek = require('../src');

test.beforeEach((t) => {
  t.context.outputLog = [];
  t.context.stream = {
    write(data) {
      t.context.outputLog.push(data);
    },
  };
});

test.serial('print a single snek cycle', (t) => {
  snek.snekCycle(snek.SNEK_CHARS, snek.SNEK_DELAY, t.context.stream);
  t.deepEqual(
    t.context.outputLog,
    [
      '⠁', '\b', '⠃', '\b', '⠇', '\b', '⠧',
      '⠄', '\b', '⠤', '\b', '⠴', '\b', '⠼',
      '⠁', '\b', '⠉',
    ]
  );
});

