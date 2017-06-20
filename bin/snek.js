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

console.log('Hello World!');
