import fs from 'fs';
import path from 'path';
import { parseFile } from './parsers.js'; 
import { buildDiff } from './buildDiff.js';
import { formatters } from './formatters/index.js';

export const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const full1 = path.resolve(process.cwd(), filepath1);
  const full2 = path.resolve(process.cwd(), filepath2);

  const data1 = parseFile(full1);
  const data2 = parseFile(full2);

  const diffTree = buildDiff(data1, data2);

  const formatter = formatters[formatName] || formatters.stylish;
  return formatter(diffTree);
};
export default genDiff;