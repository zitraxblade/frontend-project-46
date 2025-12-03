import fs from 'fs';
import path from 'path';
import { buildDiff } from './buildDiff.js';
import { formatters } from './formatters/index.js';

export const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fullPath1 = path.resolve(process.cwd(), filepath1);
  const fullPath2 = path.resolve(process.cwd(), filepath2);

  const data1 = JSON.parse(fs.readFileSync(fullPath1, 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(fullPath2, 'utf-8'));

  const diffTree = buildDiff(data1, data2);

  const formatter = formatters[formatName] || formatters.stylish; // выбираем формат
  return formatter(diffTree);
};