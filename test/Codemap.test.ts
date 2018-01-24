import * as CodeMap from "../src/CodeMap";
import * as Codebook from "../src/Codebook";
import * as assert from "assert";

describe("codemap", () => {
    it("mapping a codebook from a codebook", () => {
        const codebook = Codebook.fromString("codemap test");
        const codeMap = CodeMap.fromCodebook(codebook);
        const expected = new Map<string, string>([
            [" ", "1100"],
            ["a", "1101"],
            ["c", "1110"],
            ["d", "1111"],
            ["e", "100"],
            ["m", "000"],
            ["o", "001"],
            ["p", "010"],
            ["s", "011"],
            ["t", "101"],
        ]);

        assert.deepEqual(codeMap, expected, "codemap is not acutual");
    });

    it("mapping a codebook a string", () => {
        const str = "codemap test";
        const codeMap = CodeMap.fromString(str);
        const expected = new Map<string, string>([
            [" ", "1100"],
            ["a", "1101"],
            ["c", "1110"],
            ["d", "1111"],
            ["e", "100"],
            ["m", "000"],
            ["o", "001"],
            ["p", "010"],
            ["s", "011"],
            ["t", "101"],
        ]);

        assert.deepEqual(codeMap, expected, "codemap is not acutual");
    });
});
