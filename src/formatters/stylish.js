export const formatStylish = (diff, depth = 0) => {
  const indent = '  '.repeat(depth);
  const lines = diff.map((node) => {
    switch (node.type) {
      case 'added':
        return `${indent}+ ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'removed':
        return `${indent}- ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'changed':
        return [
          `${indent}- ${node.key}: ${formatValue(node.oldValue, depth + 1)}`,
          `${indent}+ ${node.key}: ${formatValue(node.newValue, depth + 1)}`
        ].join('\n');
      case 'unchanged':
        return `${indent}  ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'nested':
        return `${indent}  ${node.key}: {\n${formatStylish(node.children, depth + 1)}\n${indent}  }`;
      default:
        return '';
    }
  });

  return lines.join('\n');
};

const formatValue = (value, depth) => {
  if (value && typeof value === 'object') {
    const indent = '  '.repeat(depth);
    const lines = Object.entries(value).map(
      ([k, v]) => `${indent}${k}: ${v}`
    );
    return `{\n${lines.join('\n')}\n${'  '.repeat(depth - 1)}}`;
  }
  return value;
};