import test from 'ava'

import {pipe, map} from '../'

test('pipe', (t) => {
  t.deepEqual(
    pipe(
      Object.values,
      map(n => n + 1)
    )({a: 1, b: 2, c: 3}),
    [2, 3, 4]
  )
})
