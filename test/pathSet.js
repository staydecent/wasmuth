import test from 'ava'

import {pathSet} from '../'

test('uniq', (t) => {
  const obj = {a: {b: 1}}
  t.deepEqual(pathSet(['a', 'b'], 2, obj), {a: {b: 2}})
  t.deepEqual(pathSet('a.b', 3, obj), {a: {b: 3}})
})
