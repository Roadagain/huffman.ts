import * as assert from "assert";
import * as CodeMap from "../src/CodeMap";
import * as Encode from "../src/Encode";

describe("encode", () => {
    it("encode from a codemap", () => {
        const str = "encode test";
        const codeMap = CodeMap.fromString(str);
        const encoded = Encode.fromCodeMap(str, codeMap);
        const expected = "10001111101000010111011010011110";

        assert.equal(encoded, expected, "encoder is not actual");
    });

    it("encode from a string", () => {
        const str = "encode test";
        const encoded = Encode.fromString(str);
        const expected = "10001111101000010111011010011110";

        assert.equal(encoded, expected, "encoder is not actual");
    });
});
