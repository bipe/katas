const sum = require('../src/main');

test("1 + 1 must return 2", () => {
  expect(sum(1,1)).toBe(2);
})

test("1 + 2 must return 3", () => {
  expect(sum(1,2)).toBe(3);
})

test("returns string 'parameter must not be null'", () => {
  expect(sum(1,null)).toBe("parameter must not be null");
})
