const test = require('tape')

const {groupBy} = require('../')

test('groupBy', (t) => {
  const src = [{a: 1, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}]
  const grouped = groupBy('a', src)
  t.deepEqual(grouped[1].length, 2)
  t.deepEqual(grouped[2].length, 1)
  t.end()
})
