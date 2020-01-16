'use strict';
var fs = require('fs');

/*

Triangle Sum - See image on web site.

By starting at the top of the triangle below and moving to 
adjacent numbers on the row below, the maximum total from top to bottom is 23.

   3
  7 4
 2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.
Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...'), a 15K text file containing a triangle with one-hundred rows.

NOTE: This is a much more difficult version of Problem 18. 
It is not possible to try every route to solve this problem, 
as there are 299 altogether! If you could check one trillion (1012) routes 
every second it would take over twenty billion years to check them all. 
There is an efficient algorithm to solve it. ;o)*/

function Solution() {
  Solution.prototype.readInputFromFile = function(filePath) {
    let result = [];
    let fileData = fs.readFileSync(filePath, 'utf8', function(err, data) {
        if (err) { throw err; }
    });

    let lines = fileData.toString().split('\n');
    for(let i=0;i<lines.length-1;i++){
      let values = lines[i].split(' ');
      if(values.length > 0)
      {
        result.push(values);
      }
    }

    return result;
  }
  Solution.prototype.solve = function() {
      let input = this.readInputFromFile('resources/p067_triangle.txt');

      // approach:
      // start from bottom (2nd to last row). Determine largest possible number for each cell in row n-1
      // note each element in row N with index i maps to children in row N+1 with
      // indexes i and i+1
      console.log("input length: " + input.length);
      for(let row=input.length-2;row>=0;row--) {
          for(let i=0;i<input[row].length;i++) {
              var item = input[row][i];
              input[row][i] = Number(input[row][i]) +
                Math.max(Number(input[row+1][i]),Number(input[row+1][i+1]));
          }            
      }
      console.log(input);

      return input[0][0];
  };
}
module.exports = Solution;
