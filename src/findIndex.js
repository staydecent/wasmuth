import find from './find'

export default function findIndex (list, predicate) {
  return find(list, predicate, true)
}
