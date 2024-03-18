type FunctionArgs = Array<string | number>;

function memoize<T extends (...args: any[]) => any>(func: T): T {
  const cache: Record<string, ReturnType<T>> = {};

  return function (this: any, ...args: FunctionArgs) {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = func.apply(this, args);
    }
    console.log({ cache });
    return cache[key];
  } as T;
}

function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // Output: 55 (computed)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)

const adds = (a: number, b:number): number => a + b;
const memoizedAdd = memoize(adds);
console.log(memoizedAdd(2, 3)); // Output: 5 (computed)
console.log(memoizedAdd(2, 3)); // Output: 5 (cached)

const multiplys = (a: number, b: number, c: number) => a * b * c;
const memoizedMultiply = memoize(multiplys);
console.log(memoizedMultiply(2, 3, 4)); // Output: 24 (computed)
console.log(memoizedMultiply(2, 3, 4)); // Output: 24 (cached)

const concatenate = (str1: string, str2: string) => str1 + str2;
const memoizedConcatenate = memoize(concatenate);
console.log(memoizedConcatenate('Hello', 'World')); // Output: "HelloWorld" (computed)
console.log(memoizedConcatenate('Hello', 'World')); // Output: "HelloWorld" (cached)

for (let i = 0; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(memoizedAdd(i, j));
  }
}
