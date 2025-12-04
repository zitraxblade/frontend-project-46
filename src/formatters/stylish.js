import _ from 'lodash';

const repeat = (count) => ' '.repeat(count);

// depth: 0 -> root, indent calculation: baseIndent = depth * 4
const indent = (depth) => repeat(depth * 4 - 2); // для символов +/- и пробела

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    if (value === null) return 'null';
    return String(value);
  }
  const entries = Object.entries(value);
  const lines = entries.map(([k, v]) => {
    if (_.isPlainObject(v)) {
      return `${repeat((depth + 1) * 4)}${k}: ${stringify(v, depth + 1)}`;
    }
    return `${repeat((depth + 1) * 4)}${k}: ${v === null ? 'null' : v}`;
  });
  return `{\n${lines.join('\n')}\n${repeat(depth * 4)}}`;
};

export function formatStylish(diffTree) {
  const iter = (tree, depth) => {
    const lines = tree.flatMap((node) => {
      const key = node.key;
      switch (node.type) {
        case 'added':
          return `${indent(depth)}+ ${key}: ${stringify(node.value, depth)}`;
        case 'removed':
          return `${indent(depth)}- ${key}: ${stringify(node.value, depth)}`;
        case 'unchanged':
          return `${indent(depth)}  ${key}: ${stringify(node.value, depth)}`;
        case 'changed':
          return [
            `${indent(depth)}- ${key}: ${stringify(node.oldValue, depth)}`,
            `${indent(depth)}+ ${key}: ${stringify(node.newValue, depth)}`,
          ];
        case 'nested':
          return `${indent(depth)}  ${key}: {\n${iter(node.children, depth + 1)}\n${repeat(depth * 4)}  }`;
        default:
          return [];
      }
    });
    return lines.join('\n');
  };

  return `{\n${iter(diffTree, 1)}\n}`;
}