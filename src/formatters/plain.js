const isObject = (v) => v && typeof v === 'object' && !Array.isArray(v);

const formatValue = (value) => {
  if (isObject(value)) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  if (value === null) return 'null';
  return String(value);
};

export function formatPlain(diff, parent = '') {
  const lines = diff.flatMap((node) => {
    const property = parent ? `${parent}.${node.key}` : node.key;
    switch (node.type) {
      case 'added':
        return `Property '${property}' was added with value: ${formatValue(node.value)}`;
      case 'removed':
        return `Property '${property}' was removed`;
      case 'changed':
        return `Property '${property}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
      case 'nested':
        return formatPlain(node.children, property);
      case 'unchanged':
      default:
        return [];
    }
  });
  return lines.join('\n');
}