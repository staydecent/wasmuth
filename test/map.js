const test = require('tape')

const {path, map} = require('../')

test('map', (t) => {
  t.deepEqual(map(i => i + 1, [1, 2, 3, 4]), [2, 3, 4, 5])
  t.deepEqual(map((x, idx) => idx, ['a', 'b', 'c', 'd']), [0, 1, 2, 3])
  t.deepEqual(map((...args) => args[1], ['a', 'b', 'c', 'd']), [0, 1, 2, 3])
  t.deepEqual(map(path('id'), [{id: 1}, {id: 2}, {id: 3}, {id: 4}]), [1, 2, 3, 4])
  t.deepEqual(map((k, v) => v + 1, {a: 1, b: 2, c: 3}), {a: 2, b: 3, c: 4})
  t.end()
})
