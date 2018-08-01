import check from 'check-arg-types'

export default function deepClone (obj) {
  check(arguments, [['object', 'array']])
  return JSON.parse(JSON.stringify(obj))
}
