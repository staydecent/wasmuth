import check from 'check-arg-types'

import partial from './partial'

export default function find (predicate, ls, returnIndex) {
  if (arguments.length < 2) return partial(find, arguments)
  check(arguments, ['function', 'array', '-any'])

  const length = ls.length
  let value

  for (let x = 0; x < length; x++) {
    value = ls[x]
    if (predicate(value, x, ls)) {
      return returnIndex ? x : value
    }
  }

  return undefined
}
