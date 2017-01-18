#!/usr/bin/env node
/* eslint no-console: "off", no-process-exit: "off" */
const minimist = require('minimist');

const snek = require('../src');
const version = require('../package.json').version;

const argv = minimist(process.argv.slice(2));

if (argv.h || argv.help) {
  console.log(`snek version ${version}`);
  console.log('usage: snek');
  console.log('       snek quick');
  console.log('       snek flash');
  console.log('       snek tiny');
  console.log('       snek baby');
  process.exit(0);
}

// Calculate how man segments the snake can have to fit on one line
const segments = Math.floor(process.stdout.columns / snek.SNEK_CHARS.length);
switch (argv._[0]) {
  case 'quick':
    snek.snekCycles(segments, snek.SNEK_CHARS, 25);
    break;
  case 'flash':
    snek.snekCycles(segments, snek.SNEK_CHARS, 1);
    break;
  case 'tiny':
  case 'baby':
    snek.snekCycles(3, snek.SNEK_CHARS, 100);
    break;
  default:
    snek.snekCycles(segments, snek.SNEK_CHARS, 100);
}
