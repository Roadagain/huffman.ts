import * as assert from "assert";
import Counter from "../src/Counter";
import HuffmanTree from "../src/HuffmanTree";
import * as HuffmanTreeBuilder from "../src/HuffmanTreeBuilder";

describe("huffman tree builder", () => {
    it("construct a tree from a counter", () => {
        const counter = new Counter("aabbc");
        const tree = HuffmanTreeBuilder.fromCounter(counter);
        const lexpected = new HuffmanTree("b", 2);
        const rlexpected = new HuffmanTree("c", 1);
        const rrexpected = new HuffmanTree("a", 2);
        const rexpected = new HuffmanTree(undefined, undefined, [rlexpected, rrexpected]);
        const expected = new HuffmanTree(undefined, undefined, [lexpected, rexpected]);

        assert.deepStrictEqual(tree, expected, "built tree is not actual");
    });

    it("construct a tree from a string", () => {
        const str = "aabbc";
        const tree = HuffmanTreeBuilder.fromString(str);
        const lexpected = new HuffmanTree("b", 2);
        const rlexpected = new HuffmanTree("c", 1);
        const rrexpected = new HuffmanTree("a", 2);
        const rexpected = new HuffmanTree(undefined, undefined, [rlexpected, rrexpected]);
        const expected = new HuffmanTree(undefined, undefined, [lexpected, rexpected]);

        assert.deepStrictEqual(tree, expected, "built tree is not actual");
    });
});
