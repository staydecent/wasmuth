import check from 'check-arg-types'

export default function deepClone (obj) {
  check(arguments, ['object'])
  return JSON.parse(JSON.stringify(obj))
}
