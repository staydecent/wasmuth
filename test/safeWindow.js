const test = require('tape')

const { safeWindow } = require('../')

test('safeWindow', (t) => {
  t.is(safeWindow('localStorage.setItem', 'myItem', 'value'), undefined)
  t.end()
})
