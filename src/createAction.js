import check from 'check-arg-types'

import merge from './merge'
import pick from './pick'
import partial from './partial'

export default function createAction (type, payload, extra) {
  if (arguments.length === 1) return partial(createAction, arguments)
  check(arguments, ['string', '-any', ['object', 'undefined']])
  let action = {type, payload}
  return extra !== undefined
    ? merge(action, pick(['meta', 'error'], extra))
    : action
}
