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
    plugins: ['react-refresh', 'import', 'sort-destructure-keys', 'typescript-sort-keys'],
    rules: {
        'react-refresh/only-export-components': 'off',
        'react-hooks/exhaustive-deps': 'off',
        // jsx props sort
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandFirst: true,
                shorthandLast: false,
                multiline: 'last',
                ignoreCase: true,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],
        // sort destructured
        'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
        // sort typescript interface/types
        'typescript-sort-keys/interface': ['error', 'asc', { caseSensitive: false, requiredFirst: true }],
        // sort typescript enum
        'typescript-sort-keys/string-enum': ['error', 'asc', { caseSensitive: false }],
        // sort within imports
        'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }], // sort WITHIN an import
        // import grouping
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '{react*,react*/**}',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '{@assets/**,@fluentui/react-icons}',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '{@components/**,@layouts/**}',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '{@hooks/**,@utils/**}',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '@pages/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '{@styles/**,*.+(css|scss|svg|png|jpg|jpeg)}',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true,
                        },
                        group: 'object',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                warnOnUnassignedImports: true,
            },
        ],
    },
    settings: {
        react: {
            version: 'detect', // 사용자가 설치한 버전을 자동으로 선택
        },
    },
};
