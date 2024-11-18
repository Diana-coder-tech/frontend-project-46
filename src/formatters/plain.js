const formatValue = (value) => {
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    if (typeof value === 'object' && value !== null) {
      return '[complex value]';
    }
    return String(value);
  };
  
  const formatPlain = (diff, parent = '') =>
    diff
      .filter((node) => node.status !== 'unchanged')
      .map((node) => {
        const property = parent ? `${parent}.${node.key}` : node.key;
  
        switch (node.status) {
          case 'added':
            return `Property '${property}' was added with value: ${formatValue(node.value)}`;
          case 'removed':
            return `Property '${property}' was removed`;
          case 'updated':
            return `Property '${property}' was updated. From ${formatValue(node.valueBefore)} to ${formatValue(node.valueAfter)}`;
          case 'nested':
            return formatPlain(node.children, property);
          default:
            throw new Error(`Unknown status: ${node.status}`);
        }
      })
      .join('\n');
  
  export default formatPlain;