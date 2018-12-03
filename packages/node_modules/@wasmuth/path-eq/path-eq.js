import path from './path'
import partial from './partial'

export default function pathEq (paths, val, obj) {
  if (arguments.length < 3) return partial(pathEq, arguments)
  return path(paths, obj) === val
}
