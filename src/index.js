const fs = require('fs');
const util = require('util');

const { ScreenBuffer, terminal } = require('terminal-kit');
const { msleep } = require('sleep');

const sneks = require('./sneks');

// Simple file logger for debugging
const logFile = fs.createWriteStream(process.cwd() + '/tmp.log');
function log(...args) {
  for (arg of args) {
    logFile.write(
      util.inspect(arg, {
        colors: true,
        depth: null, // Infinite length
      })
    );
    logFile.write(' ');
  }
  logFile.write('\n');
}

const commands = {
  // Draw a segment to the terminal char by char with the proper delay
  segment(buffer, snek, chars) {
    for (char of chars) {
      log('Segment', 'X', buffer.x, 'Y', buffer.y);

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
    log('Move', 'X', buffer.x, 'Y', buffer.y);
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

function runSnek(snek) {
  // Reset the terminal
  terminal.reset();

  // Create a new buffer
  const buffer = ScreenBuffer.create({
    dst: terminal,
  });
  log(buffer);

  // TODO: handle the before

  // Render the body of the snek
  for (const [command, ...args] of snek.body) {
    commands[command](buffer, snek, ...args);
    buffer.draw();
  }

  // TODO: handle the after

  // Wait forever
  while (true) {}
}

runSnek(sneks.NORMAL_SNEK);
