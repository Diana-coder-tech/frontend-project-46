import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('gendiff between two flat json files', () => {
  const filepath1 = path.join(__dirname, '../__fixtures__/file1.json');
  const filepath2 = path.join(__dirname, '../__fixtures__/file2.json');
  const expectedOutput = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  expect(genDiff(filepath1, filepath2)).toBe(expectedOutput);
});