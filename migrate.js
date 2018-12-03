#!/usr/bin/env node

const path = require('path')
const {
  readdir,
  mkdir,
  writeFile,
  createReadStream,
  createWriteStream
} = require('fs')

const NEW_DIR = 'packages/node_modules/@wasmuth'

const camelToKebab = v => {
  let ret = ''
  let prevLowercase = false
  for (let s of v) {
    const isUppercase = s.toUpperCase() === s
    if (isUppercase && prevLowercase) {
      ret += '-'
    }
    ret += s
    prevLowercase = !isUppercase
  }
  return ret.replace(/-+/g, '-').toLowerCase()
}

const buildPackage = ([from, to]) => {
  mkdir(path.resolve(NEW_DIR, to), err => {
    if (err) throw err
    const source = createReadStream(from)
    const dest = createWriteStream(path.resolve(NEW_DIR, to, `${to}.js`))
    source.on('open', () => source.pipe(dest))
    source.on('end', () => console.log('Succesfully copied', to))
    source.on('error', err => console.error(err))
    const data = JSON.stringify({
      name: `@wasmuth/${to}`,
      version: '2.1.0',
      main: `${to}.js`,
      description: 'Practical, functional utilities that fallback on native implementations as much as possible'
    }, null, 2)
    writeFile(path.resolve(NEW_DIR, to, 'package.json'), data, (err) => {
      if (err) throw err
    })
  })
}

readdir('src', (err, files) => {
  if (err) {
    console.error('build error')
    console.error(err.stack)
    process.exit(1)
  } else {
    const pairs = files.map(n => [path.resolve('src', n), camelToKebab(n.replace('.js', ''))])
    pairs.map(buildPackage)
  }
})
