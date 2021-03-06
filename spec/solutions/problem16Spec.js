describe("problem16", function() {
    var Solution = require('../../solutions/problem16');
    var solution;

    beforeEach(function() {
        solution = new Solution();
    });

    it("should return string 4 from powerOf2(2)", function() {
        let result = solution.powerOf2(2);

        expect(result).toEqual('4');
    });
    it("should return string 1024 from powerOf2(10)", function() {
        let result = solution.powerOf2(10);

        expect(result).toEqual('1024');
    });
    it("should return string 32768 from powerOf2(15)", function() {
        let result = solution.powerOf2(15);

        expect(result).toEqual('32768');
    });
    it("should return string 1125899906842624 from powerOf2(50)", function() {
        let result = solution.powerOf2(50);

        expect(result).toEqual('1125899906842624');
    });
    it("should return string 1267650600228229401496703205376 from powerOf2(100)", function() {
        let result = solution.powerOf2(100);

        expect(result).toEqual('1267650600228229401496703205376');
    });
});