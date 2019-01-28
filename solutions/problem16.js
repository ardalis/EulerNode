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
        var initialValue = Math.pow(2, 50).toString();
        var result = initialValue;
        for (var i = 1; i <= num; i++) {
            result = strint.mul(result, initialValue);
            console.log(i, i * 50, result);
        }
        return result;
    }

    Solution.prototype.solveForN = function(exponent) {
        var bigNumberString = powerof2(exponent);
        var sumOfDigits = 0;
        for (var i = 0; i < bigNumberString.length; i++) {
            sumOfDigits = sumOfDigits + parseInt(bigNumberString[i]);
        }
        return sumOfDigits;
    };

    // called by index.js for this problem
    Solution.prototype.solve = function() {
        return this.solveForN(20);
    };
}

module.exports = Solution;