'use strict';

/*

A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of
 the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we 
 call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

*/

function Solution() {

    // target = 1,000,000
    let fac10 = 3628800; // 1 is too big; first digit is 0, [1,2,3,4,5,6,7,8,9]
    let fac9 = 362880; // 2 is 2nd digit 274,240 permutations left. 2, [1,3,4,5,6,7,8,9]
    let fac8 = 40320; // what index takes this not quite over 274,240: 7, [1,3,4,5,6,8,9], 32,320 remain
    let fac7 = 5040; // index 6 (number 8) consumes 30,240; 2080 permutations remain: 8, [1,3,4,5,6,9]
    let fac6 = 720; // index 2 (number 3) consumers 1440; 640 perms left: 3, [1,4,5,6,9]
    let fac5 = 120; // index 5 (number 9) consumers 5*120 = 600; 40 left: 9, [1,4,5,6]
    let fac4 = 24; // index 1 (number 1) consumes 24; 16 left: 1, [4,5,6]
    let fac3 = 6; // index 2 (number 5) consumes 12; 4 left: 5, [4,6]
    let fac2 = 2; // index 1 (number 4) consumes 2; 2 left: 4 [6]
    let fac1 = 1; // 6

    // Answer: 0278391546


    // called by index.js for this problem
    Solution.prototype.solve = function() {
        let numbers = [0,1,2];
        let perms = getPerms(0, numbers.slice(1));
        let permutation = 1;
        let perm = [];
        for(var i=0;i<numbers.length;i++) {
            perm = [];
            perm.push(i);
            for(var j=0;j<numbers.length;j++) {
                if(i==j) continue;
                perm.push(j);
                for(var k=0;k<numbers.length;k++) {
                    if(i==k) continue;
                    if(j==k) continue;
                    perm.push(k);
                    console.log(permutation++ + ":" + perm.join(''));
                }
            }
        }
        
        return 0;
    };

    function getPerms(current, remaining) {

    }
}

module.exports = Solution;
