#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .name('description')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0') 
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    // Временный вывод аргументов и опций для проверки работы cli-утилиты
    console.log('Filepath 1:', filepath1);
    console.log('Filepath 2:', filepath2);
    console.log('Format:', options.format);
  });
  
program.parse();
