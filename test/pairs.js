const test = require('tape')

const {toPairs, fromPairs} = require('../')

test('toPairs', (t) => {
  const obj = {a: 1, b: 2, c: 3}
  const pairs = toPairs(obj)
  t.deepEqual(pairs.length, 3)
  t.deepEqual(pairs[1], ['b', 2])
  t.end()
})

test('fromPairs', (t) => {
  const obj = {a: 1, b: 2, c: 3}
  const pairs = toPairs(obj)
  const out = fromPairs(pairs)
  t.deepEqual(out.b, 2)
  t.end()
})
