import HuffmanNode from 'HuffmanNode';

export default class HuffmanTree {
    readonly left: HuffmanTree|HuffmanNode;
    readonly right: HuffmanTree|HuffmanNode;
    readonly count: number;

    constructor(left: HuffmanTree|HuffmanNode, right: HuffmanTree|HuffmanNode) {
        this.left = left;
        this.right = right;
        this.count = left.count + right.count;
    }

    static compare(a: HuffmanTree, b: HuffmanTree) {
        return a.count - b.count;
    }
}
