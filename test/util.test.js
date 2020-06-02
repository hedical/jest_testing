const { add } = require("../util/util") // double dot to go back from the folder

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
    });
});

describe("Minus", () => {
    describe("Success", () => {
        // it("Should return the sum of the 2 passed aguments", () => {
        //     expect(add(2, 2)).toBe(4); // toBe is talking to the return value from our fonction
        // });
    })

    describe("Failure", () => {
        // it("Should throw an error if 1st argument isn't a number", () => {
        //     expect(() => (add("2", 2))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        // });
        // it("Should throw an error if 2nd argument isn't a number", () => {
        //     expect(() => (add(2, "2"))).toThrowError() // toBe is only for returned value so it will not work if we dont execute the function, so we need to throw an Error
        // });
    });
});