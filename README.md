# wasmuth

[![Build Status](https://travis-ci.org/staydecent/wasmuth.svg?branch=master)](https://travis-ci.org/staydecent/wasmuth)

Practical, functional utilities that fallback on native implementations as much as possible.

## Why?

I love Ramda. But, some of the naming/semantics is not obvious for those newer to functional programming. Also, filesize (~7kb vs ~50kb 😵). Also, why not fallback to native implementations? Any performance concerns are not actually a bottleneck, and JavaScript VMs will continue to optimize these (map, filter, reduce, some etc.). Also, let me iterate objects without using a differently named export. And, finally, Ramda has a lot of extra functions I never used.

## API

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

> filter(predicate: Function, x: Array|Object): Array|Object

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

```javascript
import includes from '@wasmuth/includes'
includes('c', ['a', 'b', 'c', 'd'])
// => true
```

[Source](https://github.com/staydecent/wasmuth/tree/master/packages/node_modules/@wasmuth/includes/includes.js)
[Tests](https://github.com/staydecent/wasmuth/tree/master/test/includes.js)
