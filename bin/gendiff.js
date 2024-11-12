#!/usr/bin/env node

import { Command } from 'commander';
import parseFile from '../src/fileParser.js';
const program = new Command();

program
  .name('description')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0') 
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const file1Data = parseFile(filepath1);
    const file2Data = parseFile(filepath2);

    // Временный вывод содержимого для проверки парсинга
    console.log('File 1 Data:', file1Data);
    console.log('File 2 Data:', file2Data);
  });
  
program.parse();
