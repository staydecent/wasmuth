import check from 'check-arg-types'

import pathGet from './path'
import partial from './partial'
import merge from './merge'

const toType = check.prototype.toType

// Cache prev value for given path to allow easy diffing in the listner.
const cache = {}

export default function watchStore (store, path, cb) {
  if (arguments.length < 3) return partial(watchStore, arguments)
  check(arguments, ['string', '-any', 'object'])

  const {getState, subscribe} = store
  const key = path.join(',')
  const getPathVal = pathGet(path)
  const diff = () => {
    const newVal = getPathVal(getState())
    if (newVal === undefined) {
      return
    }
    const oldVal = cache[key]
    if (oldVal === undefined || oldVal !== newVal) {
      if (toType(newVal) === 'object') {
        cache[key] = merge({}, newVal)
      } else {
        cache[key] = newVal
      }
      cb(newVal, oldVal)
    }
  }

  // Let's invoke diff right away as we may want to react to
  // our initialState set in our store.
  diff()
  subscribe(diff)
}
