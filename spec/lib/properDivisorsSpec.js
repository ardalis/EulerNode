describe("properDivisors", function() {
    var properDivisors = require('../../lib/properDivisors');

    it("should return [] from properDivisors(1)", function() {
        let result = properDivisors(1);

        expect(result).toEqual([]);
    });
    it("should return [1] from properDivisors(2)", function() {
        let result = properDivisors(2);

        expect(result).toEqual([1]);
    });
    it("should return [1] from properDivisors(3)", function() {
        let result = properDivisors(3);

        expect(result).toEqual([1]);
    });
    it("should return [1,2] from properDivisors(4)", function() {
        let result = properDivisors(4);

        expect(result).toEqual([1,2]);
    });
    it("should return [1,2,3] from properDivisors(6)", function() {
        let result = properDivisors(6);

        expect(result).toEqual([1,2,3]);
    });
    it("should return [1,2,4] from properDivisors(8)", function() {
        let result = properDivisors(8);

        expect(result).toEqual([1,2,4]);
    });
});