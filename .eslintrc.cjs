module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'import'],
    rules: {
        'react-refresh/only-export-components': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '{react*,react*/**}',
                        group: 'builtin',
                        position: 'before'
                    },
                    {
                        pattern: '{@assets/**,@fluentui/react-icons}',
                        group: 'internal',
                        position: 'before'
                    },
                    {
                        pattern: '{@components/**,@layouts/**}',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: '{@hooks/**,@lib/**,@utils/**}',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: '@pages/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: '{*.+(css|scss|svg|png|jpg|jpeg)}',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true
                        },
                        group: 'object',
                        position: 'after'
                    }
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
                warnOnUnassignedImports: true
            }
        ]
    },
    settings: {
        react: {
            version: 'detect' // 사용자가 설치한 버전을 자동으로 선택
        }
    }
};
