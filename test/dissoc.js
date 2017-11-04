import test from 'ava'

import {dissoc} from '../'

test('dissoc', (t) => {
  t.deepEqual(dissoc('b', {a: 1, b: 2, c: 3}), {a: 1, c: 3})
  t.deepEqual(dissoc('a', {a: 1, b: 2, c: 3}), {b: 2, c: 3})
})
