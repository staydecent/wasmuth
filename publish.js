#!/usr/bin/env node

const {resolve} = require('path')
const {exec} = require('child_process')

// $ npm run m-publish chunk
if (require.main === module) {
  if (process.argv.length < 3) {
    console.log('Not enough arguments supplied')
    process.exit(1)
  }

  const name = process.argv[process.argv.length - 1]
  const dir = resolve('packages/node_modules/@wasmuth', name)

  process.chdir(dir)

  exec(`npm publish`, (err, stdout, stderr) => {
    console.log(name, {err, stdout, stderr})
  })
}
