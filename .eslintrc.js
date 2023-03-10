const fs = require('fs');
const path = require('path');
const { off } = require('process');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  'extends': [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['warn', prettierOptions],
    'object-curly-newline': ['warn', {
      'ObjectPattern': { 'multiline': true },}
    ],
    'arrow-parens': ['warn', 'as-needed'],
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'operator-linebreak': ['warn', 'before', {'overrides': {
      '=': 'after',  
      '&&': 'after', 
      '||': 'after',
    }}],
    'no-param-reassign': ['warn', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
        'acc',
      ]
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
};