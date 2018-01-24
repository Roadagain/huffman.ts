import * as assert from "assert";
import Code from "../src/Code";
import * as Codebook from "../src/Codebook";
import * as HuffmanTreeBuilder from "../src/HuffmanTreeBuilder";

describe("codebook", () => {
    it("generate a codebook from a huffman tree", () => {
        const tree = HuffmanTreeBuilder.fromString("codebook test");
        const codebook = Codebook.fromHuffmanTree(tree);
        const expected = [
            new Code(" ", "1100"),
            new Code("b", "1101"),
            new Code("c", "1110"),
            new Code("d", "1111"),
            new Code("e", "100"),
            new Code("k", "000"),
            new Code("o", "01"),
            new Code("s", "001"),
            new Code("t", "101"),
        ];

        assert.deepStrictEqual(codebook, expected, "codebook from huffman tree is not actual");
    });

    it("generate a codebook from a string", () => {
        const str = "codebook test";
        const codebook = Codebook.fromString(str);
        const expected = [
            new Code(" ", "1100"),
            new Code("b", "1101"),
            new Code("c", "1110"),
            new Code("d", "1111"),
            new Code("e", "100"),
            new Code("k", "000"),
            new Code("o", "01"),
            new Code("s", "001"),
            new Code("t", "101"),
        ];

        assert.deepStrictEqual(codebook, expected, "codebook from huffman tree is not actual");
    });
});
