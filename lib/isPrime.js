'use strict';

var isPrime = function (input) {
    if (input == 2) return true;
    for (var i = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) return false;
    }
    return true;
}

module.exports = isPrime;