// @ts-check
import { execSync } from 'node:child_process';
import { resolve } from 'node:path';

// FIXME: find better way to resolve root node_modules
const eslint = resolve(import.meta.dirname, '../../../node_modules/.bin/eslint');
const args = process.argv.slice(2).join(' ');
const defaultConfig = resolve(import.meta.dirname, '../config/next.js');

if (args.includes('--debug')) {
    console.debug('eslint bin:', eslint);
    console.debug('args:', args);
    console.debug('defaultConfig:', defaultConfig);
}

try {
    // TODO: add  --report-unused-disable-directives
    execSync(
        `ESLINT_USE_FLAT_CONFIG=true ${eslint} --config ${defaultConfig} --no-warn-ignored --cache --cache-strategy=content --cache-location .cache/eslint ${args}`,
        {
            encoding: 'utf8',
            stdio: 'inherit',
        },
    );

    process.exit(0);
} catch (e) {
    if (args.includes('--debug')) {
        console.error(e);
    }

    process.exit(1);
}
