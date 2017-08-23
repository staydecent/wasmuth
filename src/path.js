import check from 'check-arg-types'

import partial from './partial'

export default function path (paths, obj) {
  if (arguments.length < 2) return partial(path, arguments)
  check(arguments, ['array', 'object'])
  let val = obj
  for (let x = 0; x < paths.length; x++) {
    if (val == null) {
      return
    }
    val = val[paths[x]]
  }
  return val
}
