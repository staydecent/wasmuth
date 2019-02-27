import check from 'check-arg-types'

import chunk from './packages/node_modules/@wasmuth/chunk'
import compose from './packages/node_modules/@wasmuth/compose'
import deepClone from './packages/node_modules/@wasmuth/deep-clone'
import diffObj from './packages/node_modules/@wasmuth/diff-obj'
import dissoc from './packages/node_modules/@wasmuth/dissoc'
import filter from './packages/node_modules/@wasmuth/filter'
import find from './packages/node_modules/@wasmuth/find'
import findIndex from './packages/node_modules/@wasmuth/find-index'
import fromPairs from './packages/node_modules/@wasmuth/from-pairs'
import groupBy from './packages/node_modules/@wasmuth/group-by'
import groupPropBy from './packages/node_modules/@wasmuth/group-prop-by'
import guid from './packages/node_modules/@wasmuth/guid'
import includes from './packages/node_modules/@wasmuth/includes'
import isEmail from './packages/node_modules/@wasmuth/is-email'
import join from './packages/node_modules/@wasmuth/join'
import last from './packages/node_modules/@wasmuth/last'
import map from './packages/node_modules/@wasmuth/map'
import merge from './packages/node_modules/@wasmuth/merge'
import partial from './packages/node_modules/@wasmuth/partial'
import path from './packages/node_modules/@wasmuth/path'
import pathEq from './packages/node_modules/@wasmuth/path-eq'
import pathOr from './packages/node_modules/@wasmuth/path-or'
import pathSet from './packages/node_modules/@wasmuth/path-set'
import pick from './packages/node_modules/@wasmuth/pick'
import pipe from './packages/node_modules/@wasmuth/pipe'
import range from './packages/node_modules/@wasmuth/range'
import reduce from './packages/node_modules/@wasmuth/reduce'
import reject from './packages/node_modules/@wasmuth/reject'
import relativeTime from './packages/node_modules/@wasmuth/relative-time'
import safeWindow from './packages/node_modules/@wasmuth/safe-window'
import slice from './packages/node_modules/@wasmuth/slice'
import slugify from './packages/node_modules/@wasmuth/slugify'
import some from './packages/node_modules/@wasmuth/some'
import sort from './packages/node_modules/@wasmuth/sort'
import toPairs from './packages/node_modules/@wasmuth/to-pairs'
import uniq from './packages/node_modules/@wasmuth/uniq'
import where from './packages/node_modules/@wasmuth/where'
import without from './packages/node_modules/@wasmuth/without'

const toType = check.prototype.toType

const wasmuth = {
  assoc: pathSet,
  check,
  chunk,
  compose,
  deepClone,
  diffObj,
  dissoc,
  filter,
  find,
  findIndex,
  fromPairs,
  groupBy,
  groupPropBy,
  guid,
  includes,
  isEmail,
  join,
  last,
  map,
  merge,
  partial,
  path,
  pathEq,
  pathOr,
  pathSet,
  pick,
  pipe,
  range,
  reduce,
  reject,
  relativeTime,
  safeWindow,
  slice,
  slugify,
  some,
  sort,
  toPairs,
  toType,
  uniq,
  where,
  without
}

export default wasmuth
