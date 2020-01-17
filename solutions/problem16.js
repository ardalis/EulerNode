'use strict';
let strint = require('../lib/strint');
let sumStringDigits = require('../lib/sumStringDigits');

/*

215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

http://2ality.com/2012/07/large-integers.html
All numbers are floating point; max of 53 bits.

*/
function Solution() {
    Solution.prototype.powerOf2 = function(num) {
        let bigNumbers = [];
        while (num >= 50) {
            var twoTo50 = Math.pow(2, 50).toString();
            bigNumbers.push(twoTo50);
            num -= 50;
        }
        //console.log(bigNumbers.length + ' big numbers to multiply.');
        if (num > 0) {
            bigNumbers.push(Math.pow(2, num).toString());
        }
        let result = bigNumbers.reduce((a, b) => strint.mul(a, b));

        return result;
    }

    Solution.prototype.solveForN = function(exponent) {
        var bigNumberString = this.powerOf2(exponent);
        console.log(bigNumberString);
        return sumStringDigits(bigNumberString);
    };

    // called by index.js for this problem
    Solution.prototype.solve = function() {
        return this.solveForN(1000);
    };
}

module.exports = Solution;