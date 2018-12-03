import check from 'check-arg-types'

import filter from './filter'
import pick from './pick'
import partial from './partial'

const toType = check.prototype.toType

/**
 * Return a new object without any of the specified keys included.
 * @param  {Array} keys
 * @param  {Object} obj
 * @return {Object}
 */
export default function without (keys, obj) {
  if (arguments.length < 2) return partial(without, arguments)
  check(arguments, [['string', 'array'], 'object'])
  if (toType(keys) === 'string') {
    keys = [keys]
  }
  const keep = filter((k) => keys.indexOf(k) === -1, Object.keys(obj))
  return pick(keep, obj)
}
