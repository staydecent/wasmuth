import check from 'check-arg-types'
import equal from 'fast-deep-equal'

import assoc from './src/assoc'
import createAction from './src/createAction'
import deepClone from './src/deepClone'
import diffObj from './src/diffObj'
import dissoc from './src/dissoc'
import filter from './src/filter'
import find from './src/find'
import findIndex from './src/findIndex'
import fromPairs from './src/fromPairs'
import groupBy from './src/groupBy'
import groupPropBy from './src/groupPropBy'
import guid from './src/guid'
import isEmail from './src/isEmail'
import last from './src/last'
import map from './src/map'
import merge from './src/merge'
import partial from './src/partial'
import path from './src/path'
import pathEq from './src/pathEq'
import pathOr from './src/pathOr'
import pathSet from './src/pathSet'
import pick from './src/pick'
import pipe from './src/pipe'
import range from './src/range'
import reduce from './src/reduce'
import reject from './src/reject'
import request from './src/request'
import slice from './src/slice'
import slugify from './src/slugify'
import some from './src/some'
import toPairs from './src/toPairs'
import uniq from './src/uniq'
import watchStore from './src/watchStore'
import where from './src/where'
import without from './src/without'

const toType = check.prototype.toType

const wasmuth = {
  assoc,
  createAction,
  deepClone,
  diffObj,
  dissoc,
  equal,
  filter,
  find,
  findIndex,
  fromPairs,
  groupBy,
  groupPropBy,
  guid,
  isEmail,
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
  request,
  slice,
  slugify,
  some,
  toPairs,
  toType,
  uniq,
  watchStore,
  where,
  without
}

export default wasmuth
