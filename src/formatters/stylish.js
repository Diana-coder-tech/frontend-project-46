import _ from 'lodash';

const indent = (depth, spaces = 4) => ' '.repeat(depth * spaces - 2);
const formatValue = (value, depth) => {
  if (!_.isObject(value)) return String(value);

  const entries = Object.entries(value)
    .map(([key, val]) => `${indent(depth + 1)}  ${key}: ${formatValue(val, depth + 1)}`);
  return `{\n${entries.join('\n')}\n${indent(depth)}  }`;
};

const makeStylish = (tree, depth = 1) => {
  const lines = tree.map((node) => {
    const currentIndent = indent(depth);

    switch (node.type) {
      case 'added':
        return `${currentIndent}+ ${node.key}: ${formatValue(node.value, depth)}`;
      case 'removed':
        return `${currentIndent}- ${node.key}: ${formatValue(node.value, depth)}`;
      case 'unchanged':
        return `${currentIndent}  ${node.key}: ${formatValue(node.value, depth)}`;
      case 'updated':
        return [
          `${currentIndent}- ${node.key}: ${formatValue(node.oldValue, depth)}`,
          `${currentIndent}+ ${node.key}: ${formatValue(node.newValue, depth)}`,
        ].join('\n');
      case 'nested':
        return `${currentIndent}  ${node.key}: {\n${makeStylish(node.children, depth + 1)}\n${indent(depth)}  }`;
      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  });

  return lines.join('\n');
};

export default (tree) => `{\n${makeStylish(tree)}\n}`;
