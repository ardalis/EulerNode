describe("problem23", function () {
    var Solution = require('../../solutions/problem23');
    var solution;

    beforeEach(function () {
        solution = new Solution();
    });

    describe("isAbundantNumber", function () {
        it("returns false given 1", function () {
            let result = solution.isAbundantNumber(1);

            expect(result).toEqual(false);
        });
        it("returns false given 2", function () {
            let result = solution.isAbundantNumber(2);

            expect(result).toEqual(false);
        });
        it("returns false given 3", function () {
            let result = solution.isAbundantNumber(3);

            expect(result).toEqual(false);
        });
        it("returns true given 12", function () {
            let result = solution.isAbundantNumber(12);

            expect(result).toEqual(true);
        });
    });

    describe("isNonAbundantSum", function () {
        it("returns true given 1", function () {
            let result = solution.isNonAbundantSum(1);

            expect(result).toEqual(true);
        });
        it("returns true given 2", function () {
            let result = solution.isNonAbundantSum(2);

            expect(result).toEqual(true);
        });
        it("returns true given 3", function () {
            let result = solution.isNonAbundantSum(3);

            expect(result).toEqual(true);
        });
        it("returns true given 12", function () {
            let result = solution.isNonAbundantSum(12);

            expect(result).toEqual(true);
        });
        it("returns false given 24", function () {
            let result = solution.isNonAbundantSum(24);

            expect(result).toEqual(false);
        });
    });

    describe("getAbundantNumbers", function () {
        it("returns 12 as first value", function () {
            let result = solution.getAbundantNumbers().next().value;

            expect(result).toEqual(12);
        });
    });

});