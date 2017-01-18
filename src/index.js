const sleep = require('sleep');

// ⠧⠼⠉⠧⠼⠉
const SNEK_CHARS = [
  ['⠁', '⠃', '⠇', '⠧'],
  ['⠄', '⠤', '⠴', '⠼'],
  ['⠁', '⠉'],
];

for (let segment of SNEK_CHARS) {
  for (let segmentChar of segment) {
    process.stdout.write(segmentChar);
    sleep.msleep(200);
    if (segment.indexOf(segmentChar) + 1 !== segment.length) {
      process.stdout.write('\b');
    }
  }
}
