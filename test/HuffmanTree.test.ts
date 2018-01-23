///<reference path="../node_modules/@types/power-assert/index.d.ts" />
///<reference path="../node_modules/@types/jasmine/index.d.ts" />

import HuffmanTree from '../src/HuffmanTree';
import * as assert from 'assert';

describe('huffman tree', () => {
    it('construct a leaf', () => {
        const symb = 'x';
        const count = 20;
        const leaf = new HuffmanTree(symb, count);

        assert.equal(leaf.symb, symb, 'symbol is not actual');
        assert.equal(leaf.count, count, 'count is not actual');
        assert.equal(leaf.left, undefined, 'left child is not actual');
        assert.equal(leaf.right, undefined, 'right child is not actual');
    });

    it('construct a tree from two nodes', () => {
        const left = new HuffmanTree('a', 128);
        const right = new HuffmanTree('b', 64);
        const tree = new HuffmanTree(undefined, undefined, [left, right]);

        assert.equal(tree.symb, undefined, 'symbol is not actual');
        assert.equal(tree.left, left, 'left child is not actual');
        assert.equal(tree.right, right, 'right child is not actual');
        assert.equal(tree.count, left.count + right.count, 'count is not actual');
    });

    it('construct a tree from one node and one tree', () => {
        const left = new HuffmanTree('c', 32);
        const rleft = new HuffmanTree('d', 16);
        const rright = new HuffmanTree('e', 8);
        const right = new HuffmanTree(undefined, undefined, [rleft, rright]);
        const tree = new HuffmanTree(undefined, undefined, [left, right]);

        assert.equal(tree.symb, undefined, 'symbol is not actual');
        assert.equal(tree.left, left, 'left child is not actual');
        assert.equal(tree.right, right, 'right child is not actual');
        assert.equal(tree.count, left.count + right.count, 'count is not actual');
    });

    it('construct a tree from two trees', () => {
        const lleft = new HuffmanTree('f', 4);
        const lright = new HuffmanTree('g', 2);
        const left = new HuffmanTree(undefined, undefined, [lleft, lright]);
        const rleft = new HuffmanTree('h', 1);
        const rright = new HuffmanTree('i', 0);
        const right = new HuffmanTree(undefined, undefined, [rleft, rright]);
        const tree = new HuffmanTree(undefined, undefined, [left, right]);

        assert.equal(tree.symb, undefined, 'symbol is not actual');
        assert.equal(tree.left, left, 'left child is not actual');
        assert.equal(tree.right, right, 'right child is not actual');
        assert.equal(tree.count, left.count + right.count, 'count is not actual');
    });
});
