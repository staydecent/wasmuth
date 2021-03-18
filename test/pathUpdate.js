const test = require("tape");

const {pathUpdate} = require("../");

test("pathUpdate", (t) => {
  const obj = {a: {b: 1, c: [10, 20]}};
  t.deepEqual(pathUpdate("a", {d: 2}, obj), {
    a: {b: 1, c: [10, 20], d: 2},
  });
  t.deepEqual(pathUpdate("a.b", 3, obj), {a: {b: 3, c: [10, 20]}});
  t.deepEqual(pathUpdate("a.c", 30, obj), {a: {b: 1, c: 30}});
  t.deepEqual(pathUpdate("a.c", [30], obj), {a: {b: 1, c: [10, 20, 30]}});
  t.end();
});
