#!/usr/bin/env node

const {resolve} = require("path");
const {exec} = require("child_process");

// $ npm run m-version chunk patch
if (require.main === module) {
  if (process.argv.length < 3) {
    console.log("Not enough arguments supplied");
    process.exit(1);
  }
  const type = process.argv[process.argv.length - 1];
  const name = process.argv[process.argv.length - 2];
  const root = process.cwd();
  const dir = resolve("packages/node_modules/@wasmuth", name);

  process.chdir(dir);

  exec(`npm --no-git-tag-version version ${type}`, (err, stdout, stderr) => {
    if (err || stderr) {
      console.error({err, stderr});
      return;
    }

    console.log(`${name} ${type}: ${stdout}`);
    process.chdir(root);

    const tag = `@wasmuth/${name}@${stdout.replace("v", "")}`;
    exec(`git tag ${tag}`, (err, stdout, stderr) => {
      if (err || stderr) {
        console.error({err, stderr});
      } else {
        console.log(stdout);
        exec("git push --tags", (err, stdout, stderr) => {
          if (err || stderr) {
            console.error({err, stderr});
          } else {
            console.log(stdout);
          }
        });
      }
    });
  });
}
