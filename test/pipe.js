const test = require("tape");

const {map, pipe} = require("../");

test("pipe", (t) => {
  t.deepEqual(
    pipe(
      Object.values,
      map((n) => n + 1)
    )({a: 1, b: 2, c: 3}),
    [2, 3, 4]
  );
  t.end();
});
