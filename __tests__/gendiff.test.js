import gendiff from '../src/index.js';
import { readFileSync } from 'fs';
import path from 'path';

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff JSON files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('expectedStylishOutput.txt');

  expect(gendiff(file1, file2)).toBe(expected);
});

test('gendiff YAML files', () => {
  const file1 = getFixturePath('file1.yaml');
  const file2 = getFixturePath('file2.yaml');
  const expected = readFile('expectedStylishOutput.txt');

  expect(gendiff(file1, file2)).toBe(expected);
});