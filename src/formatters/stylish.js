const makeIndent = (depth, spacesCount = 4) =>
  ' '.repeat(depth * spacesCount - 2);

const makeBracketIndent = (depth, spacesCount = 4) =>
  ' '.repeat((depth - 1) * spacesCount);

const stringify = (value, depth) => {
  if (value === null || typeof value !== 'object') {
    return String(value);
  }

  const entries = Object.entries(value);
  const lines = entries.map(
    ([key, val]) =>
      `${makeIndent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`
  );

  return `{\n${lines.join('\n')}\n${makeBracketIndent(depth + 1)}}`;
};

const formatStylish = (tree, depth = 1) => {
  const lines = tree.map((node) => {
    const indent = makeIndent(depth);

    switch (node.type) {
      case 'added':
        return `${indent}+ ${node.key}: ${stringify(node.value, depth)}`;

      case 'removed':
        return `${indent}- ${node.key}: ${stringify(node.value, depth)}`;

      case 'unchanged':
        return `${indent}  ${node.key}: ${stringify(node.value, depth)}`;

      case 'changed':
        return [
          `${indent}- ${node.key}: ${stringify(node.oldValue, depth)}`,
          `${indent}+ ${node.key}: ${stringify(node.newValue, depth)}`
        ].join('\n');

      case 'nested':
        return `${indent}  ${node.key}: {\n${formatStylish(
          node.children,
          depth + 1
        )}\n${makeBracketIndent(depth + 1)}}`;

      default:
        return '';
    }
  });

  if (depth === 1) {
    return `{\n${lines.join('\n')}\n}`;
  }

  return lines.join('\n');
};
export default formatStylish;