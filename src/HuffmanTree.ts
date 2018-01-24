export default class HuffmanTree {

    public static compare(a: HuffmanTree, b: HuffmanTree): number {
        return a.count - b.count;
    }

    public readonly symb?: string;
    public readonly count: number;
    public readonly left?: HuffmanTree;
    public readonly right?: HuffmanTree;

    // i wanna set constructors like these:
    // - symb and count
    // - children
    constructor(symb?: string, count?: number, children?: [HuffmanTree, HuffmanTree]) {
        this.symb = symb || undefined;
        if (children !== undefined) {
            this.count = children[0].count + children[1].count;
        } else {
            this.count = count || 0;
        }
        [this.left, this.right] = children || [undefined, undefined];
    }
}
