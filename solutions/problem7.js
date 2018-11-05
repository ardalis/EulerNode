'use strict';

// generators in js
// https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950
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

var isPrime = function(input) {
    if (input == 2) return true;
    for (var i = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) return false;
    }
    return true;
}

var getPrime = function(index) {
    var primes = getPrimes(2);
    var result;
    for (var i = 0; i < index; i++) {
        result = primes.next();
    }
    return result.value;
}

exports.solve = function() {
    // TODO: Implement solution
    console.log('The 10,001st prime number is...');
    return getPrime(10001);
}