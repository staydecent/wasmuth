const test = require("tape");

const {join} = require("../");

test("join", (t) => {
  const arr = ["a", "b", "c", "d"];
  t.deepEqual(join(arr), "a,b,c,d");
  t.deepEqual(join()(arr), "a,b,c,d");
  t.deepEqual(join("-", arr), "a-b-c-d");
  t.deepEqual(join(" ")(arr), "a b c d");
  t.end();
});
