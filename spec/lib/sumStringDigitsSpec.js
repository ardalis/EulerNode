describe("sumStringDigits", function() {
    var sumDigits = require('../../lib/sumStringDigits');

    it("should return int 1 from sumStringDigits('1')", function() {
        let result = sumDigits('1');

        expect(result).toEqual(1);
    });
    it("should return int 7 from sumStringDigits('1024')", function() {
        let result = sumDigits('1024');

        expect(result).toEqual(7);
    });
    it("should return int 26 from sumStringDigits('32768')", function() {
        let result = sumDigits('32768');

        expect(result).toEqual(26);
    });
    it("should return int 76 from sumStringDigits('1125899906842624')", function() {
        let result = sumDigits('1125899906842624');

        expect(result).toEqual(76);
    });
});