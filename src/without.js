import filter from './filter'
import pick from './pick'
import partial from './partial'

/**
 * Return a new object with only the specified keys included.
 * @param  {Array} keys
 * @param  {Object} obj
 * @return {Object}
 */
export default function without (keys, obj) {
  if (arguments.length < 2) return partial(without, arguments)
  const keep = filter((k) => keys.indexOf(k) === -1, Object.keys(obj))
  return pick(keep, obj)
}
