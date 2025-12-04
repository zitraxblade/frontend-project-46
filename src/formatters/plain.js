const isObject = (val) => val && typeof val === 'object' && !Array.isArray(val);

const formatValue = (val) => {
  if (isObject(val)) return '[complex value]';
  if (typeof val === 'string') return `'${val}'`;
  if (val === null) return 'null';
  return String(val);
};

export default function formatPlain(diff, parent = '') {
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
        return [];
      default:
        return [];
    }
  });

  return lines.join('\n');
}