import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { buildDiff } from './buildDiff.js';
import { formatters } from './formatters/index.js';

const parseFile = (filepath) => {
  const ext = path.extname(filepath).toLowerCase();
  const content = fs.readFileSync(filepath, 'utf-8');

  if (ext === '.json') return JSON.parse(content);
  if (ext === '.yml' || ext === '.yaml') return yaml.load(content);

  throw new Error(`Unsupported file type: ${ext}`);
};

export const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fullPath1 = path.resolve(process.cwd(), filepath1);
  const fullPath2 = path.resolve(process.cwd(), filepath2);

  const data1 = parseFile(fullPath1);
  const data2 = parseFile(fullPath2);

  const diffTree = buildDiff(data1, data2);

  const formatter = formatters[formatName] || formatters.stylish;
  const formatted = formatter(diffTree);
  // stylish expects inner lines (without outer braces) in our implementation above.
  if (formatName === 'stylish' || !formatName) {
    return `{\n${formatted}\n}`;
  }
  return formatted;
};