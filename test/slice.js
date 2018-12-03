const test = require('tape')

const {slice} = require('../')

test('slice', (t) => {
  const arr = ['a', 'b', 'c', 'd']
  t.deepEqual(
    slice(1, 3, arr),
    ['b', 'c']
  )
  t.deepEqual(
    slice(1, Infinity, arr),
    ['b', 'c', 'd']
  )
  t.deepEqual(
    slice(0, -1, arr),
    ['a', 'b', 'c']
  )
  t.deepEqual(
    slice(-3, -1, arr),
    ['b', 'c']
  )
  const orig = 'ramda'
  t.deepEqual(
    slice(0, 3, orig),
    'ram'
  )
  t.is(orig, 'ramda')
  t.deepEqual(arr, ['a', 'b', 'c', 'd'])
  t.end()
})
