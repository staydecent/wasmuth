const test = require("tape");

const {findIndex} = require("../");

test("findIndex", (t) => {
  const arr = ["b", "a", "d", "c"];

  // Works
  t.deepEqual(
    findIndex((v) => v === "a", arr),
    1
  );

  // Curryable
  t.deepEqual(findIndex((v) => v === "a")(arr), 1);

  // Undefined
  t.deepEqual(findIndex((v) => v === "x")(arr), undefined);

  // Throw
  t.throws(() => findIndex((v) => v === "x")({a: 1}), TypeError);

  t.end();
});
