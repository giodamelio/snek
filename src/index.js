const Charm = require('charm');

const sneks = require('./sneks');
const repeatGenerator = require('./repeat_generator');
const commands = require('./commands');

module.exports = class Drawer {
  constructor(instructions, output = process.stdout) {
    if (!instructions) {
      throw new Error('Parameter instructions required');
    }
    this.instructions = instructions;

    // Setup charm
    this.output = new Charm();
    this.output.pipe(output);
    this.output.reset();
  }

  // Start the drawer
  // TODO: handle before and after instructions
  start() {
    let currentWidth = 0;
    // Infinitaly repeating generator over items in an array
    const repeatedBody = repeatGenerator(this.instructions.body);
    const totalMoves = this.instructions.width * this.instructions.height;

    for (const instruction of repeatedBody) {
      if (currentWidth > totalMoves) {
        break;
      }

      const [command, ...args] = instruction;
      switch (command) {
        case 'segment':
          commands.segment(this.output, args[0], this.instructions.delay);
          currentWidth++;
          break;
        case 'move':
          commands.move(this.output, args[0]);
          break;
        default:
          break;
      }
    }

    this.output.write('\n\n');
  }
};
