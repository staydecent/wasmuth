import check from 'check-arg-types'

import partial from './partial'

export default function where (key, val, obj) {
  if (arguments.length < 3) return partial(where, arguments)
  check(Array.prototype.slice.call(arguments, 0, 3), ['string', '-any', 'object'])
  return obj[key] === val
}
