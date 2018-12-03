import check from 'check-arg-types'

import deepClone from './deepClone'
import merge from './merge'
import partial from './partial'
import reduce from './reduce'

export default function pathSet (paths, valToSet, object) {
  if (arguments.length < 3) return partial(pathSet, arguments)
  check(arguments, [['array', 'string'], '-any', ['object', 'array']])
  if (check.prototype.toType(paths) === 'string') paths = paths.split('.')
  const copy = check.prototype.toType(paths) === 'object' ? merge({}, object) : deepClone(object)
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
