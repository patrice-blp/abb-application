import {generateParts} from "../../common/mocks/parts.js";
import expect from "expect";


describe("Parts", () => {
    it("should generate parts data", () => {
        const data = generateParts();
        expect(data).toBeInstanceOf(Array);
        expect(data).toHaveLength(2);
        expect(data[0].name).toBe("Part A");
        expect(data[0].features).toBeInstanceOf(Array);
        expect(data[0].features[0].controls).toBeTruthy();
    });
});