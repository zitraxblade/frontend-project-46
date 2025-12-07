import { defineConfig } from 'eslint/config';
import jsPlugin from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';

export default defineConfig([
  // Основная конфигурация для всего проекта
  {
    files: ['**/*.js'],
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      ...jsPlugin.configs.recommended.rules,
      '@stylistic/semi': 'error',
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
    },
  },

  // Конфигурация для тестов
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: {
        test: 'readonly',
        expect: 'readonly',
      },
    },
  },
]);
