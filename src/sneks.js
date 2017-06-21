// ⠧⠼⠉⠧⠼⠉
exports.TINY_SNEK = {
  delay: 50,
  width: 3,
  height: 1,
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
  delay: 25,
  width: 4,
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
