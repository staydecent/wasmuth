import path from './path'
import partial from './partial'

export default function pathOr (def, paths, obj) {
  if (arguments.length < 3) return partial(pathOr, arguments)
  return path(paths, obj) || def
}
