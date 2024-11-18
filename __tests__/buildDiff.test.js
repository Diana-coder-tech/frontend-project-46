import buildDiff from '../src/buildDiff.js';

test('buildDiff creates correct diff tree', () => {
  const obj1 = { key1: 'value1', key2: 'value2' };
  const obj2 = { key1: 'value1', key2: 'valueUpdated', key3: 'value3' };

  const expected = [
    { key: 'key1', value: 'value1', status: 'unchanged' },
    { key: 'key2', valueBefore: 'value2', valueAfter: 'valueUpdated', status: 'updated' },
    { key: 'key3', value: 'value3', status: 'added' },
  ];

  expect(buildDiff(obj1, obj2)).toEqual(expected);
});