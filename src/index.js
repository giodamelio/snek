const sleep = require('sleep');
const Charm = require('charm');

module.exports = class Snek {
  constructor({
    charset = exports.NORMAL_SNEK_CHARS,
    delay = 100, // eslint-disable-line no-magic-numbers
    output = process.stdout,
  } = {}) {
    this.charset = charset;
    this.delay = delay;
    this.output = output;
    this.charm = new Charm();
    this.charm.pipe(this.output);
    this.charm.reset();
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
        // eslint-disable-next-line security/detect-object-injection
        // this.charm.down(2);
        switch (segment) {
          case 'down':
            this.output.write('\n');
            break;
          case 'up':
            this.charm.up(1);
            this.charm.left(1);
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
