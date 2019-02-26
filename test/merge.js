const test = require('tape')

const { merge } = require('../')

test('merge', (t) => {
  const chain = { chain: 1 }
  const o1 = { a: 1, b: 2, d: [chain, { a: 1 }] }
  const o2 = { a: 'a', c: 'c' }
  chain.chain = 2
  t.deepEqual(
    merge(o1, o2),
    { a: 'a', b: 2, c: 'c', d: [{ chain: 2 }, { a: 1 }] }
  )
  t.end()
})
