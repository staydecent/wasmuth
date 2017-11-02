import check from 'check-arg-types'

import partial from './partial'

const toType = check.prototype.toType

export default function slice (start, end, input) {
  if (arguments.length < 2) return partial(slice, arguments)
  check(arguments, ['number', 'number', ['array', 'string']])
  return toType(input) === 'array'
    ? Array.prototype.slice.call(input, start, end)
    : String.prototype.slice.call(input, start, end)
}
