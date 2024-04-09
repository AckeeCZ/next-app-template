// @ts-check
import { execSync } from 'node:child_process';
import { resolve } from 'node:path';

const skott = resolve(import.meta.dirname, '../../../node_modules/.bin/skott');
const args = process.argv.slice(2).join(' ');

try {
    execSync(
        `${skott} --cwd=./src --displayMode=raw --showCircularDependencies --no-trackTypeOnlyDependencies --manifest=../package.json --tsconfig=../tsconfig.json ${args}`,
        { stdio: 'inherit' },
    );

    process.exit(0);
} catch (e) {
    if (args.includes('--debug')) {
        console.error(e);
    }

    process.exit(1);
}
