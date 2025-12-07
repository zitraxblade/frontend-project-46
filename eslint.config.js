import { defineConfig } from 'eslint/config';
import jsPlugin from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';

export default defineConfig({
  plugins: {
    js: jsPlugin,
    stylistic: stylisticPlugin, // ключ — просто stylistic
  },
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    globals: {
      console: 'readonly',
      process: 'readonly',
      test: 'readonly',
      expect: 'readonly',
    },
  },
  rules: {
    ...jsPlugin.configs.recommended.rules,
    'stylistic/semi': 'error',
    'stylistic/quotes': ['error', 'single'],
    'stylistic/no-trailing-spaces': 'error',
    'stylistic/comma-dangle': ['error', 'always-multiline'],
    'stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
    'stylistic/arrow-parens': ['error', 'as-needed'],
  },
});
