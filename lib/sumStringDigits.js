'use strict';

var sumStringDigits = function(input) {
    var sumOfDigits = 0;
    for (var i = 0; i < input.length; i++) {
        sumOfDigits = sumOfDigits + parseInt(input[i]);
    }
    return sumOfDigits;
}
module.exports = sumStringDigits;