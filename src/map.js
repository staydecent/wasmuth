import check from 'check-arg-types'

import partial from './partial'

const toType = check.prototype.toType

/**
 * Functional, curryable wrapper around native Array.map implementation.
 * @param  {Function} fn  The function to apply to each element in the Array
 * @param  {Array}    ls  The array to operate on
 * @return {Array}        The modified Array
 */
export default function map (fn, ls) {
  if (arguments.length < 2) return partial(map, arguments)
  check(arguments, ['function', ['array', 'object']])
  return toType(ls) === 'array'
    ? fn.length === 1
      ? arrMap(fn, ls)
      : Array.prototype.map.call(ls, fn)
    : objMap(fn, ls)
}

function arrMap (fn, arr) {
  const len = arr.length
  const result = []
  for (let x = 0; x < len; x++) {
    result[x] = fn(arr[x])
  }
  return result
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
