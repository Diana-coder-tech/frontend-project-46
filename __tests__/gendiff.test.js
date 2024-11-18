import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);

const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');
const expectedStylish = fs.readFileSync(getFixturePath('expectedStylishOutput.txt'), 'utf-8');
const expectedPlain = fs.readFileSync(getFixturePath('expectedPlainOutput.txt'), 'utf-8');
const expectedJson = fs.readFileSync(getFixturePath('expectedJsonOutput.json'), 'utf-8');

test('gendiff stylish format', () => {
  expect(genDiff(file1, file2, 'stylish')).toBe(expectedStylish);
});

test('gendiff plain format', () => {
  expect(genDiff(file1, file2, 'plain')).toBe(expectedPlain);
});

test('gendiff json format', () => {
  expect(genDiff(file1, file2, 'json')).toBe(expectedJson);
});
