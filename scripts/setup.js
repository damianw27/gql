const { execSync } = require("child_process");

console.log("Installing dependencies for all workspaces...");
execSync(`yarn`);

console.log("First build of grammar lib...");
execSync("yarn --cwd=./workspaces/parser generate")
execSync("yarn --cwd=./workspaces/parser build");

console.log("Linking grammar library to interface...");
execSync("yarn --cwd=./workspaces/parser/dist link");
execSync("yarn --cwd=./workspaces/editor link gql-parser -S");
execSync("yarn --cwd=./workspaces/editor install");

console.log("Setup ended successfully!");
