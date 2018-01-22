///<reference path="../node_modules/@types/power-assert/index.d.ts" />
///<reference path="../node_modules/@types/jasmine/index.d.ts" />

import Counter from '../src/Counter';
import HuffmanNode from '../src/HuffmanNode';
import HuffmanTree from '../src/HuffmanTree';
import HuffmanTreeBuilder from '../src/HuffmanTreeBuilder';
import * as assert from 'assert';

describe('huffman tree builder', () => {
    it('construct a tree from a counter', () => {
        const counter = new Counter('aabbc');
        const tree = HuffmanTreeBuilder.fromCounter(counter);
        const lexpected = new HuffmanNode('b', 2);
        const rlexpected = new HuffmanNode('c', 1);
        const rrexpected = new HuffmanNode('a', 2);
        const rexpected = new HuffmanTree(rlexpected, rrexpected);
        const expected = new HuffmanTree(lexpected, rexpected);

        assert.equal(tree, expected, 'built tree is not actual');
    });

    it('construct a tree from a string', () => {
        const str = 'aabbc';
        const tree = HuffmanTreeBuilder.fromString(str);
        const lexpected = new HuffmanNode('b', 2);
        const rlexpected = new HuffmanNode('c', 1);
        const rrexpected = new HuffmanNode('a', 2);
        const rexpected = new HuffmanTree(rlexpected, rrexpected);
        const expected = new HuffmanTree(lexpected, rexpected);

        assert.equal(tree, expected, 'built tree is not actual');
    });
});
