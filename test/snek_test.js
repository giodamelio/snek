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

test.serial('print a single snek segment', (t) => {
  snek.snekSegment(
    snek.SNEK_CHARS,
    1,
    t.context.stream
  );
  t.deepEqual(
    t.context.outputLog,
    [
      '⠁', '\b', '⠃', '\b', '⠇', '\b', '⠧',
      '⠄', '\b', '⠤', '\b', '⠴', '\b', '⠼',
      '⠁', '\b', '⠉',
    ]
  );
});

test.serial('print two snek segments', (t) => {
  snek.snekCycles(
    2,
    snek.SNEK_CHARS,
    1,
    t.context.stream
  );
  const expected = [
    '⠁', '\b', '⠃', '\b', '⠇', '\b', '⠧',
    '⠄', '\b', '⠤', '\b', '⠴', '\b', '⠼',
    '⠁', '\b', '⠉',

    '⠁', '\b', '⠃', '\b', '⠇', '\b', '⠧',
    '⠄', '\b', '⠤', '\b', '⠴', '\b', '⠼',
    '⠁', '\b', '⠉',
  ];
  t.deepEqual(t.context.outputLog.length, expected.length);
});

