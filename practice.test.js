const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const capitalize = require('./capitalize');

test('stringLength return the lenght of string', () => {
  const string = 'alisazish';
  const length = stringLength(string);
  expect(length).toBe(9);
});

test('throws an error if string longer than 10 characters', () => {
  const string = 'This is a very long string';
  expect(() => {
    stringLength(string);
  }).toThrow('String length must be between 1 and 10 characters');
});

// test the function which reverse the string
test('reverseString reverses the given string', () => {
  const input = 'Ali Sazish';
  const expectedOutput = 'hsizaS ilA';
  const actualOutput = reverseString(input);
  expect(actualOutput).toBe(expectedOutput);
});


// test the calculator function for each method
describe('Calculator', () => {
  // test cas for add method
  describe('add()', () => {
    test('should correctly add two numbers', () => {
      const result = calculator.add(5, 3);
      expect(result).toBe(8);
    });

    test('should return the same number when adding zero', () => {
      const result = calculator.add(10, 0);
      expect(result).toBe(10);
    });

    test('should correctly add negative numbers', () => {
      const result = calculator.add(-5, -3);
      expect(result).toBe(-8);
    });
  });

// test case for subtract method

describe('subtract()', () => {
  test('should correctly subtract two numbers', () => {
    const result = calculator.subtract(10, 4);
    expect(result).toBe(6);
  });

  test('should return zero when subtracting zero', () => {
    const result = calculator.subtract(5, 5);
    expect(result).toBe(0);
  });

  test('should correctly subtract negative numbers', () => {
    const result = calculator.subtract(-10, -3);
    expect(result).toBe(-7);
  });
});

// test case for division 
describe('divide()', () => {
  test('should correctly divide two numbers', () => {
    const result = calculator.divide(10, 2);
    expect(result).toBe(5);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('should return infinity when dividing zero by a number', () => {
    const result = calculator.divide(0, 5);
    expect(result).toBe(0);
  });
});

// test case for multiply 
describe('multiply()', () => {
  test('should correctly multiply two numbers', () => {
    const result = calculator.multiply(5, 3);
    expect(result).toBe(15);
  });

  test('should return zero when multiplying by zero', () => {
    const result = calculator.multiply(10, 0);
    expect(result).toBe(0);
  });

  test('should correctly multiply negative numbers', () => {
    const result = calculator.multiply(-5, -3);
    expect(result).toBe(15);
  });
});

});

// test case for capitlizing first letter of string
test('capitalize function capitalizes the first character of a string', () => {
  const result = capitalize('hello');
  expect(result).toBe('Hello');
});
