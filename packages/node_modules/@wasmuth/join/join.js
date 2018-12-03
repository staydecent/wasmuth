import check from 'check-arg-types'

import partial from './partial'

const toType = check.prototype.toType

export default function join (delim, ls) {
  if (arguments.length === 0) {
    return join
  } else if (toType(delim) === 'array' && ls === undefined) {
    return Array.prototype.join.call(delim)
  } else if (toType(delim) === 'string' && ls === undefined) {
    return partial(join, arguments)
  } else {
    check(arguments, ['string', 'array'])
    return Array.prototype.join.call(ls, delim)
  }
}
