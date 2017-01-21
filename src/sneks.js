// ⠧⠼⠉⠧⠼⠉
exports.NORMAL_SNEK = {
  delay: 100,
  maxWidth: process.stdout.columns,
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
  delay: 25,
  maxWidth: process.stdout.columns,
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
