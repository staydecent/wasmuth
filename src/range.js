import check from 'check-arg-types'

/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 * @param  {Number} from
 * @param  {Number} to
 * @return {Array}
 */
export default function range (from, to) {
  check(arguments, ['number', 'number'])
  const arr = []
  let n = from
  while (n < to) {
    arr.push(n)
    n += 1
  }
  return arr
}
