import test from 'ava'

import {uniq} from '../'

test('uniq', (t) => {
  const ls = [1, 2, 3, 3]
  t.deepEqual(uniq(ls), [1, 2, 3])
})
