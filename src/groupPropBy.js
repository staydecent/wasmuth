import check from 'check-arg-types'

import reduce from './reduce'
import partial from './partial'

export default function groupPropBy (valProp, prop, ls) {
  if (arguments.length < 3) return partial(groupPropBy, arguments)
  check(arguments, ['string', 'string', 'array'])
  return reduce(
    (acc, elm) => {
      if (!acc[elm[prop]]) acc[elm[prop]] = []
      acc[elm[prop]].push(elm[valProp])
      return acc
    },
    {},
    ls
  )
}
