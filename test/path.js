const test = require('tape')

const { path } = require('../')

test('path', (t) => {
  const obj = { a: { b: 2 } }
  t.deepEqual(path(['a', 'b'], obj), obj.a.b)
  t.deepEqual(path('a.b', obj), obj.a.b)
  t.end()
})
