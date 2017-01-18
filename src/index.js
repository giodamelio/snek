const sleep = require('sleep');

// ⠧⠼⠉⠧⠼⠉
// eslint-disable-next-line thehelp/no-mutation
exports.SNEK_CHARS = [
  ['⠁', '⠃', '⠇', '⠧'],
  ['⠄', '⠤', '⠴', '⠼'],
  ['⠁', '⠉'],
];

module.exports = class Snek {
  constructor({
    charset = exports.SNEK_CHARS,
    delay = 100,
    output = process.stdout,
  } = {}) {
    this.charset = charset;
    this.delay = delay;
    this.output = output;
  }

  // Draw a snake n chars wide
  draw(width) {
    const segments = Math.floor(width / this.charset.length);
    for (let i = 0; i < segments; i++) {
      this.segment(
        this.charset,
        this.delay,
        this.output
      );
    }
  }

  // Animate a single reapeatable snake segment
  segment() {
    for (const segment of this.charset) {
      for (const segmentChar of segment) {
        this.output.write(segmentChar);
        sleep.msleep(this.delay);
        if (segment.indexOf(segmentChar) + 1 !== segment.length) {
          this.output.write('\b');
        }
      }
    }
  }
};
