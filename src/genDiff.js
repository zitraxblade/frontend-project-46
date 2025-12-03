import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { buildDiff } from './buildDiff.js';
import { formatStylish } from './formatStylish.js';

export const genDiff = (filepath1, filepath2) => {
  const fullPath1 = path.resolve(process.cwd(), filepath1);
  const fullPath2 = path.resolve(process.cwd(), filepath2);

  const data1 = JSON.parse(fs.readFileSync(fullPath1, 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(fullPath2, 'utf-8'));

  const diffTree = buildDiff(data1, data2);

  return formatStylish(diffTree);
};