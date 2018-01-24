///<reference path="../node_modules/@types/power-assert/index.d.ts" />
///<reference path="../node_modules/@types/jasmine/index.d.ts" />

import Counter from "../src/Counter";
import * as assert from "assert";

describe("counter", () => {
    it("count characters", () => {
        const counter = new Counter("counter test");
        const expected = [
            [" ", 1],
            ["c", 1],
            ["e", 2],
            ["n", 1],
            ["o", 1],
            ["r", 1],
            ["s", 1],
            ["t", 3],
            ["u", 1],
        ];
        assert.deepStrictEqual(counter.count, expected, "Counter is not actual");
    });

    it("count empty string", () => {
        const counter = new Counter("");
        const expected = [] as Array<[string, number]>;
        assert.deepStrictEqual(counter.count, expected, "Counter is not actual");
    });

    it("count japanese string", () => {
        const counter = new Counter("あめんぼあかいなあいうえお");
        const expected = [
            ["あ", 3],
            ["い", 2],
            ["う", 1],
            ["え", 1],
            ["お", 1],
            ["か", 1],
            ["な", 1],
            ["ぼ", 1],
            ["め", 1],
            ["ん", 1],
        ];
        assert.deepStrictEqual(counter.count, expected, "Counter is not actual");
    });
});
