'use strict';

function* getIntegers(start = 2) {
    while (true) yield start++;
}

function* getPrimes(start = 2) {
    var numberSequence = getIntegers(start);
    while (true) {
        var nextNum = numberSequence.next().value;
        if (isPrime(nextNum)) {
            yield nextNum;
        }
    }
}

var isPrime = function (input) {
    if (input == 2) return true;
    for (var i = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) return false;
    }
    return true;
}

// find largest prime factor of 600851475143

exports.solve = function () {
    const candidate = 600851475143;
    let primes = getPrimes(2);
    let largestFactor = 1;
    while (true) {
        let currentPrime = primes.next().value;
        if (candidate % currentPrime == 0) {
            largestFactor = currentPrime;
        }
        if (currentPrime >= Math.sqrt(candidate)) break;
    }
    return largestFactor;
}