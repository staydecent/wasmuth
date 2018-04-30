import test from 'ava'

import {join} from '../'

test('join', (t) => {
  const arr = ['a', 'b', 'c', 'd']
  t.deepEqual(
    join(arr),
    'a,b,c,d'
  )
  t.deepEqual(
    join()(arr),
    'a,b,c,d'
  )
  t.deepEqual(
    join('-', arr),
    'a-b-c-d'
  )
  t.deepEqual(
    join(' ')(arr),
    'a b c d'
  )
})
