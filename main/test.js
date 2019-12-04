const { getNamedId } = require("./index");

test("Generates random name", () => {
  const value = getNamedId();
  expect(value).not.toBeNull();
});

test("Generates random names", () => {
  const tests = 1000;
  const values = [];

  for (let i = 0; i < tests; i++) {
    values.push(getNamedId("hello world" + i));
  }

  const unique = values.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  expect(values.length).toEqual(unique.length);
});
