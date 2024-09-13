module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  // eslint-plugin-tailwindcss
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  plugins: ['react-refresh', 'perfectionist'],
  rules: {
    'react-refresh/only-export-components': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
        ignorePattern: [],
        groups: ['key', 'ref', 'shorthand', 'unknown', 'callback', 'multiline'],
        customGroups: { callback: 'on*', key: 'key', ref: 'ref' },
      },
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
        groupKind: 'values-first',
      },
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreAlias: false,
        ignoreCase: true,
        groupKind: 'values-first',
      },
    ],
    'perfectionist/sort-interfaces': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
        ignorePattern: [],
        partitionByNewLine: false,
        groupKind: 'required-first',
        groups: ['unknown', 'multiline', 'callback'],
        customGroups: { callback: 'on*' },
      },
    ],
    'perfectionist/sort-enums': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
        partitionByComment: false,
        sortByValue: false,
        forceNumericSort: false,
      },
    ],
    'perfectionist/sort-object-types': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
        partitionByNewLine: false,
        groupKind: 'required-first',
        groups: ['unknown', 'multiline', 'callback'],
        customGroups: { callback: 'on*' },
      },
    ],
    'perfectionist/sort-intersection-types': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
        groups: [],
      },
    ],
    'perfectionist/sort-union-types': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
        groups: [
          'conditional',
          'function',
          'import',
          'intersection',
          'keyword',
          'literal',
          'named',
          'object',
          'operator',
          'tuple',
          'union',
          'nullish',
        ],
      },
    ],
    'perfectionist/sort-array-includes': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
        groupKind: 'literals-first',
      },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
        newlinesBetween: 'always',
        maxLineLength: undefined,
        groups: [
          'react',
          ['builtin', 'external'],
          'app',
          'assets',
          'internal',
          'components',
          'utils',
          'pages',
          ['parent', 'sibling'],
          'index',
          'object',
          'style',
          'type',
          'unknown',
        ],
        customGroups: {
          value: {
            react: ['react', 'react-*', 'react-*/**'],
            app: ['@app'],
            assets: ['@assets/**', '@fluentui/react-icons'],
            components: ['@components/**', '@layouts/**'],
            utils: ['@hooks/**', '@libs/**', '@slices/**', '@services/**', '@utils/**'],
            pages: ['@pages/**'],
          },
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // 사용자가 설치한 버전을 자동으로 선택
    },
  },
};
