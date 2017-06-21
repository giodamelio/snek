const { ScreenBuffer, terminal } = require('terminal-kit');

// Reset the terminal
terminal.reset();

// Create a new buffer
const buffer = ScreenBuffer.create({
  dst: terminal,
});

// Write a word to the buffer
buffer.put(
  {
    x: 1,
    y: 1,
    direction: 'down',
    dy: 2,
  },
  'HAHA'
);

// Draw the buffer to the terminal
buffer.draw();

// Wait forever
while (true) {}
