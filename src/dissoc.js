import partial from './partial'
import without from './without'

export default function dissoc (key, obj) {
  if (arguments.length < 2) return partial(dissoc, arguments)
  return without([key], obj)
}
