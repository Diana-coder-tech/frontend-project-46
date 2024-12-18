import path from 'node:path';
import { readFileSync } from 'node:fs';
import parse from './parsers.js';

export const resolvePath = (filepath) => path.resolve(filepath);

export const getExtension = (filename) => path.extname(filename).slice(1);

export const getData = (filePath) => parse({
  data: readFileSync(filePath, 'utf-8'),
  format: getExtension(filePath),
});
