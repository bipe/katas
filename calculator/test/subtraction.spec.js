const sub = require('../src/subtraction');

test("5 - 7 should return 2", () => {
    expect(sub(5, 7)).toBe(2);
});
