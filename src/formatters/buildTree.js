import _ from 'lodash';

const buildTree = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  return keys.map((key) => {
    if (!_.has(obj1, key)) {
      return { key, type: 'added', value: obj2[key] };
    }
    if (!_.has(obj2, key)) {
      return { key, type: 'removed', value: obj1[key] };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { key, type: 'nested', children: buildTree(obj1[key], obj2[key]) };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key,
        type: 'updated',
        oldValue: obj1[key],
        newValue: obj2[key],
      };
    }
    return { key, type: 'unchanged', value: obj1[key] };
  });
};

export default buildTree;
