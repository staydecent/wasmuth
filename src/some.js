import check from 'check-arg-types'

const toType = check.prototype.toType

export default function some (fn, ls) {
  if (!fn && !ls) {
    return undefined
  }
  if (fn && !ls) {
    return some.bind(some, fn)
  }
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
