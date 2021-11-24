const sub = require('../src/subtraction');

test("5 - 7 should return 2", () => {
    expect(sub(5, 7)).toBe(-2);
});

test("4 - 1 should return 2", () => {
    num1 = 4;
    num2 = 1;

    result = sub(num1,num2);

    expect(result).toBe(3);
});
