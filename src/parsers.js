import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const parseFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const ext = path.extname(filepath).toLowerCase();
  const content = fs.readFileSync(fullPath, 'utf-8');

  if (ext === '.json') {
    return JSON.parse(content);
  } else if (ext === '.yml' || ext === '.yaml') {
    return yaml.load(content);
  } else {
    throw new Error(`Unsupported file type: ${ext}`);
  }
};