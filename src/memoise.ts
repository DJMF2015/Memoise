 
 export type FunctionArgs = Array<string | number>;
 export type MemoizedFunction<T extends (...args: any[]) => any> = (...args: FunctionArgs) => ReturnType<T>;

 export function memoize<T extends (...args: any[]) => any>(func: T): MemoizedFunction<T> {
    const cache: Record<string, ReturnType<T>> = {};

    return function (this: any, ...args: FunctionArgs) {
        const key = JSON.stringify(args);
        if (!cache[key]) { //
            cache[key] = func.apply(this, args) as ReturnType<T>;  
        } 
        return cache[key];
    } as MemoizedFunction<T>; 
}

export function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// const memoizedFibonacci = memoize(fibonacci);

// const adds = (a: number, b:number): number => a + b;
// const memoizedAdd = memoize(adds); 
// const multiplys = (a: number, b: number, c: number) => a * b * c;
// const memoizedMultiply = memoize(multiplys); 

// const concatenate = (str1: string, str2: string) => str1 + str2;
// const memoizedConcatenate = memoize(concatenate); 
// for (let i = 0; i < 10; i++) {
//   for (let j = 1; j < 10; j++) { 
//   }
// }

