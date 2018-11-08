'use strict';

var getPrimes = require('../lib/getPrimes');

var getPrime = function (index) {
    var primes = getPrimes(2);
    var result;
    for (var i = 0; i < index; i++) {
        result = primes.next();
    }
    return result.value;
}

exports.solve = function () {
    console.log('The 10,001st prime number is...');
    return getPrime(10001);
}