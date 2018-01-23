///<reference path="../node_modules/@types/power-assert/index.d.ts" />
///<reference path="../node_modules/@types/jasmine/index.d.ts" />

import HuffmanTreeBuilder from '../src/HuffmanTreeBuilder';
import Code from '../src/Code';
import Codebook from '../src/Codebook';
import * as assert from 'assert';

describe('codebook', () => {
    it('generate a codebook from a huffman tree', () => {
        const tree = HuffmanTreeBuilder.fromString('codebook test');
        const codebook = Codebook.fromHuffmanTree(tree);
        const expected = [
            new Code(' ', '1100'),
            new Code('b', '1101'),
            new Code('c', '1110'),
            new Code('d', '1111'),
            new Code('e', '100'),
            new Code('k', '000'),
            new Code('o', '01'),
            new Code('s', '001'),
            new Code('t', '101'),
        ];

        assert.deepStrictEqual(codebook, expected, 'codebook from huffman tree is not actual');
    });

    it('generate a codebook from a string', () => {
        const str = 'codebook test';
        const codebook = Codebook.fromString(str);
        const expected = [
            new Code(' ', '1100'),
            new Code('b', '1101'),
            new Code('c', '1110'),
            new Code('d', '1111'),
            new Code('e', '100'),
            new Code('k', '000'),
            new Code('o', '01'),
            new Code('s', '001'),
            new Code('t', '101'),
        ];

        assert.deepStrictEqual(codebook, expected, 'codebook from huffman tree is not actual');
    });
});
