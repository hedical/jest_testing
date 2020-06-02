const { add } = require("../util/util") // double dot to go back from the folder
const { minus } = require("../util/util")
const { multiply } = require("../util/util")
const { divide } = require("../util/util")
const { power } = require("../util/util")


describe("Add", () => {
    describe("Success", () => {
        it("Should return the sum of the 2 passed aguments", () => {
            expect(add(2, 2)).toBe(4); // toBe is talking to the return value from our fonction
        });
    })

    describe("Failure", () => {
        it("Should throw an error if 1st argument isn't a number", () => {
            expect(() => (add("2", 2))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        });
        it("Should throw an error if 2nd argument isn't a number", () => {
            expect(() => (add(2, "2"))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        });
        it("Should throw an error if no arguments were reiceived", () => {
            expect(() => (add())).toThrowError()
        });
    });
});

describe("Minus", () => {
    describe("Success", () => {
        it("Should return the substract of the 2 passed aguments", () => {
            expect(minus(4, 2)).toBe(2); // toBe is talking to the return value from our fonction
        });
    })

    describe("Failure", () => {
        it("Should throw an error if 1st argument isn't a number", () => {
            expect(() => (minus("2", 2))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        });
        it("Should throw an error if 2nd argument isn't a number", () => {
            expect(() => (minus(2, "2"))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        });
        it("Should throw an error if no arguments were reiceived", () => {
            expect(() => (minus())).toThrowError()
        });
    });
});

describe("Multiply", () => {
    describe("Success", () => {
        it("Should return the multiplication of the 2 passed aguments", () => {
            expect(multiply(2, 2)).toBe(4); // toBe is talking to the return value from our fonction
        });
    })

    describe("Failure", () => {
        it("Should throw an error if 1st argument isn't a number", () => {
            expect(() => (multiply("2", 2))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        });
        it("Should throw an error if 2nd argument isn't a number", () => {
            expect(() => (multiply(2, "2"))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        });
        it("Should throw an error if no arguments were reiceived", () => {
            expect(() => (multiply())).toThrowError()
        });
    });
});

describe("Divide", () => {
    describe("Success", () => {
        it("Should return the division of the 2 passed aguments", () => {
            expect(divide(2, 2)).toBe(1); // toBe is talking to the return value from our fonction
        });
    })

    describe("Failure", () => {
        it("Should throw an error if 1st argument isn't a number", () => {
            expect(() => (divide("2", 2))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        });
        it("Should throw an error if 2nd argument isn't a number", () => {
            expect(() => (divide(2, "2"))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        });
        it("Should throw an error if no arguments were reiceived", () => {
            expect(() => (divide())).toThrowError()
        });
    });
});

describe("Power", () => {
    describe("Success", () => {
        it("Should return the exponent of the first argument using the second one", () => {
            expect(power(4, 4)).toBe(256); // toBe is talking to the return value from our fonction
        });
    })

    describe("Failure", () => {
        it("Should throw an error if 1st argument isn't a number", () => {
            expect(() => (power("2", 2))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        });
        it("Should throw an error if 2nd argument isn't a number", () => {
            expect(() => (power(2, "2"))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        });
        it("Should throw an error if no arguments were reiceived", () => {
            expect(() => (power())).toThrowError()
        });
    });
});

