const test = require('tape')

const { assoc } = require('../')

test('assoc', (t) => {
  const obj = { a: 1, b: 2, c: 3 }
  const ret = assoc('b', 7, obj)
  t.deepEqual(ret, { a: 1, b: 7, c: 3 })
  t.is(ret.b, 7)
  t.end()
})
