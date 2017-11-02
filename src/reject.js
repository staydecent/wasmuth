import check from 'check-arg-types'

import partial from './partial'

const toType = check.prototype.toType

/**
 * @param  {Function} fn
 * @param  {Array}    ls
 * @return {Array}
 */
export default function reject (fn, ls) {
  if (arguments.length < 2) return partial(reject, arguments)
  check(arguments, ['function', ['array', 'object']])
  return toType(ls) === 'array'
    ? arrReject(fn, ls)
    : objReject(fn, ls)
}

function arrReject (fn, arr) {
  const len = arr.length
  const result = []
  for (let x = 0; x < len; x++) {
    if (!fn(arr[x])) {
      result.push(arr[x])
    }
  }
  return result
}

function objReject (fn, obj) {
  const keys = Object.keys(obj)
  const len = keys.length
  const result = {}
  for (let x = 0; x < len; x++) {
    if (!fn(obj[keys[x]])) {
      result[keys[x]] = obj[keys[x]]
    }
  }
  return result
}
