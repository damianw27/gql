const { execSync } = require('child_process');

console.log('Cleaning output directory...');

try {
  execSync('rimraf src/generated/*');
} catch (error) {
  console.log(error.message);
}

console.log('Generating source from ANTLR grammar...');

try {
  execSync(
    'antlr4 -Dlanguage=JavaScript -o src/generated/ antlr/GqlLexer.g4 -o src/generated/ antlr/GqlParser.g4 ',
    { stdio: 'inherit' },
  );
} catch (error) {
  console.error(error.message);
}

console.log('Cleaning output directory after generation...');

try {
  execSync('rimraf src/generated/GqlParser.interp');
  execSync('rimraf src/generated/GqlParser.tokens');
  execSync('rimraf src/generated/GqlLexer.interp');
  execSync('rimraf src/generated/GqlLexer.tokens');
} catch (error) {
  console.error(error.message);
}

console.log('Successfully generated parser sources.');
