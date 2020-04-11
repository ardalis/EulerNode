'use strict';
let strint = require('./strint');

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

function* getFibString() {
    var previous = "0";
    var current = "1";
    while (true) {
        var next = strint.add(previous, current);
        previous = current;
        current = next;
        yield next;
    }
}

module.exports = getFibonacci;