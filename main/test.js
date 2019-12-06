const { getNamedId, getNameIdParts } = require("./index");

test("Generates random name", () => {
  const value = getNamedId();
  expect(value).not.toBeNull();
});

test("Generates name parts", () => {
  const { number, adjective, noun, verb, adverb } = getNameIdParts();
  expect(number).not.toBeNull();
  expect(adjective).not.toBeNull();
  expect(noun).not.toBeNull();
  expect(verb).not.toBeNull();
  expect(adverb).not.toBeNull();
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


test("Validate name parts have equal distribution", () => {
    const tests = 1000;
    const values = [];
  
    for (let i = 0; i < tests; i++) {
      values.push(getNameIdParts("hello world" + i));
    }
  
    const unique = values.filter(
      (value, index, self) => self.indexOf(value) === index
    );
  
    expect(values.length).toEqual(unique.length);
  });