'use strict';
var getIntegers = require('../lib/getIntegers');
var isPrime = require('../lib/isPrime');

function* getPrimes(start = 2) {
    var numberSequence = getIntegers(start);
    while (true) {
        var nextNum = numberSequence.next().value;
        if (isPrime(nextNum)) {
            yield nextNum;
        }
    }
}

module.exports = getPrimes;