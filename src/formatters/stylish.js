import _ from 'lodash';

const repeat = (count) => ' '.repeat(count);

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return value === null ? 'null' : String(value);
  }
  const indent = repeat(depth * 4);
  const entries = Object.entries(value).map(
    ([k, v]) => `${indent}${k}: ${stringify(v, depth + 1)}`
  );
  return `{\n${entries.join('\n')}\n${repeat((depth - 1) * 4)}}`;
};

const makeIndent = (depth) => repeat(depth * 4 - 2); // for marker position

export default function formatStylish(diff, depth = 1) {
  const lines = diff.map((node) => {
    const { key, type } = node;
    const indent = makeIndent(depth);
    switch (type) {
      case 'added':
        return `${indent}+ ${key}: ${stringify(node.value, depth + 1)}`;
      case 'removed':
        return `${indent}- ${key}: ${stringify(node.value, depth + 1)}`;
      case 'unchanged':
        return `${indent}  ${key}: ${stringify(node.value, depth + 1)}`;
      case 'changed': {
        const left = `${indent}- ${key}: ${stringify(node.oldValue, depth + 1)}`;
        const right = `${indent}+ ${key}: ${stringify(node.newValue, depth + 1)}`;
        return `${left}\n${right}`;
      }
      case 'nested': {
        const children = formatStylish(node.children, depth + 1);
        return `${indent}  ${key}: {\n${children}\n${repeat((depth) * 4)}}`;
      }
      default:
        throw new Error(`Unknown node type: ${type}`);
    }
  });

  return lines.join('\n');
}