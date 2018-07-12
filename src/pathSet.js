import check from 'check-arg-types'

import partial from './partial'
import merge from './merge'
import reduce from './reduce'

export default function pathSet (paths, valToSet, object) {
  if (arguments.length < 3) return partial(pathSet, arguments)
  check(arguments, [['array', 'string'], '-any', 'object'])
  if (check.prototype.toType(paths) === 'string') paths = paths.split('.')
  const copy = merge({}, object)
  reduce(
    (obj, prop, idx) => {
      obj[prop] = obj[prop] || {}
      if (paths.length === (idx + 1)) {
        obj[prop] = valToSet
      }
      return obj[prop]
    },
    copy,
    paths
  )
  return copy
}
