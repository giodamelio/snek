const sleep = require('sleep');

// ⠧⠼⠉⠧⠼⠉
const SNEK_CHARS = [
  ['⠁', '⠃', '⠇', '⠧'],
  ['⠄', '⠤', '⠴', '⠼'],
  ['⠁', '⠉'],
];

const SNEK_DELAY = 200;

for (const segment of SNEK_CHARS) {
  for (const segmentChar of segment) {
    process.stdout.write(segmentChar);
    sleep.msleep(SNEK_DELAY);
    if (segment.indexOf(segmentChar) + 1 !== segment.length) {
      process.stdout.write('\b');
    }
  }
}
