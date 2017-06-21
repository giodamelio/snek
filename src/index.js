const { ScreenBuffer, terminal } = require('terminal-kit');
const { msleep } = require('sleep');

const commands = {
  // Draw a segment to the terminal char by char with the proper delay
  segment(buffer, snek, chars) {
    for (const char of chars) {
      // Draw a char
      buffer.put(
        {
          wrap: false,
          direction: 'none',
        },
        char
      );

      // Draw to the terminal
      buffer.draw();

      // Wait
      msleep(snek.delay);
    }
  },

  // Move the cursor in a direction
  move(buffer, snek, direction) {
    switch (direction) {
      case 'up':
        buffer.moveTo(buffer.cx, buffer.cy - 1);
        break;
      case 'down':
        buffer.moveTo(buffer.cx, buffer.cy + 1);
        break;
      case 'right':
        buffer.moveTo(buffer.cx + 1, buffer.cy);
        break;
      case 'left':
        buffer.moveTo(buffer.cx - 1, buffer.cy);
        break;
      default:
        break;
    }
  },
};

module.exports = function runSnek(snek, overrides) {
  // Merge the overrides with the snek
  snek = Object.assign(snek, overrides);

  // Reset the terminal
  terminal.reset();

  // Create a new buffer
  const buffer = ScreenBuffer.create({
    dst: terminal,
  });

  // Move down to the bottom of the terminal
  buffer.moveTo(buffer.cx, buffer.height - snek.height);

  // Render the body of the snek
  do {
    for (const [command, ...args] of snek.body) {
      if (overrides.debug) {
        // eslint-disable-next-line no-console
        console.log(command, ...args);
      } else {
        // eslint-disable-next-line security/detect-object-injection
        commands[command](buffer, snek, ...args);
        buffer.draw();
      }
    }
  } while (buffer.cx + snek.width < buffer.width && !overrides.debug);
};
