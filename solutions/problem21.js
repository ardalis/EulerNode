'use strict';
let properDivisors = require('../lib/properDivisors');

/*

Amicable Numbers

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are 
called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; 
therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

function Solution() {

    // called by index.js for this problem
    Solution.prototype.solve = function() {
        let amicableNumbers = [];
        let properDivisorSums = {};

        for(let i=2;i<10000;i++) {
            let divisors = properDivisors(i);
            let divisorSum = divisors.reduce((a, b) => a + b, 0);
            let key = "";
            if(i < divisorSum)
                key += i.toString() + ':' + divisorSum.toString();
            else 
                key += divisorSum.toString() + ':' + i.toString();

            if(properDivisorSums[key] == undefined) {
                properDivisorSums[key] = i;
            } else { // found a pair
                console.log(key);

                amicableNumbers.push(i);
                amicableNumbers.push(divisorSum);
            }
        }
        console.log(amicableNumbers);
        return amicableNumbers.reduce((a,b) => a + b, 0);
    };
}

module.exports = Solution;
