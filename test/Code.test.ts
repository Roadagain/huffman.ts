import Code from "../src/Code";
import * as assert from "assert";

describe("code", () => {
    it("instance code", () => {
        const symb = "a";
        const body = "01";
        const code = new Code(symb, body);

        assert.strictEqual(code.symb, symb, "symbol is not actual");
        assert.strictEqual(code.body, body, "symbol is not actual");
    });

    it("compare code: less", () => {
        const a = new Code("i", "11");
        const b = new Code("n", "10");

        assert.strictEqual(Code.compare(a, b), -1, "less compare is not actual");
    });

    it("compare code: more", () => {
        const a = new Code("w", "100");
        const b = new Code("u", "110");

        assert.strictEqual(Code.compare(a, b), 1, "more compare is not actual");
    });

    it("compare code: equal", () => {
        const a = new Code("o", "000");
        const b = new Code("o", "000");

        assert.deepStrictEqual(a, b, "equal compare is not actual");
        assert.strictEqual(Code.compare(a, b), 0, "equal compare is not actual");
    });
});
