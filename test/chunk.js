const test = require('tape')

const { chunk } = require('../')

test('chunk', (t) => {
  const arr = ['a', 'b', 'c', 'd']
  t.deepEqual(
    chunk(2, arr),
    [['a', 'b'], ['c', 'd']]
  )
  t.deepEqual(
    chunk(3)(arr),
    [['a', 'b', 'c'], ['d']]
  )
  t.deepEqual(
    chunk(3)('wasmuth'),
    ['was', 'mut', 'h']
  )
  t.end()
})
