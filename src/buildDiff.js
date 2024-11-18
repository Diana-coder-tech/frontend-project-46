const buildDiff = (data1, data2) => {
  const keys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])].sort();

  return keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return { key, value: data2[key], status: 'added' };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, value: data1[key], status: 'removed' };
    }
    if (data1[key] === data2[key]) {
      return { key, value: data1[key], status: 'unchanged' };
    }
    if (typeof data1[key] === 'object' && typeof data2[key] === 'object') {
      return { key, children: buildDiff(data1[key], data2[key]), status: 'nested' };
    }
    return { key, valueBefore: data1[key], valueAfter: data2[key], status: 'updated' };
  });
};

export default buildDiff;