// ⠧⠼⠉⠧⠼⠉
exports.NORMAL_SNEK = {
  delay: 10,
  width: process.stdout.columns,
  before: [
    ['reset'],
  ],
  body: [
    ['segment', ['⠁', '⠃', '⠇', '⠧']],
    ['segment', ['⠄', '⠤', '⠴', '⠼']],
    ['segment', ['⠁', '⠉']],
  ],
  after: [
    ['newline'],
  ],
};

exports.TALL_SNEK = {
  delay: 10,
  width: process.stdout.columns,
  height: 2,
  before: [
    ['reset'],
  ],
  body: [
    ['segment', ['⠁', '⠃', '⠇']],
    ['move', 'down'],
    ['segment', ['⠁', '⠃', '⠇', '⠧']],
    ['segment', ['⠄', '⠤', '⠴', '⠼']],
    ['move', 'up'],
    ['segment', ['⠠', '⠰', '⠸']],
    ['segment', ['⠁', '⠉']],
  ],
  after: [
    ['newline'],
    ['newline'],
  ],
};
