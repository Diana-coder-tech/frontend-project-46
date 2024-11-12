import fs from 'fs';
import path from 'path';

const parseFile = (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  
  const extension = path.extname(filePath);
  switch (extension) {
    case '.json':
      return JSON.parse(fileContent);
    // Место для поддержки других форматов в будущем, например YAML
    default:
      throw new Error(`Unsupported file format: ${extension}`);
  }
};

export default parseFile;