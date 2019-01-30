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

        it("returns one two given 2", function() {
            let result = solution.numbersToWordString(2);

            expect(result).toEqual('one two');
        });

        it("returns one two three given 3", function() {
            let result = solution.numbersToWordString(3);

            expect(result).toEqual('one two three');
        });
    });

    describe("numberToWordString", function() {
        // Parameterized with https://stackoverflow.com/a/44159698/13729
        [
            [1, 'one'],
            [2, 'two'],
            [3, 'three'],
            [4, 'four'],
            [5, 'five'],
            [6, 'six'],
            [7, 'seven'],
            [8, 'eight'],
            [9, 'nine'],
            [10, 'ten'],
            [11, 'eleven'],
            [12, 'twelve'],
            [13, 'thirteen'],
            [14, 'fourteen'],
            [15, 'fifteen'],
            [16, 'sixteen'],
            [17, 'seventeen'],
            [18, 'eighteen'],
            [19, 'nineteen'],
            [20, 'twenty'],
            [21, 'twenty-one'],
            [22, 'twenty-two'],
            [23, 'twenty-three'],
            [30, 'thirty'],
            [31, 'thirty-one'],
            [40, 'forty'],
            [41, 'forty-one'],
            [50, 'fifty'],
            [51, 'fifty-one'],
            [60, 'sixty'],
            [61, 'sixty-one'],
            [70, 'seventy'],
            [71, 'seventy-one'],
            [80, 'eighty'],
            [81, 'eighty-one'],
            [90, 'ninety'],
            [91, 'ninety-one'],
            [99, 'ninety-nine'],
            [100, 'one hundred'],
            [101, 'one hundred and one'],
            [111, 'one hundred and eleven'],
            [121, 'one hundred and twenty-one'],
            [221, 'two hundred and twenty-one'],
            [999, 'nine hundred and ninety-nine'],
            [1000, 'one thousand'],
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

        it("returns 24 given 'nine hundred and ninety-nine'", function() {
            let result = solution.letterCount('nine hundred and ninety-nine');

            expect(result).toEqual(24);
        });
    });
});