const {exec} = require('child_process')

if (require.main === module) {
  const type = process.argv[process.argv.length - 1]
  const name = process.argv[process.argv.length - 2]

  console.log({name, type})

  exec(`npm --no-git-tag-version version ${type}`, (err, stdout, stderr) => {
    if (err) {
      console.error({err})
      return
    }
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  })
}
