const test = require("tape");

const {pathSet} = require("../");

test("pathSet", (t) => {
  const obj = {a: {b: 1}};
  t.deepEqual(pathSet(["a", "b"], 2, obj), {a: {b: 2}});
  t.deepEqual(pathSet("a.b", 3, obj), {a: {b: 3}});
  t.deepEqual(pathSet("0.a.b", 3, [obj]), [{a: {b: 3}}]);
  t.deepEqual(obj, {a: {b: 1}});
  t.end();
});
