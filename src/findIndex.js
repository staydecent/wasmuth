import partial from './partial'
import find from './find'

export default function findIndex (predicate, ls) {
  if (arguments.length < 2) return partial(findIndex, arguments)

  return find(predicate, ls, true)
}
