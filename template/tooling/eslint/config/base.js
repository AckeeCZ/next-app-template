// @ts-check
import { resolve } from 'node:path';
import { fixupPluginRules } from '@eslint/compat';
// @ts-expect-error Not typed
import nextPlugin from '@next/eslint-plugin-next';
import pluginQuery from '@tanstack/eslint-plugin-query';
// @ts-expect-error Not typed
import prettierEslintConfig from 'eslint-config-prettier';
// @ts-expect-error - no types
import reactPlugin from 'eslint-plugin-react';
// @ts-expect-error Not typed
import hooksPlugin from 'eslint-plugin-react-hooks';
import turboEslintPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';

import { parseIgnoreFile } from '../utils/parseIgnoreFile.js';

// Flat config version of ESLint v9
export const nextjsConfig = tseslint.config(
    ...pluginQuery.configs['flat/recommended'],
    {
        // TypeScript rules
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                warnOnUnsupportedTypeScriptVersion: false,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        rules: {
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/no-import-type-side-effects': 'error',
        },
    },
    {
        // Common settings across JavaScript and TypeScript files
        files: ['**/*.{mjs,cjs,js,jsx,ts,tsx}'],
        ignores: parseIgnoreFile(resolve(import.meta.dirname, '../../../.gitignore')),
        plugins: {
            turbo: turboEslintPlugin,
        },
        rules: {
            ...prettierEslintConfig.rules,
            'turbo/no-undeclared-env-vars': 'off',
        },
    },
    {
        // JavaScript-specific rules
        files: ['**/*.{mjs,cjs,js,jsx}'],
        rules: {
            'no-use-before-define': 'off',
            'arrow-body-style': 'off',
            'padding-line-between-statements': [
                'warn',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
                { blankLine: 'always', prev: ['function', 'class', 'multiline-const'], next: '*' },
                { blankLine: 'always', prev: ['import', 'export'], next: '*' },
                { blankLine: 'any', prev: 'import', next: 'import' },
                { blankLine: 'any', prev: 'export', next: 'export' },
            ],
        },
    },
    {
        // React-specific rules
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        plugins: {
            react: reactPlugin,
            'react-hooks': fixupPluginRules(hooksPlugin),
        },
        languageOptions: {
            globals: {
                React: 'writable', // Ensure React is recognized as a global variable
            },
        },
        rules: {
            'react/jsx-uses-react': 'off', // Disable since React 17
            'react/react-in-jsx-scope': 'off', // Disable need for React import in scope
            'react/self-closing-comp': ['warn'],
            'react/jsx-curly-brace-presence': [
                'warn',
                {
                    props: 'never',
                    children: 'never',
                    propElementValues: 'always',
                },
            ],
            'react/jsx-indent': ['error', 4],
            'react/jsx-indent-props': ['error', 4],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
        },
        settings: {
            react: {
                version: 'detect', // Auto-detect React version
            },
        },
    },
    {
        // Next.js plugin settings
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        plugins: {
            '@next/next': fixupPluginRules(nextPlugin),
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,

            '@next/next/no-page-custom-font': 'off',

            'no-use-before-define': 'off',
            'padding-line-between-statements': [
                'warn',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
                { blankLine: 'always', prev: ['function', 'class', 'multiline-const'], next: '*' },
                { blankLine: 'always', prev: ['import', 'export'], next: '*' },
                { blankLine: 'any', prev: 'import', next: 'import' },
                { blankLine: 'any', prev: 'export', next: 'export' },
            ],

            indent: ['off', 4, { SwitchCase: 1 }],
            // https://eslint.org/docs/rules/no-var
            'no-var': 'error',
            // https://eslint.org/docs/rules/max-len
            'max-len': [
                'warn',
                120,
                4,
                {
                    ignoreComments: true,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\(',
                },
            ],

            // https://eslint.org/docs/rules/prefer-const
            'prefer-const': 'error',

            // https://eslint.org/docs/rules/space-before-function-paren
            'space-before-function-paren': [
                'error',
                {
                    anonymous: 'never',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],

            // https://eslint.org/docs/rules/no-console
            'no-console': 'error',

            // https://eslint.org/docs/rules/no-warning-comments
            'no-warning-comments': 'off',

            // https://eslint.org/docs/rules/spaced-comment
            'spaced-comment': [
                'error',
                'always',
                {
                    line: {
                        markers: ['/'],
                        exceptions: ['-', '+'],
                    },
                },
            ],

            // https://eslint.org/docs/rules/comma-dangle
            'comma-dangle': [
                'error',
                {
                    arrays: 'always-multiline',
                    objects: 'always-multiline',
                    imports: 'ignore',
                    exports: 'ignore',
                    functions: 'ignore',
                },
            ],

            // https://eslint.org/docs/rules/no-return-assign
            'no-return-assign': ['error'],

            'no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: false,
                },
            ],

            'object-curly-spacing': ['warn', 'always'],

            // https://eslint.org/docs/rules/curly
            curly: ['warn', 'all'],

            // -----

            'import/no-anonymous-default-export': 'off',

            /**
             * REASON: https://ackee.slack.com/archives/C07BZ9K32/®p1536067640000100
             */
            'import/prefer-default-export': 'off',

            // This would conflict with prettier
            'import/order': 'off',

            // ----

            '@next/next/no-html-link-for-pages': 'off',
        },
        ignores: ['.next/*'],
    },
);
