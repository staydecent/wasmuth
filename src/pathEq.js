import path from './path'

export default function pathEq (paths, val, obj) {
  if (arguments.length < 3) {
    const args = [pathEq].concat(Array.prototype.slice.call(arguments))
    return pathEq.bind.apply(pathEq, args)
  }
  return path(paths, obj) === val
}
