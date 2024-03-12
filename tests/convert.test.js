const convert = require("../convert");

describe("Convert Test", () => {
    it('should convert to 7500 if input is 100', () => {
        expect(convert(100)).toBe(7500);
    })

    it('should convert to NaN if input is undefined', () => {
        expect(convert()).toBe(NaN)
    })
})