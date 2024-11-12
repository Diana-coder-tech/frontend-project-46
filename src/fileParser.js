import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const parseFile = (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(fileContent);
};

const genDiff = (filepath1, filepath2) => {
  const file1Data = parseFile(filepath1);
  const file2Data = parseFile(filepath2);

  // Получаем все уникальные ключи из обоих объектов и сортируем их
  const allKeys = _.sortBy(_.union(Object.keys(file1Data), Object.keys(file2Data)));

  const resultLines = allKeys.map((key) => {
    if (_.has(file1Data, key) && _.has(file2Data, key)) {
      // Ключ присутствует в обоих файлах
      if (file1Data[key] === file2Data[key]) {
        return `    ${key}: ${file1Data[key]}`;
      } else {
        return `  - ${key}: ${file1Data[key]}\n  + ${key}: ${file2Data[key]}`;
      }
    } else if (_.has(file1Data, key)) {
      // Ключ есть только в первом файле
      return `  - ${key}: ${file1Data[key]}`;
    } else {
      // Ключ есть только во втором файле
      return `  + ${key}: ${file2Data[key]}`;
    }
  });

  // Оборачиваем результат в фигурные скобки и объединяем строки
  return `{\n${resultLines.join('\n')}\n}`;
};

export default genDiff;