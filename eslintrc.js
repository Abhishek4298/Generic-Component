module.exports = {
    parser: 'babel-eslint',
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
      'no-var': 'error',
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn'
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  