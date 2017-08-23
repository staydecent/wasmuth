import check from 'check-arg-types'

/**
 * Return a new object with only the specified keys included.
 * @param  {Array} keys
 * @param  {Object} obj
 * @return {Object}
 */
export default function pick (keys, obj) {
  if (!keys && !obj) {
    return undefined
  }
  if (keys && !obj) {
    return pick.bind(pick, keys)
  }
  check(arguments, ['array', 'object'])
  const result = {}
  for (let x = 0; x < keys.length; x++) {
    let k = keys[x]
    if (obj[k]) {
      result[k] = obj[k]
    }
  }
  return result
}
