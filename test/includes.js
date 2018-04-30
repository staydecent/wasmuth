import test from 'ava'

import {includes} from '../'

test('includes', (t) => {
  const arr = ['a', 'b', 'c', 'd']
  t.deepEqual(
    includes('c', arr),
    true
  )
  t.deepEqual(
    includes('d')(arr),
    true
  )
  t.deepEqual(
    includes('notthere')(arr),
    false
  )
  t.deepEqual(
    includes('was')('wasmuth'),
    true
  )
})
