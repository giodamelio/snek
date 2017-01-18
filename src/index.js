const sleep = require('sleep');

// ⠧⠼⠉⠧⠼⠉
// eslint-disable-next-line thehelp/no-mutation
exports.SNEK_CHARS = [
  ['⠁', '⠃', '⠇', '⠧'],
  ['⠄', '⠤', '⠴', '⠼'],
  ['⠁', '⠉'],
];

// eslint-disable-next-line thehelp/no-mutation
exports.SNEK_DELAY = 50;

// Do one cycle of the snek
// eslint-disable-next-line thehelp/no-mutation
exports.snekCycle = function snekCycle(charset, delay, stream = process.stdout) {
  for (const segment of charset) {
    for (const segmentChar of segment) {
      stream.write(segmentChar);
      sleep.msleep(delay);
      if (segment.indexOf(segmentChar) + 1 !== segment.length) {
        stream.write('\b');
      }
    }
  }
};

// Make the snek go all the way across the terminal
// const cycles = Math.floor(process.stdout.columns / SNEK_CHARS.length);
// for (let i = 0; i <= cycles; i++) {
//   snekCycle(SNEK_CHARS, SNEK_DELAY);
// }
