module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
                'jest/globals': true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    ignorePatterns: ['node_modules', 'dist', '.eslintrc.cjs'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'jest'],
    rules: {
        'prettier/prettier': 'warn',
        'react/prop-types': 'off',
        'no-unused-vars': 'warn',
    },
}
