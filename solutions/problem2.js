'use strict';

var getFibonacci = require('../lib/getFibonacci');

function Solution() {
    // called by index.js for this problem
    Solution.prototype.solve = function() {
        let fib = getFibonacci();
        let numbers = [];
        while (true) {
            let nextItem = fib.next().value;
            if (nextItem > 4000000) break;
            numbers.push(nextItem);
        }
        let result = numbers.filter(n => n % 2 == 0).reduce((a, b) => a + b);
        return result;
    };
}

module.exports = Solution;