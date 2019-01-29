describe("problem17", function() {
    var Solution = require('../../solutions/problem17');
    var solution;

    beforeEach(function() {
        solution = new Solution();
    });

    describe("numbersToWordString", function() {
        it("returns one given 1", function() {
            let result = solution.numbersToWordString(1);

            expect(result).toEqual('one');
        });

        it("returns two given 2", function() {
            let result = solution.numbersToWordString(2);

            expect(result).toEqual('one two');
        });
    });

    describe("numberToWordString", function() {
        // Parameterized with https://stackoverflow.com/a/44159698/13729
        [
            [1, 'one'],
            [2, 'two']
        ].forEach(([input, expectedOutput]) => {
            it("returns ${expectedOutput} for ${input}", () => {
                expect(expectedOutput).toEqual(solution.numberToWordString(input));
            })
        })
    });

    describe("letterCount", function() {
        it("returns 6 given 'one two'", function() {
            let result = solution.letterCount('one two');

            expect(result).toEqual(6);
        });
    });
});