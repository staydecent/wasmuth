import test from 'ava'

import {safeWindow} from '../'

test('safeWindow', (t) => {
  t.is(safeWindow('localStorage.setItem', 'myItem', 'value'), undefined)
})
