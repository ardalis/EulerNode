'use strict';
var getPrimes = require('../lib/getPrimes');

// find largest prime factor of 600851475143

function Solution() {
    // called by index.js for this problem
    Solution.prototype.solve = function() {
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
    };
}

module.exports = Solution;