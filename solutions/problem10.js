'use strict';

var getPrimes = require('../lib/getPrimes');

/*

Find the sum of all the primes below two million.

*/

var sumOfPrimesUnder = function (max) {
    let primes = getPrimes(2);
    let sum = 0;
    while (true) {
        let prime = primes.next().value;
        if (prime > max) break;
        sum += prime;
    }
    return sum;
}


exports.solve = function () {
    return sumOfPrimesUnder(2000000);
}