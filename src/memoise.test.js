'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var memoise_1 = require('./memoise');
describe('memoize function', function () {
  it('should return a memoized version of the input function', function () {
    var fib = jest.fn(fibonacci);
    var memoizedFib = (0, memoise_1.memoize)(fib);
    // Call memoized function twice with the same argument
    memoizedFib(5);
    memoizedFib(5);
    // Ensure the original function is called only once
    expect(fib).toHaveBeenCalledTimes(1);
    // Ensure the result is cached and returned correctly
    expect(memoizedFib(5)).toBe(5);
  });
  it('should cache results based on function arguments', function () {
    var add = jest.fn(function (a, b) {
      return a + b;
    });
    var memoizedAdd = (0, memoise_1.memoize)(add);
    // Call memoized function twice with different arguments
    memoizedAdd(2, 3);
    memoizedAdd(4, 5);
    // Ensure the original function is called twice
    expect(add).toHaveBeenCalledTimes(2);
    // Ensure the results are cached and returned correctly
    expect(memoizedAdd(2, 3)).toBe(5);
    expect(memoizedAdd(4, 5)).toBe(9);
  });
  it('should handle functions with different argument types', function () {
    var concat = jest.fn(function (str1, str2) {
      return str1 + str2;
    });
    var memoizedConcat = (0, memoise_1.memoize)(concat);
    // Call memoized function twice with the same arguments
    memoizedConcat('Hello', 'World');
    memoizedConcat('Hello', 'World');
    // Ensure the original function is called only once
    expect(concat).toHaveBeenCalledTimes(1);
    // Ensure the result is cached and returned correctly
    expect(memoizedConcat('Hello', 'World')).toBe('HelloWorld');
  });
});
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
