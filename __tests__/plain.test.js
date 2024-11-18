import formatPlain from '../src/formatters/plain.js';

test('formatPlain formats nested differences correctly', () => {
  const diff = [
    { key: 'common', children: [
      { key: 'follow', value: false, status: 'added' },
      { key: 'setting2', value: 200, status: 'removed' },
      { key: 'setting3', valueBefore: true, valueAfter: null, status: 'updated' },
      { key: 'setting4', value: 'blah blah', status: 'added' },
      { key: 'setting5', value: { key5: 'value5' }, status: 'added' },
    ]},
  ];

  const expected = `
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
  `.trim();

  expect(formatPlain(diff)).toBe(expected);
});
