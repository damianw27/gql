const { execSync } = require("child_process");

console.log("Installing dependencies for all workspaces...");
try {
  execSync(`yarn`);
} catch (error) {
  console.error(error.message);
}

console.log("First build of grammar lib...");
try {
  execSync("yarn --cwd=./workspaces/parser generate")
  execSync("yarn --cwd=./workspaces/parser build");
} catch (error) {
  console.error(error.message);
}

console.log("Linking grammar library to interface...");
try {
  execSync("yarn --cwd=./workspaces/parser/dist unlink");
  execSync("yarn --cwd=./workspaces/parser/dist link");
  execSync("yarn --cwd=./workspaces/editor link gql-parser -S");
  execSync("yarn --cwd=./workspaces/editor install");
} catch (error) {
  console.error(error.message);
}

console.log("Setup ended successfully!");
