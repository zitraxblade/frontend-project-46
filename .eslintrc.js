module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    'padded-blocks': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'arrow-parens': ['error', 'as-needed']
  }
};

