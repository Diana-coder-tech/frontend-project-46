import { resolvePath, getData } from './fileUtils.js';
import getFormatter from './formatter.js';

const genDiff = (data1, data2, format = 'stylish') => {
  const path1 = resolvePath(data1);
  const path2 = resolvePath(data2);

  const dataFile1 = getData(path1);
  const dataFile2 = getData(path2);

  return getFormatter(dataFile1, dataFile2, format);
};

export default genDiff;
