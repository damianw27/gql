const { execSync } = require('child_process');

console.log('Cleaning output directory...');
execSync('rimraf src/generated/*');

console.log('Generating source from ANTLR grammar...');
execSync('antlr4 -Dlanguage=JavaScript -o src/generated/ antlr/GqlLexer.g4 -o src/generated/ antlr/GqlParser.g4 ', { stdio: 'inherit' });

console.log('Cleaning output directory after generation...');
execSync('rimraf src/generated/pgs.interp');
execSync('rimraf src/generated/pgs.tokens');
execSync('rimraf src/generated/pgsLexer.interp');
execSync('rimraf src/generated/pgsLexer.tokens');

console.log('Successfully generated parser sources.');