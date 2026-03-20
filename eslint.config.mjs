export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/', 'dist/', 'build/', 'coverage/', '*.min.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier: await import('eslint-plugin-prettier').then(m => m.default),
    },
    rules: {
      semi: ['error', 'always'],
      'no-trailing-spaces': 'error',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'es5',
          printWidth: 80,
          tabWidth: 4,
          useTabs: false,
          endOfLine: 'lf',
        },
      ],
    },
  },
];
