#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program
  .usage('gendiff [options]')
  .description('Compares two configuration files and shows a difference.') 
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information')


