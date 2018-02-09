import test from 'ava'

import {groupPropBy} from '../'

test('groupPropBy', (t) => {
  const src = [{a: 1, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}]
  const grouped = groupPropBy('b', 'a', src)
  t.deepEqual(grouped[1], [1, 2])
  t.deepEqual(grouped[2], [3])
})
