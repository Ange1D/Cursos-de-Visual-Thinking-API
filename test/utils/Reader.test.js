const Reader = require("../../lib/utils/Reader");

describe("Unit Tests for Reader Class", () => {
    test("1) Read explorers.json", () => {

        const explorers = Reader.readJsonFile("test/data/visualpartners_test.json");

        expect(explorers).not.toBeUndefined();
      

    });
});
  