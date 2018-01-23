import HuffmanTree from './HuffmanTree';
import HuffmanTreeBuilder from './HuffmanTreeBuilder';
import Code from './Code';

module Codebook {

    export const fromHuffmanTree = (tree: HuffmanTree, prefix = ''): Code[] => {
        if (tree.left === undefined) {
            return [new Code(tree.symb as string, prefix)];
        }
        // children must not be undefined
        const leftCodebook = fromHuffmanTree(tree.left, prefix + '0');
        const rightCodebook = fromHuffmanTree(tree.right as HuffmanTree, prefix + '1');
        return leftCodebook.concat(rightCodebook).sort(Code.cmp);
    };

    export const fromString = (str: string, prefix = ''): Code[] => {
        return fromHuffmanTree(HuffmanTreeBuilder.fromString(str)); // sorted
    };

}

export default Codebook;
