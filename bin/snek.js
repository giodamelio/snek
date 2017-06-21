#!/usr/bin/env node
/* eslint no-console: "off", no-process-exit: "off" */
const minimist = require('minimist');

const runSnek = require('../src');
const sneks = require('../src/sneks');
const version = require('../package.json').version;

const argv = minimist(process.argv.slice(2));

// Print the cli usage
function printUsage() {
  console.log(`snek version ${version}`);
  console.log('usage: snek');
  console.log('       snek tiny');
  console.log('       snek tall');
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
    runSnek(sneks.TINY_SNEK);
    break;
  case 'tall':
    runSnek(sneks.TALL_SNEK);
    break;
  default:
    console.log('There is no snek named "${argv._[0]}"');
    printUsage();
    break;
}
