///<reference path="../node_modules/@types/power-assert/index.d.ts" />
///<reference path="../node_modules/@types/jasmine/index.d.ts" />

import HuffmanNode from '../src/HuffmanNode';
import * as assert from 'assert';

describe('huffman node', () => {
    it('create a node', () => {
        const symb = 'a';
        const count = 128;
        const node = new HuffmanNode(symb, count);
        assert.equal(node.symb, symb, 'symbol is not actual');
        assert.equal(node.count, count, 'count is not actual');
    });
});
