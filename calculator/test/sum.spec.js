const sum = require('../src/sum');

test("1 + 1 must return 2", () => {
  expect(sum(1,1)).toBe(2);
})

test("1 + 2 must return 3", () => {
  expect(sum(1,2)).toBe(3);
})

test("returns string 'parameter must not be null' when first parameter is null", () => {
  expect(sum(null, 1)).toBe("parameter must not be null");
})

test("returns string 'parameter must not be null' when second parameter is null", () => {
  expect(sum(1,null)).toBe("parameter must not be null");
})