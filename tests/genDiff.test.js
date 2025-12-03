import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { genDiff } from '../src/genDiff.js';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('genDiff flat JSON', () => {
  const file1 = join(__dirname, '..', '__fixtures__', 'file1.json');
  const file2 = join(__dirname, '..', '__fixtures__', 'file2.json');

  const expected = fs.readFileSync(
    join(__dirname, '..', '__fixtures__', 'result.txt'),
    'utf-8'
  ).trim();

  const result = genDiff(file1, file2).trim();

  expect(result).toBe(expected);
});