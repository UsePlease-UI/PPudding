import js from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat['jsx-runtime'],
  // https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#configuration-new-eslintconfigjs
  prettier,
  // https://github.com/storybookjs/eslint-plugin-storybook/pull/156
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    // .eslintignore
    ignores: ['dist', 'tailwind.config.js', '!.storybook'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      perfectionist,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
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
          groups: [],
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
          specialCharacters: 'keep',
          internalPattern: ['^~/.+'],
          partitionByComment: false,
          partitionByNewLine: false,
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
            ['parent', 'sibling'],
            'index',
            'object',
            'style',
            'type',
            'unknown',
          ],
          customGroups: {
            value: {
              react: ['^react$', '^react-.+'],
              app: ['@app/.+'],
              assets: ['@asset/.+', '@heroicons/react'],
              components: ['@components/.+'],
              utils: ['@hooks/.+', '@utils/.+'],
            },
          },
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          specialCharacters: 'keep',
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 'ignore',
          objectDeclarations: true,
          destructuredObjects: true,
          styledComponents: true,
          ignorePattern: [],
          useConfigurationIf: {},
          groups: [],
          customGroups: {},
        },
      ],
    },
  },
);
