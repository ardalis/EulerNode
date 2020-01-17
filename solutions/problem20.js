'use strict';
let strint = require('../lib/strint');
let sumStringDigits = require('../lib/sumStringDigits');
/*

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

*/

function Solution() {
    Solution.prototype.getFactorialString = function(limit) {
        var result = "1";

        for(var i=1;i<=limit;i++) {
            result = strint.mul(result, i.toString());
        }
        return result;
    };

    // called by index.js for this problem
    Solution.prototype.solve = function() {
        let factorialResultString = this.getFactorialString(100);
        return sumStringDigits(factorialResultString);
    };
}

module.exports = Solution;
