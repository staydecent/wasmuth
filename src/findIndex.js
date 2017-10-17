import find from './find'

export default function findIndex (predicate, list) {
  return find(predicate, list, true)
}
