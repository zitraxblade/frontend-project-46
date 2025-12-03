import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export const genDiff = (filepath1, filepath2) => {
  const fullPath1 = path.resolve(process.cwd(), filepath1);
  const fullPath2 = path.resolve(process.cwd(), filepath2);

  const data1 = JSON.parse(fs.readFileSync(fullPath1, 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(fullPath2, 'utf-8'));

  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const lines = keys.map((key) => {
    const val1 = data1[key];
    const val2 = data2[key];

    if (!Object.prototype.hasOwnProperty.call(data1, key)) {
      return `  + ${key}: ${val2}`;
    }
    if (!Object.prototype.hasOwnProperty.call(data2, key)) {
      return `  - ${key}: ${val1}`;
    }
    if (val1 !== val2) {
      return `  - ${key}: ${val1}\n  + ${key}: ${val2}`;
    }
    return `    ${key}: ${val1}`;
  });

  return `{\n${lines.join('\n')}\n}`;
};