import stylish from './stylish.js';
import makePlain from './plain.js';
import json from './json.js';

export default (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return makePlain(tree);
    case 'json':
      return json(tree);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};
