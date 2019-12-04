const { hash } = require("./index");

test("No input returns 0", () => {
  const value = hash();
  expect(value).toEqual(0);
});

test("Same input returns same output", () => {
  const results = {};
  const tests = 100;
  for (var i = 0; i < tests; i++) {
    const result = hash("hello world");
    results[result] = true;
  }
  expect(Object.keys(results).length).toEqual(1);
});

test("Different inputs returns unique outputs", () => {
  const results = {};
  const tests = 100;
  for (var i = 0; i < tests; i++) {
    const result = hash("hello world" + i);
    results[result] = true;
  }
  expect(Object.keys(results).length).toEqual(tests);
});
