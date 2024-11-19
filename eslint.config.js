import globals from 'globals';
import pluginJs from '@eslint/js';
import path from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';

// Определение __filename и __dirname для ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Совместимость с CommonJS конфигурациями
const compat = new FlatCompat({
  baseDirectory: __dirname, // Указание базовой директории
});

// Экспорт конфигурации
/** @type {import('eslint').Linter.Config[]} */
export default [
  ...compat.config({
    parserOptions: {
      ecmaVersion: 'latest', // Современная версия ECMAScript
      sourceType: 'module', // Использование ES-модулей
    },
    env: {
      node: true, // Среда выполнения Node.js
      jest: true, // Поддержка глобальных переменных Jest
    },
    globals: {
      ...globals.node, // Глобальные переменные Node.js
      ...globals.jest, // Глобальные переменные Jest
    },
    rules: {
      'no-underscore-dangle': [
        'error',
        {
          allow: ['__filename', '__dirname'], // Разрешение использования __filename и __dirname
        },
      ],
      'import/no-named-as-default': 'off', // Отключение определённых импортных правил
      'import/no-named-as-default-member': 'off',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  }),
];
