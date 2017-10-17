export default function find (list, predicate, returnIndex = false) {
  if (list == null) {
    throw new TypeError('Array.prototype.find called on null or undefined')
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function')
  }
  const length = list.length || 0
  let value

  for (let x = 0; x < length; x++) {
    value = list[x]
    if (predicate(value, x, list)) {
      return returnIndex ? x : value
    }
  }
  return undefined
}
