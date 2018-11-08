'use strict';

/*

a^2 + b^2 = c^2
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

var isPythagTriplet = function (a, b, c) {
    return (a * a + b * b - c * c) == 0;
}

exports.solve = function () {
    for (let c = 1; c < 1000; c++) {
        for (let a = 1; a < 1000; a++) {
            let b = 1000 - c - a;
            if (isPythagTriplet(a, b, c)) return a * b * c;
        }
    }
}