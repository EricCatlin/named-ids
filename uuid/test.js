const { uuid } = require(".");

test("No value generates random", () => {
  const results = {};
  const tests = 100;
  for (var i = 0; i < tests; i++) {
    const result = uuid();
    results[result] = true;
  }

  expect(Object.keys(results).length).toEqual(tests);
});

test("Same value generates same random", () => {
  const results = {};
  const tests = 100;
  for (var i = 0; i < tests; i++) {
    const result = uuid("hello world");
    results[result] = true;
  }

  expect(Object.keys(results).length).toEqual(1);
});

test("Unique values generates unique randoms", () => {
  const results = {};
  const tests = 100;
  for (var i = 0; i < tests; i++) {
    const result = uuid("Hello World " + i);
    results[result] = true;
  }

  expect(Object.keys(results).length).toEqual(tests);
});

test("UUIDS are always comprised of 4 parts, split by '-'", () => {
  const uuids = [];
  const tests = 100;
  for (var i = 0; i < tests; i++) {
    uuids.push(uuid("Hello World " + i));
  }
  uuids.push(uuid());
  expect(uuids.every(i => i.split("-").length)).toEqual(true);
});
