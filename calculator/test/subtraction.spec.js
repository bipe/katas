const sub = require('../src/subtraction');

test("5 - 7 should return -2", () => {
    const num1 = 5;
    const num2 = 7;

    const result = sub(num1, num2);

    expect(result).toBe(-2);
});

test("4 - 1 should return 3", () => {
    const num1 = 4;
    const num2 = 1;

    const result = sub(num1,num2);

    expect(result).toBe(3);
});

test("returns string 'parameter must not be null' when first parameter is null", () => {
    const num1 = null;
    const num2 = 1;

    const result = sub(num1, num2)

    expect(result).toBe("parameter must not be null");
  })

  test("returns string 'parameter must not be null' when second parameter is null", () => {
    const num1 = 1;
    const num2 = null;

    const result = sub(num1, num2)

    expect(result).toBe("parameter must not be null");
  })