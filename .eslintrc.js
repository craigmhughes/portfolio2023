module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'standard-with-typescript',
        'next/core-web-vitals',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-props-no-spreading': 0,
        'react/function-component-definition': 0,
        'no-restricted-syntax': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        /*  Known bug between `drei` and `react-spring` since installing spring via package.json doubles up versions & 
            creates the following issue: (https://github.com/pmndrs/react-spring/issues/1889)
            Temp workaround = import/no-extraneous-dependencies: 0
        */
        'import/no-extraneous-dependencies': 0,
        'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
        'import/no-named-as-default': 0,
    },
};
