import test from 'ava'

import {toPairs, fromPairs} from '../'

test('toPairs', (t) => {
  const obj = {a: 1, b: 2, c: 3}
  const pairs = toPairs(obj)
  t.deepEqual(pairs.length, 3)
  t.deepEqual(pairs[1], ['b', 2])
})

test('fromPairs', (t) => {
  const obj = {a: 1, b: 2, c: 3}
  const pairs = toPairs(obj)
  const out = fromPairs(pairs)
  t.deepEqual(out.b, 2)
})
