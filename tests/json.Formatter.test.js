import { formatJson } from '../src/formatters/json.js';

test('json formatter', () => {
  const input = [
    { key: 'a', type: 'added', newValue: 2 },
    { key: 'b', type: 'removed', oldValue: 1 },
  ];

  const result = formatJson(input);

  expect(result).toBe(JSON.stringify(input, null, 2));
});