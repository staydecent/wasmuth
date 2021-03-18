const test = require("tape");

const {uniq} = require("../");

test("uniq", (t) => {
  const ls = [1, 2, 3, 3];
  t.deepEqual(uniq(ls), [1, 2, 3]);
  t.end();
});
