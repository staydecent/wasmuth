import check from 'check-arg-types'

const toType = check.prototype.toType

/**
 * Functional, curryable wrapper around native Array.map implementation.
 * @param  {Function} fn  The function to apply to each element in the Array
 * @param  {Array}    ls  The array to operate on
 * @return {Array}        The modified Array
 */
export default function map (fn, ls) {
  if (!fn && !ls) {
    return undefined
  }
  if (fn && !ls) {
    return map.bind(map, fn)
  }
  check(arguments, ['function', ['array', 'object']])
  return toType(ls) === 'array'
    ? Array.prototype.map.call(ls, fn)
    : objMap(fn, ls)
}

function objMap (fn, obj) {
  const keys = Object.keys(obj)
  const len = keys.length
  const result = {}
  for (let x = 0; x < len; x++) {
    let k = keys[x]
    result[k] = fn(k, obj[k])
  }
  return result
}
