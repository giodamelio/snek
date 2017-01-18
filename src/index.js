const sleep = require('sleep');

// ⠧⠼⠉⠧⠼⠉
const SNEK_CHARS = [
  ['⠁', '⠃', '⠇', '⠧'],
  ['⠄', '⠤', '⠴', '⠼'],
  ['⠁', '⠉'],
];

const SNEK_DELAY = 50;

// Do one cycle of the snek
function snekCycle(charset, delay) {
  for (const segment of charset) {
    for (const segmentChar of segment) {
      process.stdout.write(segmentChar);
      sleep.msleep(delay);
      if (segment.indexOf(segmentChar) + 1 !== segment.length) {
        process.stdout.write('\b');
      }
    }
  }
}

// Make the snek go all the way across the terminal
const cycles = Math.floor(process.stdout.columns / SNEK_CHARS.length);
for (let i = 0; i <= cycles; i++) {
  snekCycle(SNEK_CHARS, SNEK_DELAY);
}
