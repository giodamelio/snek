const sleep = require('sleep');

// ⠧⠼⠉⠧⠼⠉
// eslint-disable-next-line thehelp/no-mutation
exports.SNEK_CHARS = [
  ['⠁', '⠃', '⠇', '⠧'],
  ['⠄', '⠤', '⠴', '⠼'],
  ['⠁', '⠉'],
];

// Do one segment of the snek
// eslint-disable-next-line thehelp/no-mutation
exports.snekSegment = function snekSegment(charset, delay, stream = process.stdout) {
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

// Do the snek a certin number of cycles
exports.snekCycles = function snekCycles(cycles, charset, delay, stream = process.stdout) {
  for (let i = 0; i < cycles; i++) {
    exports.snekSegment(
      charset,
      delay,
      stream
    );
  }
};
