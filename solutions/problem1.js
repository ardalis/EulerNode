'use strict';

function Solution() {
    var sumMultiples = function(max) {
        var sum = 0;
        for (var i = 1; i < max; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    }

    Solution.prototype.solveForMax = function(max) {
        return sumMultiples(max);
    };

    // called by index.js for this problem
    Solution.prototype.solve = function() {
        return sumMultiples(1000);
    };
}

module.exports = Solution;