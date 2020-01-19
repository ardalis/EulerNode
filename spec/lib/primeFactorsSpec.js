describe("primeFactors", function() {
    var primeFactors = require('../../lib/primeFactors');

    it("should return [] from primeFactors(1)", function() {
        let result = primeFactors(1);

        expect(result).toEqual([]);
    });
    it("should return [2] from primeFactors(2)", function() {
        let result = primeFactors(2);

        expect(result).toEqual([2]);
    });
    it("should return [3] from primeFactors(3)", function() {
        let result = primeFactors(3);

        expect(result).toEqual([3]);
    });
    it("should return [2,2] from primeFactors(4)", function() {
        let result = primeFactors(4);

        expect(result).toEqual([2,2]);
    });
    it("should return [2,3] from primeFactors(6)", function() {
        let result = primeFactors(6);

        expect(result).toEqual([2,3]);
    });
    it("should return [2,2,2] from primeFactors(8)", function() {
        let result = primeFactors(8);

        expect(result).toEqual([2,2,2]);
    });
});