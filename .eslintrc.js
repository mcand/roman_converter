// .eslintrc.js
module.exports = {
  extends: ['eslint:recommended'], parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: '16.8.0',
    },
  },
};