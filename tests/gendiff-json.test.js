import { genDiff } from '../src/genDiff.js';

test('gendiff json output', () => {
  const result = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json');

  const parsed = JSON.parse(result);

  expect(Array.isArray(parsed)).toBe(true);

  // можно еще точечно проверять
  // expect(parsed[0].key).toBe('host');
});