#!/usr/bin/env node
/* eslint no-console: "off", no-process-exit: "off" */
const minimist = require('minimist');

const Snek = require('../src');
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
switch (argv._[0]) {
  case 'quick':
    new Snek({ delay: 25 }).draw(process.stdout.columns);
    break;
  case 'flash':
    new Snek({ delay: 1 }).draw(process.stdout.columns);
    break;
  case 'tiny':
  case 'baby':
    new Snek().draw(9); // eslint-disable-line no-magic-numbers
    break;
  case 'tall':
    new Snek({
      charset: Snek.TALL_SNEK_CHARS,
    }).draw(14);
    break;
  default:
    new Snek().draw(process.stdout.columns);
}
