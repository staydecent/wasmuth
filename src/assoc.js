import check from 'check-arg-types'

import partial from './partial'

export default function assoc (key, val, obj) {
  if (arguments.length < 3) return partial(assoc, arguments)
  check(arguments, ['string', '-any', 'object'])
  const result = {}
  const keys = Object.keys(obj)
  for (var x = 0; x < keys.length; x++) {
    result[keys[x]] = obj[keys[x]]
  }
  result[key] = val
  return result
}
