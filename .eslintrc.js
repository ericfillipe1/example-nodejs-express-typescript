module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    eqeqeq: 'error',
    'no-console': 'warn',
    'prettier/prettier': 'error',
    'react/display-name': 'off',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
};
