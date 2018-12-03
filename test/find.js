const test = require('tape')

const {find} = require('../')

test('find', (t) => {
  const arr = ['b', 'a', 'd', 'c']

  // Works
  t.deepEqual(find(v => v === 'a', arr), 'a')

  // Curryable
  t.deepEqual(find(v => v === 'a')(arr), 'a')

  // Undefined
  t.deepEqual(find(v => v === 'x')(arr), undefined)

  // Throw
  t.throws(() => find(v => v === 'x')({a: 1}), TypeError)

  t.end()
})
