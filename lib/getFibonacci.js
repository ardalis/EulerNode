'use strict';

function* getFibonacci() {
    var previous = 0;
    var current = 1;
    while (true) {
        var next = previous + current;
        previous = current;
        current = next;
        yield next;
    }
}

module.exports = getFibonacci;