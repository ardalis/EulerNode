'use strict';

function* getIntegers(start = 1) {
    while (true) yield start++;
}
module.exports = getIntegers;