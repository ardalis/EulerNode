'use strict';

var primeFactors = function(input) {
    let result = [];
    var divisor = 2;
    while(input > 1){
        while(input % divisor == 0)
        {
            result.push(divisor);
            input /= divisor;
        }
        divisor++;
    }
    return result;
}
module.exports = primeFactors;