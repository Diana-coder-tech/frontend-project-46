import { readFileSync } from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildDiff from './buildDiff.js';
import formatDiff from './formatters/index.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parse(readFileSync(filepath1, 'utf-8'), path.extname(filepath1).slice(1));
  const data2 = parse(readFileSync(filepath2, 'utf-8'), path.extname(filepath2).slice(1));

  const diff = buildDiff(data1, data2);
  return formatDiff(diff, format);
};

export default gendiff;