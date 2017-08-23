// How is o2 different from o1
export default function diffObj (o1 = {}, o2 = {}) {
  const out = {}
  const keys = Object.keys(o1)
  for (let x = 0; x < keys.length; x++) {
    const k = keys[x]
    if (o1[k] !== o2[k]) {
      out[k] = o2[k]
    }
  }
  const newKeys = Object.keys(o2)
  for (let z = 0; z < newKeys.length; z++) {
    if (!o1[newKeys[z]]) {
      out[newKeys[z]] = o2[newKeys[z]]
    }
  }
  return out
}
