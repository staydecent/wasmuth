import check from 'check-arg-types'

export default function fromPairs (arr) {
  check(arguments, ['array'])
  const out = {}
  for (let x = 0; x < arr.length; x++) {
    out[arr[x][0]] = arr[x][1]
  }
  return out
}
