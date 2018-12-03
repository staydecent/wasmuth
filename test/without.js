const test = require('tape')

const {without} = require('../')

test('without', (t) => {
  t.deepEqual(without(['b'], {a: 1, b: 2, c: 3}), {a: 1, c: 3})
  t.deepEqual(without(['a', 'b'], {a: 1, b: 2, c: 3}), {c: 3})
  t.deepEqual(without('c', {a: 1, b: 2, c: 3}), {a: 1, b: 2})
  t.end()
})
