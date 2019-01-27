describe("problem4", function() {
    let problemNumber = "problem4"; // TODO: CHANGE THIS LINE AND PREVIOUS LINE
    var Solution = require('../../solutions/' + problemNumber);
    var solution;

    beforeEach(function() {
        solution = new Solution();
    });

    it("should return correct answer from solve", function() {
        let result = solution.solve();

        expect(result).toEqual(906609);
    });
});