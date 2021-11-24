const sub = require('../src/subtraction');

test("5 - 7 should return -2", () => {
    num1 = 5;
    num2 = 7;

    result = sub(num1, num2);

    expect(result).toBe(-2);
});

test("4 - 1 should return 3", () => {
    num1 = 4;
    num2 = 1;

    result = sub(num1,num2);

    expect(result).toBe(3);
});
