'use strict';

var getIntegers = require('../lib/getIntegers');

/*
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
let sumOfSquares = function (max) {
    let numbers = Array.from({
        length: max
    }, (v, k) => k + 1); // Creates an array of integers starting from 1 and including max

    return numbers.reduce((a, b) => a + b, 0); // js equivalent to LINQ .Sum()
}

let sumOfIntegersUpTo = function (max) {
    return (1 + max) * max / 2; // credit: Gauss
}

let squareOfSum = function (max) {
    let sum = sumOfIntegersUpTo(max);

    return sum * sum;
}

exports.solve = function () {
    let sum1 = sumOfSquares(100);
    let sum2 = squareOfSum(100);

    return sum2 - sum1;
}