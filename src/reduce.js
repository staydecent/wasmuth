import check from 'check-arg-types'

import partial from './partial'

export default function reduce (fn, initVal, ls) {
  if (arguments.length < 3) return partial(reduce, arguments)
  check(arguments, ['function', '-any', 'array'])
  return Array.prototype.reduce.call(ls, fn, initVal)
}
