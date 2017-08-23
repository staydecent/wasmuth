import check from 'check-arg-types'

export default function reduce (fn, initVal, ls) {
  if (arguments.length < 3) {
    const args = [reduce].concat(Array.prototype.slice.call(arguments))
    return reduce.bind.apply(reduce, args)
  }
  check(arguments, ['function', '-any', 'array'])
  return Array.prototype.reduce.call(ls, fn, initVal)
}
