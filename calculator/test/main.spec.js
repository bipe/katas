// /* eslint-disable no-undef */
// const hello = require('../src/main');

// test('returns hello world string', () => {
//   expect(hello()).toBe('hello');
// });
const sum = require('../src/main');

test("1 + 1 must return 2", () => {
  expect(sum(1,1)).toBe(2);
})

test("1 + 2 must return 3", () => {
  expect(sum(1,2)).toBe(3);
})
