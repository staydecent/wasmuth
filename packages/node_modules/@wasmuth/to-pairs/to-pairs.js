import check from 'check-arg-types'

export default function toPairs (obj) {
  check(arguments, ['object'])
  const keys = Object.keys(obj)
  const len = keys.length
  const pairs = []
  for (let x = 0; x < len; x++) {
    pairs.push([keys[x], obj[keys[x]]])
  }
  return pairs
}
