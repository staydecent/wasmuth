const test = require('tape')

const { reject } = require('../')

test('reject', (t) => {
  const isOdd = (n) => n % 2 === 1
  t.deepEqual(reject(isOdd, [1, 2, 3, 4]), [2, 4])
  t.deepEqual(reject(isOdd, { a: 1, b: 2, c: 3, d: 4 }), { b: 2, d: 4 })
  t.end()
})
