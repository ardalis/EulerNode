describe("problem23", function() {
    var Solution = require('../../solutions/problem23');
    var solution;

    beforeEach(function() {
        solution = new Solution();
    });

    describe("isAbundantNumber", function() {
        it("returns false given 1", function() {
            let result = solution.isAbundantNumber(1);

            expect(result).toEqual(false);
        });
        it("returns true given 12", function() {
            let result = solution.isAbundantNumber(12);

            expect(result).toEqual(true);
        });

    });
});