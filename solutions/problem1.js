'use strict';

var sumMultiples = function (max) {
    var sum = 0;
    for (var i = 1; i < max; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}

exports.solve = function () {
    return sumMultiples(1000);
}