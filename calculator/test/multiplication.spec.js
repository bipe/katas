const mult = require('../src/multiplication');

test("8 * 2 shoul return 16", () => {
    const num1 = 8;
    const num2 = 2;

    const result = mult(num1, num2);

    expect(result).toBe(16);
});

test("5 * 6 should return 30", () => {
    const num1 = 5;
    const num2 = 6;

    const result = mult(num1, num2);

    expect(result).toBe(30);
});

test("returns string 'parameter must not be null' when first parameter is null", () => {
    const num1 = null;
    const num2 = 1;

    const result = mult(num1, num2)

    expect(result).toBe("parameter must not be null");
});

test("returns string 'parameter must not be null' when second parameter is null", () => {
    const num1 = 1;
    const num2 = null;

    const result = mult(num1, num2)

    expect(result).toBe("parameter must not be null");
});

