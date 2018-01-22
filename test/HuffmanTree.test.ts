///<reference path="../node_modules/@types/power-assert/index.d.ts" />
///<reference path="../node_modules/@types/jasmine/index.d.ts" />

import HuffmanNode from '../src/HuffmanNode';
import HuffmanTree from '../src/HuffmanTree';
import * as assert from 'assert';

describe('huffman tree', () => {
    it('construct a tree from two nodes', () => {
        const left = new HuffmanNode('a', 128);
        const right = new HuffmanNode('b', 64);
        const tree = new HuffmanTree(left, right);

        assert.equal(tree.left, left, 'left child is not actual');
        assert.equal(tree.right, right, 'right child is not actual');
        assert.equal(tree.count, left.count + right.count, 'count is not actual');
    });

    it('construct a tree from one node and one tree', () => {
        const left = new HuffmanNode('c', 32);
        const rleft = new HuffmanNode('d', 16);
        const rright = new HuffmanNode('e', 8);
        const right = new HuffmanTree(rleft, rright);
        const tree = new HuffmanTree(left, right);

        assert.equal(tree.left, left, 'left child is not actual');
        assert.equal(tree.right, right, 'right child is not actual');
        assert.equal(tree.count, left.count + right.count, 'count is not actual');
    });

    it('construct a tree from two trees', () => {
        const lleft = new HuffmanNode('f', 4);
        const lright = new HuffmanNode('g', 2);
        const left = new HuffmanTree(lleft, lright);
        const rleft = new HuffmanNode('h', 1);
        const rright = new HuffmanNode('i', 0);
        const right = new HuffmanTree(rleft, rright);
        const tree = new HuffmanTree(left, right);

        assert.equal(tree.left, left, 'left child is not actual');
        assert.equal(tree.right, right, 'right child is not actual');
        assert.equal(tree.count, left.count + right.count, 'count is not actual');
    });
});
