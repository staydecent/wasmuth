import test from 'ava'

import {path} from '../'

test('uniq', (t) => {
  const obj = {a: {b: 2}}
  t.deepEqual(path(['a', 'b'], obj), obj.a.b)
  t.deepEqual(path('a.b', obj), obj.a.b)
})
