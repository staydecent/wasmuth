#!/usr/bin/env node

const { resolve } = require('path')
const { readdir, writeFile } = require('fs')

const DIR = 'packages/node_modules/@wasmuth'
const topPkg = require(resolve('./package.json'))
const ignore = ['module', 'source', 'scripts', 'standard', 'devDependencies']
const basePkg = {}

Object
  .keys(topPkg)
  .filter(k => !ignore.includes(k))
  .forEach(k => {
    basePkg[k] = topPkg[k]
  })

readdir(resolve(DIR), (err, files) => {
  if (err) {
    console.error(err.stack)
    process.exit(1)
  } else {
    files
      .filter(name => name[0] !== '.')
      .map(name => {
        const file = resolve(DIR, name, 'package.json')
        const pkg = require(file)
        const newPkg = {
          ...basePkg,
          ...pkg,
          dependencies: {
            ...pkg.dependencies,
            ...basePkg.dependencies
          }
        }
        writeFile(file, JSON.stringify(newPkg, null, 2) + '\n', (err) => {
          if (err) throw err
          console.log('synced package.json for', name)
        })
      })
  }
})
