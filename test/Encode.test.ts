///<reference path="../node_modules/@types/power-assert/index.d.ts" />
///<reference path="../node_modules/@types/jasmine/index.d.ts" />

import CodeMap from "../src/CodeMap";
import Encode from "../src/Encode";
import * as assert from "assert";

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
