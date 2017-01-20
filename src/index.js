const sleep = require('sleep');
const Charm = require('charm');

module.exports = class Snek {
  constructor({
    charset = module.exports.NORMAL_SNEK_CHARS,
    delay = 100, // eslint-disable-line no-magic-numbers
    output = process.stdout,
  } = {}) {
    this.charset = charset;
    this.delay = delay;
    this.output = new Charm();
    this.output.pipe(output);
    this.output.reset();
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
    this.output.write('\n\n');
  }

  // Animate a single reapeatable snake segment
  segment() {
    for (const segment of this.charset) {
      if (typeof segment === 'string') {
        switch (segment) {
          case 'down':
            this.output.down(1);
            this.output.left(1);
            break;
          case 'up':
            this.output.up(1);
            this.output.left(1);
            break;
          default:
            break;
        }
        // eslint-disable-next-line no-continue
        continue;
      }
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

// ⠧⠼⠉⠧⠼⠉
module.exports.NORMAL_SNEK_CHARS = [
  ['⠁', '⠃', '⠇', '⠧'],
  ['⠄', '⠤', '⠴', '⠼'],
  ['⠁', '⠉'],
];

module.exports.TALL_SNEK_CHARS = [
  ['⠁', '⠃', '⠇'],
  'down',
  ['⠁', '⠃', '⠇', '⠧'],
  ['⠄', '⠤', '⠴', '⠼'],
  'up',
  ['⠠', '⠰', '⠸'],
  ['⠁', '⠉'],
];
