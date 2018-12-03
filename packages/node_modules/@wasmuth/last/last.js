import check from 'check-arg-types'

export default function last (ls) {
  check([arguments[0]], ['array'])
  const n = ls.length ? ls.length - 1 : 0
  return ls[n]
}
