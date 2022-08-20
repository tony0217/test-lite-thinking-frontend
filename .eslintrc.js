module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: [
    '.eslintrc.js',
    'next.config.js',
    'jest.config.js',
    'jest.setup.js',
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'react/no-multi-comp': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
  },
};
