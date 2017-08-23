import check from 'check-arg-types'

import partial from './partial'

const toType = check.prototype.toType

export default function some (fn, ls) {
  if (arguments.length < 2) return partial(some, arguments)
  check(arguments, ['function', ['array', 'object']])
  return toType(ls) === 'array'
    ? Array.prototype.some.call(ls, fn)
    : objSome(fn, ls)
}

function objSome (fn, obj) {
  const keys = Object.keys(obj)
  const len = keys.length
  for (let x = 0; x < len; x++) {
    if (fn(obj[keys[x]])) {
      return true
    }
  }
  return false
}
