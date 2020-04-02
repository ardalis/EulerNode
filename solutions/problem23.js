'use strict';
let properDivisors = require('../lib/properDivisors');
let getIntegers = require('../lib/getIntegers');

/*

A perfect number is a number for which the sum of its proper divisors is exactly 
equal to the number. For example, the sum of the proper divisors of 28 would 
be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n
and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number
that can be written as the sum of two abundant numbers is 24. By mathematical
analysis, it can be shown that all integers greater than 28123 can be written
as the sum of two abundant numbers. However, this upper limit cannot be reduced
any further by analysis even though it is known that the greatest number that
cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of
two abundant numbers.

*/
const maxAbundantSum = 28123;

function Solution() {

    Solution.prototype.abundentNumbers = [];
    Solution.prototype.nonSums = [];

    Solution.prototype.getAbundantNumbers = function* getAbundantNumbers(start = 2) {
        var numberSequence = getIntegers(start);
        while (true) {
            var nextNum = numberSequence.next().value;

            if (this.isAbundantNumber(nextNum)) {
                yield nextNum;
            }
        }
    }

    Solution.prototype.getNonAbundantSums = function () {
        var numberSequence = getIntegers(1);
        for (var i = 0; i < maxAbundantSum; i++) { this.nonSums.push(true); } // load array with all true values
        // while (true) {
        //     var nextNum = numberSequence.next().value;

        //     if (this.isNonAbundantSum(nextNum)) {
        //         this.nonSums.push(nextNum);
        //     }
        // }
    }

    Solution.prototype.isAbundantNumber = function (input) {
        let divisors = properDivisors(input);
        let divisorSum = divisors.reduce((a, b) => a + b, 0);
        return divisorSum > input;
    }

    Solution.prototype.markNonAbundantSums = function (input) {
        if (this.abundentNumbers.length < 100) {
            this.loadNumbers();
        }
        for (let i = 0; i < this.nonSums.length; i++) {
            this.nonSums[i] = this.isNonAbundantSum(i);
        }
    }

    Solution.prototype.isNonAbundantSum = function (input) {
        if (this.abundentNumbers.length < 100) {
            this.loadNumbers();
        }
        for (var i = 0; i < this.abundentNumbers.length; i++) {
            if (this.abundentNumbers[i] > input) { break; }
            for (var j = i; j < this.abundentNumbers.length; j++) {
                let sum = this.abundentNumbers[i] + this.abundentNumbers[j];
                if (input == sum) { return false; }
                if (sum > input) { break; }
            }
        }
        return true;
    }

    Solution.prototype.loadNumbers = function (max = maxAbundantSum) {
        let nextNumber = 0;
        let generator = this.getAbundantNumbers();
        while (nextNumber < max) {
            nextNumber = generator.next().value;
            this.abundentNumbers.push(nextNumber);
        }
    }

    // called by index.js for this problem
    Solution.prototype.solve = function () {
        this.getNonAbundantSums();
        this.markNonAbundantSums();
        console.log("Abundant Numbers : " + this.abundentNumbers.length);
        console.log("Non-Abundant Sums: " + this.nonSums.length);

        let sum = 0;
        for (var i = 0; i < this.nonSums.length; i++) {
            if (this.nonSums[i]) {
                sum += i;
            }
        }

        return sum;
    };
}

module.exports = Solution;
