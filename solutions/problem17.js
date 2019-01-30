'use strict';

/*

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

*/

function Solution() {
    let d = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let dd = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let bigunits = ['hundred', 'thousand'];
    Solution.prototype.numbersToWordString = function(max) {
        let numbers = [];
        for (var i = 1; i <= max; i++) {
            numbers.push(this.numberToWordString(i));
        }
        let result = numbers.join(' ');
        return result;
    }

    Solution.prototype.numberToWordString = function(n) {
        let words = [];
        let numberString = n.toString().split('');
        if (numberString.length == 0) return '';
        var ones = numberString.pop();
        if (numberString.length == 0) return d[ones];
        let tens = numberString.pop();
        if (ones == 0) {
            words.push(dd[tens]);
        } else {
            if (tens != '1') {
                if (tens == 0) {
                    words.push(d[ones]);
                } else {
                    words.push(dd[tens] + '-' + d[ones]);
                }
            } else {
                words.push(teens[ones]);
            }
        }
        let hundreds = numberString.pop();
        if (hundreds) {
            if (hundreds > 0) {
                let hundredString = d[hundreds] + ' ' + bigunits[0];
                if (words.join('').length > 0) hundredString += ' and';
                words.unshift(hundredString);
            } else {
                let thousands = numberString.pop();
                if (thousands && thousands > 0) {
                    let thousandString = d[thousands] + ' ' + bigunits[1];
                    words.unshift(thousandString);
                }
            }
        }

        return words.join(' ').trim();
    }

    Solution.prototype.letterCount = function(input) {
        input = input.split(' ').join('');
        input = input.split('-').join('');
        //console.log(input);
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