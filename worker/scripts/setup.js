const { execSync } = require('child_process');
const packageJson = require('../package.json');

console.log('Linking required dependencies.');
execSync('npm link @gql-grammar/core');

console.log('Installing dependencies.');
execSync('npm install');

console.log('Building dependency.');
execSync('npm run build:prod');

console.log('Checking is link created in npm.');

try {
  execSync(`npm ls -g --depth=0 ${packageJson.name}`);

  console.log('Link already exists. Unlinking.');
  execSync(`npm unlink -g ${packageJson.name}`);
} catch (error) {
  console.log('Link is not yet created in npm.');
}

console.log('Linking dependency with npm.');
execSync(`npm link --prefix ./dist`);
