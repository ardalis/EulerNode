'use strict';

var properDivisors = function(input) {
    let result = [];
    for(let i=1;i<input;i++) {
        if(input % i == 0) {
            result.push(i);
        }
    }
    return result;
}
module.exports = properDivisors;