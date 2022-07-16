const reader = require("./../../lib/utils/reader");

describe("Reader test suite", () => {
    test("Case 1 Read json file", () => {
        const test1 = reader.readJsonFile("visualPartners.json");

        expect(test1).not.toBeNull();
    });
});