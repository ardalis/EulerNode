'use strict';
let strint = require('./strint');

// Generator function
// https://stackoverflow.com/a/9620754/13729
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

module.exports = getFibString;