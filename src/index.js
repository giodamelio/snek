const { ScreenBuffer, terminal } = require('terminal-kit');
const { msleep } = require('sleep');

const commands = {
  // Draw a segment to the terminal char by char with the proper delay
  segment(buffer, snek, chars) {
    for (char of chars) {
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
    }
  },
};

module.exports = function runSnek(snek, debug) {
  // Reset the terminal
  terminal.reset();

  // Create a new buffer
  const buffer = ScreenBuffer.create({
    dst: terminal,
  });

  // Move down to the bottom of the terminal
  buffer.moveTo(buffer.cx, buffer.height - snek.height);

  // TODO: handle the before

  // Render the body of the snek
  for (const [command, ...args] of snek.body) {
    if (debug) {
      console.log(command, ...args);
    } else {
      commands[command](buffer, snek, ...args);
      buffer.draw();
    }
  }

  // TODO: handle the after
};
