const test = require("tape");

const {map, compose} = require("../");

test("compose", (t) => {
  t.deepEqual(
    compose(
      map((n) => n + 1),
      Object.values
    )({a: 1, b: 2, c: 3}),
    [2, 3, 4]
  );
  t.end();
});
