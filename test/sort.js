import test from 'ava'

import {sort} from '../'

test('sort', (t) => {
  const arr = ['b', 'a', 'd', 'c']
  t.deepEqual(
    sort(arr),
    ['a', 'b', 'c', 'd']
  )
  t.deepEqual(
    sort()(arr),
    ['a', 'b', 'c', 'd']
  )
  const objs = [
    {count: 3},
    {count: 2},
    {count: 9},
    {count: 1}
  ]
  t.deepEqual(
    sort(
      ({count: aCount}, {count: bCount}) => aCount > bCount,
      objs
    ),
    [
      {count: 1},
      {count: 2},
      {count: 3},
      {count: 9}
    ]
  )
  t.deepEqual(
    sort(({count: aCount}, {count: bCount}) => aCount < bCount)(objs),
    [
      {count: 9},
      {count: 3},
      {count: 2},
      {count: 1}
    ]
  )
})
