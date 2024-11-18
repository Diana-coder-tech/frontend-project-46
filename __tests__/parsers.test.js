import parse from '../src/parsers.js';

test('parse JSON', () => {
  const json = '{"key1":"value1","key2":"value2"}';
  expect(parse(json, 'json')).toEqual({ key1: 'value1', key2: 'value2' });
});

test('parse YAML', () => {
  const yaml = 'key1: value1\nkey2: value2';
  expect(parse(yaml, 'yaml')).toEqual({ key1: 'value1', key2: 'value2' });
});