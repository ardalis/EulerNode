'use strict';

/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
let isDivisibleBy1to20 = function (input) {
    for (let i = 2; i < 21; i++) {
        if (input % i != 0) return false;
    }
    return true;
}

exports.solve = function () {
    let candidate = 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19; // let's start somewhere that at least has all the prime factors
    while (true) {
        if (isDivisibleBy1to20(candidate)) break;
        candidate++;
    }

    return candidate;
}