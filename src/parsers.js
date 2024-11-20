import yaml from 'js-yaml';

const parse = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

export default ({ data, format }) => {
  const getParse = parse[format];

  if (!getParse) {
    throw new Error(`Unsupported file format: ${format}`);
  }

  return getParse(data);
};
