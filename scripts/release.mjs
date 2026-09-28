// Builds @gosamply/ui and commits dist/ui as the root of tag v<version>, so apps can
// `pnpm add @gosamply/ui@github:<org>/<repo>#v<version>` without building anything on install.
import { execSync } from 'node:child_process';
import fs from 'node:fs';

const run = (cmd, cwd) => execSync(cmd, { stdio: 'inherit', cwd });
const out = cmd => execSync(cmd, { encoding: 'utf8' }).trim();

const { version } = JSON.parse(fs.readFileSync('projects/ui/package.json', 'utf8'));
const tag = `v${version}`;

if (out('git status --porcelain')) throw new Error('Working tree is not clean, commit your changes first.');
if (out(`git tag -l ${tag}`)) throw new Error(`Tag ${tag} already exists, bump the version in projects/ui/package.json.`);

run('pnpm build');

// The release commit's parent is the current HEAD, so every tag points back to the source it was built from.
fs.rmSync('.release', { recursive: true, force: true });
run('git worktree add --detach .release');
try {
  for (const entry of fs.readdirSync('.release')) {
    if (entry !== '.git') fs.rmSync(`.release/${entry}`, { recursive: true, force: true });
  }
  fs.cpSync('dist/ui', '.release', { recursive: true });
  run('git add -A', '.release');
  run(`git commit -m "release ${tag}"`, '.release');
  run(`git tag ${tag}`, '.release');
} finally {
  run('git worktree remove --force .release');
}

if (out('git remote')) run(`git push origin ${tag}`);
else console.log(`No git remote configured: ${tag} was created locally only. Push it with "git push origin ${tag}".`);
