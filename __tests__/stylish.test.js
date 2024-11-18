import formatStylish from '../src/formatters/stylish.js';

test('formatStylish formats nested differences correctly', () => {
  const diff = [
    { key: 'common', children: [
      { key: 'follow', value: false, status: 'added' },
      { key: 'setting1', value: 'Value 1', status: 'unchanged' },
      { key: 'setting2', value: 200, status: 'removed' },
      { key: 'setting3', valueBefore: true, valueAfter: null, status: 'updated' },
    ]},
  ];

  const expected = `{
  common: {
    + follow: false
      setting1: Value 1
    - setting2: 200
    - setting3: true
    + setting3: null
  }
}`;

  expect(formatStylish(diff)).toBe(expected);
});
