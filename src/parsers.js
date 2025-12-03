import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const parseFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  const ext = path.extname(filepath).toLowerCase();

  if (ext === '.json') {
    return JSON.parse(content);
  }
  if (ext === '.yml' || ext === '.yaml') {
    return yaml.load(content);
  }

  throw new Error(`Unsupported file format: ${ext}`);
};