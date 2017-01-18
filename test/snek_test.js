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

test.serial('print a single snek segment', (t) => {
  new Snek({
    output: t.context.stream,
    delay: 1,
  }).segment();
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
  // The default snake has three chars in a segment
  new Snek({
    output: t.context.stream,
    delay: 1,
  }).draw(6);
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

test.serial('create a snek with default options', (t) => {
  new Snek().draw();
  t.pass();
});

