# wasmuth

[![Build Status](https://travis-ci.org/staydecent/wasmuth.svg?branch=master)](https://travis-ci.org/staydecent/wasmuth)

Practical, functional utilities that fallback on native implementations as much as possible.

## Why?

I love Ramda. But, some of the naming/semantics is not obvious for those newer to functional programming. Also, filesize (~7kb vs ~50kb 😵). Also, why not fallback to native implementations? Any performance concerns are not actually a bottleneck, and JavaScript VMs will continue to optimize these (map, filter, reduce, some etc.). Also, let me iterate objects without using a differently named export. And, finally, Ramda has a lot of extra functions I never used.

## API

Every function is curryable. If it takes 2 arguments and you give it 1, it will return a partially applied function that expects only the 2 argument.

---
#### chunk

> chunk(len: Number, input: Array): Array

Group an array into smaller arrays.

```javascript
import chunk from '@wasmuth/chunk'
chunk(2, ['a', 'b', 'c', 'd'])
// => [['a', 'b'], ['c', 'd']]
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/chunk/chunk.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/chunk.js)

---
#### filter

> filter(predicate: Function, input: Array|Object): Array|Object

```javascript
import filter from '@wasmuth/filter'
const predicate = a => a % 2 === 0
filter(predicate, [1, 2, 3, 4]) // => [2, 4]
```

You can also filter over objects:

```javascript
import filter from '@wasmuth/filter'
filter((val, key) => key === 'a' || val === 2, {a: 1, b: 2, c: 3})
// => {a: 1, b: 2}
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/filter/filter.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/filter.js)

---
#### find

> find(predicate: Function, ls: Array): Array|undefined

It returns `undefined` or the first element of ls satisfying predicate.

```javascript
import find from '@wasmuth/find'
find(v => v === 'a', ['b', 'a', 'd', 'c'])
// => 'a'
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/find/find.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/find.js)

---
#### find-index

> findIndex(predicate: Function, ls: Array): Array|undefined

It returns `undefined` or the first index of an element satisfying predicate.

```javascript
import findIndex from '@wasmuth/find-index'
find(v => v === 'a', ['b', 'a', 'd', 'c'])
// => 1
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/find-index/find-index.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/find-index.js)

---
#### from-pairs

> fromPairs(ls: Array): Object

```javascript
import fromPairs from '@wasmuth/from-pairs'
fromPairs([['a', 1], ['b', 2]])
// => {'a': 1, 'b': 2}
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/from-pairs/from-pairs.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/from-pairs.js)

---
#### group-by

> groupBy(prop: String, ls: Array): Object

Gather objects based on their value of `prop`.

```javascript
import groupBy from '@wasmuth/group-by'
const src = [{a: 1, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}]
groupBy('a', src)
// => {1: [{a: 1, b: 1}, {a: 1, b: 2}], 2: [{a: 2, b: 3}]}
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/group-by/group-by.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/group-by.js)

---
#### group-prop-by

> groupPropBy(valProp: String, prop: String, ls: Array): Object

Gather the value of `valProp` from each object based on their value of `prop`.

```javascript
import groupPropBy from '@wasmuth/group-prop-by'
const src = [{a: 1, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}]
groupPropBy('b', 'a', src)
// => {1: [1, 2], 2: [3]}
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/group-prop-by/group-prop-by.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/group-prop-by.js)

---
#### includes

> includes(search: Any, input: String|Array): Boolean

Just a curryable wrapper that maps to either:
```
Array.prototype.includes
String.prototype.includes
```

```javascript
import includes from '@wasmuth/includes'
includes('c', ['a', 'b', 'c', 'd'])
// => true
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/includes/includes.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/includes.js)

---
#### join

> join(delim: String?, arr: Array): String

Curryable wrapper around native `Array.prototype.join`.

```javascript
import join from '@wasmuth/join'
const arr = ['a', 'b', 'c', 'd']

join(arr)
// => 'a,b,c,d'

join()(arr)
// => 'a,b,c,d'

join('-', arr)
// => 'a-b-c-d'
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/join/join.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/join.js)

---
#### map

> map(mapFn: Function, input: Array|Object): Array|Object

Returns the result of calling `mapFn` on each element in the iterable `input`. Can be an Array or Object.

```javascriptg
import map from '@wasmuth/map'
const double = x => x * 2

map(double, [1, 2, 3])
// => [2, 4, 6]

map((val, prop) => prop === 'a' ? double(val) : val, {a: 1, b: 2})
// => {a: 2, b: 2}
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/map/map.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/map.js)

---
#### path

> path(path: String|Array, obj: Object): Any

Return the value at the given path, for a given object or array.

```javascript
import path from '@wasmuth/path'
const obj = {a: {b: 2}}

path(['a', 'b'], obj)
// => 2

path('a.b', obj)
// => 2
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/path/path.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/path.js)

---
#### path-eq

> pathEq(path: String|Array, val: Any, obj: Object): Boolean

Check if the value at a given path, for a given object equals `val`.

```javascript
import pathEq from '@wasmuth/path-eq'
const obj = {a: {b: 2}}

pathEq(['a', 'b'], 2, obj)
// => true

pathEq('a.b', 4, obj)
// => false
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/path-eq/path-eq.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/path-eq.js)

---
#### path-or

> pathOr(def: Any, path: String|Array, obj: Object): Any

Return the value at the given path, for a given object or array, or `def` if falsy.

```javascript
import pathOr from '@wasmuth/path-or'
const obj = {a: {b: 2}}

pathOr(5, ['x', 'y'], obj)
// => 5

pathOr(11, 'a.b', obj)
// => 2
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/path-or/path-or.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/path-or.js)

---
#### path-set

> pathSet(def: Any, path: String|Array, obj: Object): Any

Set the value on a given path for a given object.

```javascript
import pathSet from '@wasmuth/path-set'
const obj = {a: {b: 1}}

pathSet(['a', 'b'], 2, obj)
// => {a: {b: 2}}

pathSet('a.b', 3, obj)
// => {a: {b: 3}}

pathSet('0.a.b', 3, [obj])
// => [{a: {b: 3}}]
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/path-set/path-set.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/path-set.js)

---
#### pick

> pick(keys: Array, obj: Object): Object

Return obj with only the keys specified.

```javascript
import pick from '@wasmuth/pick'

pick(['a', 'c'], {a: 1, b: 2, c: 3})
// => {a: 1, c: 3}
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/pick/pick.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/pick.js)

---
#### pipe

> pipe(fn1: Function, ..., fnN: Function): Function

Perform left-to-right function composition. That is, the value of each function (starting on the left), is passed to the next function.

```javascript
import pipe from '@wasmuth/pipe'

pipe(
  Object.values,
  map(n => n + 1)
)({a: 1, b: 2, c: 3})
// => [2, 3, 4]
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/pipe/pipe.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/pipe.js)

---
#### range

> range(from: Number, to: Number): Array

Returns a list of numbers from `from` (inclusive) to `to` (exclusive).

```javascript
import range from '@wasmuth/range'
range(0, 6)
// => [0, 1, 2, 3, 4, 5]
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/range/range.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/range.js)

---
#### to-pairs

> toPairs(obj: Objectr): Array

```javascript
import toPairs from '@wasmuth/to-pairs'

toPairs({a: 1, b: 2, c: 3})
// => [['a', 1], ['b', 2], ['c', 3]]
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/to-pairs/to-pairs.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/to-pairs.js)
