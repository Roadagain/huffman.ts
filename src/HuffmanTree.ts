export default class HuffmanTree {
    readonly symb?: string;
    readonly count: number;
    readonly left?: HuffmanTree;
    readonly right?: HuffmanTree;

    constructor(symb?: string, count?: number, children?: [HuffmanTree, HuffmanTree]){
        this.symb = symb || undefined;
        if (children !== undefined){
            this.count = children[0].count + children[1].count;
        }
        else {
            this.count = count || 0;
        }
        [this.left, this.right] = children || [undefined, undefined];
    }

    static compare(a: HuffmanTree, b: HuffmanTree) {
        return a.count - b.count;
    }
}
