import check from 'check-arg-types'

import reduce from './reduce'
import partial from './partial'

export default function groupBy (prop, ls) {
  if (arguments.length < 2) return partial(groupBy, arguments)
  check(arguments, ['string', 'array'])
  return reduce(
    (acc, elm) => {
      if (!acc[elm[prop]]) acc[elm[prop]] = []
      acc[elm[prop]].push(elm)
      return acc
    },
    {},
    ls
  )
}
