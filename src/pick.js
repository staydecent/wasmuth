import check from 'check-arg-types'

import partial from './partial'

/**
 * Return a new object with only the specified keys included.
 * @param  {Array} keys
 * @param  {Object} obj
 * @return {Object}
 */
export default function pick (keys, obj) {
  if (arguments.length < 2) return partial(pick, arguments)
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
