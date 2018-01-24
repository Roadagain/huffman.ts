import Code from "./Code";
import HuffmanTree from "./HuffmanTree";
import * as HuffmanTreeBuilder from "./HuffmanTreeBuilder";

export const fromHuffmanTree = (tree: HuffmanTree, prefix = ""): Code[] => {
    if (tree.left === undefined) {
        // given tree is a leaf, so symb is not undefined
        return [new Code(tree.symb as string, prefix)];
    }
    // children is not be undefined
    const leftCodebook = fromHuffmanTree(tree.left, prefix + "0");
    const rightCodebook = fromHuffmanTree(tree.right as HuffmanTree, prefix + "1");
    return leftCodebook.concat(rightCodebook).sort(Code.compare);
};

export const fromString = (str: string, prefix = ""): Code[] => {
    // it can be a oneliner, but it will takes too long
    return fromHuffmanTree(HuffmanTreeBuilder.fromString(str)); // sorted
};
