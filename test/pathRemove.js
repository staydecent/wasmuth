const test = require("tape");

const {pathRemove} = require("../");

test("pathRemove", (t) => {
  const obj = {a: {b: 2, c: 3}};
  t.deepEqual(pathRemove(["a", "b"], obj), {a: {c: 3}});
  t.end();
});
