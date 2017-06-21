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
      case 'down':
        buffer.moveTo(buffer.cx - 1, buffer.cy);
        break;
    }
  },
};

module.exports = function runSnek(snek) {
  // Reset the terminal
  terminal.reset();

  // Create a new buffer
  const buffer = ScreenBuffer.create({
    dst: terminal,
  });

  // TODO: handle the before

  // Render the body of the snek
  for (const [command, ...args] of snek.body) {
    commands[command](buffer, snek, ...args);
    buffer.draw();
  }

  // TODO: handle the after

  // Wait forever
  while (true) {}
};
