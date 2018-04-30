import check from 'check-arg-types'

import partial from './partial'
import slice from './slice'

export default function chunk (len, input) {
  if (arguments.length < 2) return partial(chunk, arguments)
  check(arguments, ['number', ['array', 'string']])

  const chunks = []
  const total = input.length
  let i = 0

  while (i < total) {
    chunks.push(slice(i, i += len, input))
  }

  return chunks
}