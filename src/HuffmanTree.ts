export default class HuffmanTree {

    static compare(a: HuffmanTree, b: HuffmanTree): number {
        return a.count - b.count;
    }

    readonly symb?: string;
    readonly count: number;
    readonly left?: HuffmanTree;
    readonly right?: HuffmanTree;

    // i wanna set constructors like these:
    // - symb and count
    // - children
    constructor(symb?: string, count?: number, children?: [HuffmanTree, HuffmanTree]) {
        this.symb = symb || undefined;
        if (children !== undefined) {
            this.count = children[0].count + children[1].count;
        }
        else {
            this.count = count || 0;
        }
        [this.left, this.right] = children || [undefined, undefined];
    }
}
