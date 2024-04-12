// @ts-check
const { execSync } = require('node:child_process');
const { resolve } = require('node:path');

const prettierBinPath = resolve(__dirname, '../../../node_modules/.bin/prettier');
const args = process.argv.slice(2).join(' ');
const gitignore = resolve(__dirname, '../../../.gitignore');

execSync(
    `${prettierBinPath} --write ./**/* --ignore-path ${gitignore} --ignore-unknown --log-level=warn --cache --cache-strategy=content --cache-location=.cache/prettier --no-editorconfig ${args}`,
    {
        encoding: 'utf8',
        stdio: 'inherit',
    },
);
