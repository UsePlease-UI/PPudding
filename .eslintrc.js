module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:storybook/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
    rules: {
        'import/extensions': 'off',
        'prettier/prettier': 'off',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        ],
        'react/no-unknown-property': [
            'error',
            {
                ignore: ['css']
            }
        ],
        'react/react-in-jsx-scope': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
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
                        pattern:
                            '{assets/**,constants/**,@emotion/**,styles,styles/**,@heroicons/**,@fluentui/react-icons}',
                        group: 'external',
                        position: 'after'
                    },
                    {
                        pattern: '{components/**}',
                        group: 'external',
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
        'import/resolver': {
            typescript: {},
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
};
