// ⠧⠼⠉⠧⠼⠉
exports.NORMAL_SNEK = {
  delay: 100,
  width: process.stdout.columns,
  height: 2,
  before: [],
  body: [
    ['segment', ['⠁', '⠃', '⠇', '⠧']],
    ['move', 'right'],
    ['segment', ['⠄', '⠤', '⠴', '⠼']],
    ['move', 'right'],
    ['segment', ['⠁', '⠉']],
    ['move', 'right'],
  ],
  after: [],
};

exports.TALL_SNEK = {
  delay: 100,
  width: process.stdout.columns,
  height: 2,
  before: [],
  body: [
    ['segment', ['⠁', '⠃', '⠇', '⡇']],
    ['move', 'down'],
    ['segment', ['⠁', '⠃', '⠇', '⡇', '⣇']],
    ['move', 'right'],
    ['segment', ['⢀', '⣀']],
    ['move', 'right'],
    ['segment', ['⡀', '⢠', '⢰', '⢸']],
    ['move', 'up'],
    ['segment', ['⡀', '⢠', '⢰', '⢸', '⡏']],
    ['move', 'right'],
    ['segment', ['⠁', '⠉']],
    ['move', 'right'],
  ],
  after: [],
};
