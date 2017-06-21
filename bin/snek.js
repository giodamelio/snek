#!/usr/bin/env node
/* eslint no-console: "off", no-process-exit: "off" */
const minimist = require('minimist');

const runSnek = require('../src');
const sneks = require('../src/sneks');
const version = require('../package.json').version;

const argv = minimist(process.argv.slice(2), {
  boolean: ['d', 'fast'],
});

// Print the cli usage
function printUsage() {
  console.log(`snek version ${version}`);
  console.log('usage: snek');
  console.log('       snek tiny');
  console.log('       snek tall');
  console.log('');
  console.log(
    '       You can also add modifiers to your sneks to make them do things'
  );
  console.log('       --fast  Doubles the sneks speed');
  process.exit(0);
}

// Handle help flag
if (argv.h || argv.help) {
  printUsage();
}

// If the user gives more then one snek name, error out
if (argv._.length > 1) {
  console.log('You must choose exactly one snek');
  printUsage();
}

// If the user doesn't select a snek name, give them the defailt
if (argv._.length === 0) {
  argv._ = ['tiny'];
}

// Draw the snek
switch (argv._[0]) {
  case 'tiny':
    runSnek(sneks.TINY_SNEK, {
      debug: argv.d,
      delay: argv.fast
        ? Math.floor(sneks.TINY_SNEK.delay / 2)
        : sneks.TINY_SNEK.delay,
    });
    break;
  case 'tall':
    runSnek(sneks.TALL_SNEK, {
      debug: argv.d,
      delay: argv.fast
        ? Math.floor(sneks.TALL_SNEK.delay / 2)
        : sneks.TALL_SNEK.delay,
    });
    break;
  default:
    console.log('There is no snek named "${argv._[0]}"');
    printUsage();
    break;
}
