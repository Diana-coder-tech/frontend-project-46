import { readFileSync } from 'fs';
import path from 'path';
import gendiff from '../src/index.js';

const getFixturePath = (filename) => path.join('__tests__', '__fixtures__', filename);

test('gendiff JSON formatter', () => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');
  const expectedJson = readFileSync(getFixturePath('expectedJsonOutput.json'), 'utf-8');
  
  const result = gendiff(file1Path, file2Path, 'json');
  expect(result).toBe(expectedJson.trim());
});
