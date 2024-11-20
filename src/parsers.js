import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const parse = (data, format) => {
  const parseData = parsers[format];

  if (!parseData) {
    throw new Error(`Unsupported file format: ${format}`);
  }

  return parseData(data);
};

export default parse;
