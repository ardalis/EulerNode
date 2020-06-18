'use strict';
let getFibString = require('../lib/getFibString');

/*

The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

*/

function Solution() {

    // called by index.js for this problem
    Solution.prototype.solve = function() {
        let index = 2; // getFibString swallows the first index
        let fib = getFibString();
        while (true) {
            let nextItem = fib.next().value;
            let len = nextItem.length;
            if(len == 1000) break;
            console.log(index + "(" + len + "): " + nextItem);
            index++;
            if(index > 2000) break;
        }
        
        return index;
    };
}

module.exports = Solution;
