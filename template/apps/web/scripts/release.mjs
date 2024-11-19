import { execSync } from 'node:child_process';

const version = process.argv[2];

const bumpVersion = `yarn version ${version} && git add package.json`;
const changelog =
    'git fetch origin && node ../../node_modules/gitmoji-changelog/src/index.js && code CHANGELOG.md --wait && git add CHANGELOG.md';

const releaseCommit = `git commit -m "🔖 Release v${version}"`;
const tagCommit = `git tag -a v${version} -m "Release v${version}"`;
const push = 'git push origin --tags';

execSync([bumpVersion, changelog, releaseCommit, tagCommit, push].join(' && '), { stdio: 'inherit' });
