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

    it("should return int 1 from sumStringDigits('1')", function() {
        let result = solution.sumStringDigits('1');

        expect(result).toEqual(1);
    });
    it("should return int 7 from sumStringDigits('1024')", function() {
        let result = solution.sumStringDigits('1024');

        expect(result).toEqual(7);
    });
    it("should return int 26 from sumStringDigits('32768')", function() {
        let result = solution.sumStringDigits('32768');

        expect(result).toEqual(26);
    });
    it("should return int 76 from sumStringDigits('1125899906842624')", function() {
        let result = solution.sumStringDigits('1125899906842624');

        expect(result).toEqual(76);
    });


});