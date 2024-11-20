import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './formatters/buildTree.js';
import format from './formatters/index.js';

const getFileData = (filepath) => {
  const fullPath = path.resolve(filepath);
  const data = fs.readFileSync(fullPath, 'utf-8');
  const extname = path.extname(filepath).slice(1);
  return { data, extname };
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const { data: data1, extname: ext1 } = getFileData(filepath1);
  const { data: data2, extname: ext2 } = getFileData(filepath2);

  const obj1 = parse(data1, ext1);
  const obj2 = parse(data2, ext2);

  const tree = buildTree(obj1, obj2);
  return format(tree, formatName);
};

export default genDiff;
