"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = exports.memoize = void 0;
function memoize(func) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args);
        if (!cache[key]) { //
            cache[key] = func.apply(this, args);
        }
        return cache[key];
    };
}
exports.memoize = memoize;
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
exports.fibonacci = fibonacci;
var memoizedFibonacci = memoize(fibonacci);
var adds = function (a, b) { return a + b; };
var memoizedAdd = memoize(adds);
var multiplys = function (a, b, c) { return a * b * c; };
var memoizedMultiply = memoize(multiplys);
var concatenate = function (str1, str2) { return str1 + str2; };
var memoizedConcatenate = memoize(concatenate);
for (var i = 0; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        // console.log(memoizedAdd(i, j));
    }
}
