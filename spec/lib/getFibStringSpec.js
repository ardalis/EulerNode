describe("getFibString", function () {
    let fib = {};

    beforeEach(function () {
        let getFibString = require('../../lib/getFibString');
        fib = getFibString();
    });

    describe("fib.next()", function () {
        it("returns 1 first time", function () {
            expect(fib.next().value).toEqual('1');
        });
        it("returns 2 second time", function () {
            fib.next();
            expect(fib.next().value).toEqual('2');
        });
        it("returns 3 for f(3)", function () {
            fib.next();
            fib.next();
            expect(fib.next().value).toEqual('3');
        });
        it("returns 5 for f(4)", function () {
            fib.next();
            fib.next();
            fib.next();
            expect(fib.next().value).toEqual('5');
        });
    });

});