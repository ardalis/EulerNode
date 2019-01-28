'use strict';
let strint = require('../lib/strint');
/*

215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

http://2ality.com/2012/07/large-integers.html
All numbers are floating point; max of 53 bits.

*/
function Solution() {
    function powerof2(num) {
        var initialValue = "1";
        for (var i = 1; i <= num; i++) {
            initialValue = strint.mul(initialValue, "2");
        }
        return initialValue;
    }

    Solution.prototype.solveForN = function(exponent) {
        var bigNumberString = powerof2(exponent);
        var sumOfDigits = 0;
        for (var i = 0; i < bigNumberString; i++) {
            sumOfDigits = sumOfDigits + parseInt(bigNumberString[i]);
        }
        return sumOfDigits;
    };

    // called by index.js for this problem
    Solution.prototype.solve = function() {
        return this.solveForN(56);
    };
}

module.exports = Solution;