const test = require('tape')

const {diffObj} = require('../')

test('diffObj', (t) => {
  const o1 = {a: 1, b: 2}
  const o2 = {a: 1, b: 7, c: 3}
  const ret = diffObj(o1, o2)
  t.deepEqual(ret, {b: 7, c: 3})
  t.end()
})
