import check from 'check-arg-types'

import partial from './partial'

const toType = check.prototype.toType

export default function includes (search, input) {
  if (arguments.length < 2) return partial(includes, arguments)
  check(arguments, ['-any', ['array', 'string']])
  return toType(input) === 'array'
    ? Array.prototype.includes.call(input, search)
    : String.prototype.includes.call(input, search)
}