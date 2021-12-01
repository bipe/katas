const div = require('../src/division');

test("8 / 2 shoul return 4", () => {
    const num1 = 8;
    const num2 = 2;

    const result = div(num1, num2);

    expect(result).toBe(4);
});

test("5 / 2 should return 2.5", () => {
    const num1 = 5;
    const num2 = 2;

    const result = div(num1, num2);

    expect(result).toBe(2.5);
});

test("should return 'operation can't be done' when 10 / 0", () => {
    const num1 = 10;
    const num2 = 0;
    
    const result = div(num1, num2);

    expect(result).toBe("operation can't be done");
});

test("returns string 'parameter must not be null' when first parameter is null", () => {
    num1 = null;
    num2 = 1;

    const result = div(num1, num2);

    expect(result).toBe("parameter must not be null");
});

test("returns string 'parameter must not be null' when second parameter is null", () => {
    num1 = 2;
    num2 = null;

    const result = div(num1, num2);

    expect(result).toBe("parameter must not be null");
});
