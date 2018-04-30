import test from 'ava'

import {chunk} from '../'

test('chunk', (t) => {
  const arr = ['a', 'b', 'c', 'd']
  t.deepEqual(
    chunk(2, arr),
    [['a', 'b'], ['c', 'd']]
  )
  t.deepEqual(
    chunk(3)(arr),
    [['a', 'b', 'c'], ['d']]
  )
  t.deepEqual(
    chunk(3)('wasmuth'),
    ['was', 'mut', 'h']
  )
})
