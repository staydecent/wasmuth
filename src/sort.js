import check from 'check-arg-types'

import partial from './partial'

const toType = check.prototype.toType

export default function sort (fn, ls) {
  if (arguments.length === 0) {
    return sort
  } else if (toType(fn) === 'array' && ls === undefined) {
    return Array.prototype.sort.call(fn)
  } else if (toType(fn) === 'function' && ls === undefined) {
    return partial(sort, arguments)
  } else {
    check(arguments, ['function', 'array'])
    return Array.prototype.sort.call(ls, fn)
  }
}
