'use strict';

/*

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

*/

function Solution() {
    Solution.prototype.numbersToWordString = function(max) {
        let numbers = [];
        for (var i = 1; i <= max; i++) {
            numbers.push(this.numberToWordString(i));
        }
        let result = numbers.join(' ');
        return result;
    }

    Solution.prototype.numberToWordString = function(n) {
        if (n == 1) return 'one';
        if (n == 2) return 'two';
        if (n == 3) return 'three';
        return 'four';
    }

    Solution.prototype.letterCount = function(input) {
        input = input.replace(' ', '');
        input = input.replace('-', '');
        return input.length;
    }

    Solution.prototype.solveForN = function(max) {
        let wordNumberString = this.numbersToWordString(max);
        let letterCount = this.letterCount(wordNumberString);
        return letterCount;
    };

    // called by index.js for this problem
    Solution.prototype.solve = function() {
        return this.solveForN(1000);
    };
}

module.exports = Solution;