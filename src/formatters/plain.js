const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const formatValue = (value) => {
  if (isObject(value)) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};

export const formatPlain = (diff, parent = '') => {
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
};