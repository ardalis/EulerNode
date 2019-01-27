'use strict';
var getPrimes = require('../lib/getPrimes');

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
var isPalindrome = function(input) {
    let digits = (input + "").split(""); // produces string array
    for (let i = 0; i < digits.length / 2; i++) {
        if (digits[i] != digits[digits.length - i - 1]) return false;
    }
    return true;
}

function Solution() {
    // called by index.js for this problem
    Solution.prototype.solve = function() {
        let largestPalindrome = 0;
        for (let i = 100; i < 1000; i++) {
            for (let j = 100; j < 1000; j++) {
                let product = i * j;
                if (isPalindrome(product)) {
                    if (product > largestPalindrome) {
                        largestPalindrome = product;
                    }
                }
            }
        }
        return largestPalindrome;
    };
}

module.exports = Solution;