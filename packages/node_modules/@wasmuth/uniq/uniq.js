import check from 'check-arg-types'

export default function uniq (ls) {
  check(arguments, ['array'])
  const result = []
  for (let x = 0; x < ls.length; x++) {
    if (result.indexOf(ls[x]) === -1) {
      result.push(ls[x])
    }
  }
  return result
}
