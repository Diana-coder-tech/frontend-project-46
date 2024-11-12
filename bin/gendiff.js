#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/fileParser.js';
const program = new Command();

program
  .name('description')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0') 
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2);
    console.log(diff);
  });
  
program.parse();
