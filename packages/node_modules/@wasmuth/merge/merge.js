import check from 'check-arg-types'

const toType = check.prototype.toType

/**
 * Merge all given objects into a new object.
 * @return {Object}
 */
export default function merge (/* objects */) {
  const len = arguments.length
  const out = {}
  for (let x = 0; x < len; x++) {
    if (toType(arguments[x]) !== 'object') {
      throw new TypeError('All arguments must be objects!')
    }
    let obj = arguments[x]
    let keys = Object.keys(obj)
    let keysLen = keys.length
    for (let z = 0; z < keysLen; z++) {
      let key = keys[z]
      let type = toType(obj[key])
      if (type === 'object') {
        out[key] = merge(obj[key])
      } else if (type === 'array') {
        out[key] = obj[key].slice(0)
      } else {
        out[key] = obj[key]
      }
    }
  }
  return out
}
