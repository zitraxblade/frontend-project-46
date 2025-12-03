import { formatStylish } from './stylish.js';
import { formatPlain } from './plain.js';
import { json } from './json.js';

export const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: json,
};