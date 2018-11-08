'use strict';

var getFibonacci = require('../lib/getFibonacci');

// filtering on a generator isn't support out of the box but here is a workaround
// https://dev.to/nestedsoftware/lazy-evaluation-in-javascript-with-generators-map-filter-and-reduce--36h5

exports.solve = function () {
    let fib = getFibonacci();
    let numbers = [];
    while (true) {
        let nextItem = fib.next().value;
        if (nextItem > 4000000) break;
        numbers.push(nextItem);
    }
    let result = numbers.filter(n => n % 2 == 0).reduce((a, b) => a + b);
    return result;
}