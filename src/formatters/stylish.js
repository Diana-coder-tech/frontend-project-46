const indentSize = 4;

const makeIndent = (depth) => ' '.repeat(depth * indentSize - 2);
const formatValue = (value, depth) => {
  if (typeof value !== 'object' || value === null) {
    return String(value);
  }

  const entries = Object.entries(value)
    .map(([key, val]) => `${makeIndent(depth + 1)}  ${key}: ${formatValue(val, depth + 1)}`)
    .join('\n');

  return `{\n${entries}\n${makeIndent(depth)}  }`;
};

const formatStylish = (diff, depth = 1) => {
  const lines = diff.map((node) => {
    const indent = makeIndent(depth);

    switch (node.status) {
      case 'added':
        return `${indent}+ ${node.key}: ${formatValue(node.value, depth)}`;
      case 'removed':
        return `${indent}- ${node.key}: ${formatValue(node.value, depth)}`;
      case 'unchanged':
        return `${indent}  ${node.key}: ${formatValue(node.value, depth)}`;
      case 'updated':
        return `${indent}- ${node.key}: ${formatValue(node.valueBefore, depth)}\n${indent}+ ${node.key}: ${formatValue(node.valueAfter, depth)}`;
      case 'nested':
        return `${indent}  ${node.key}: {\n${formatStylish(node.children, depth + 1)}\n${indent}  }`;
      default:
        throw new Error(`Unknown status: ${node.status}`);
    }
  });

  return lines.join('\n');
};

export default formatStylish;