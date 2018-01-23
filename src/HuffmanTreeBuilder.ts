import Counter from './Counter';
import HuffmanTree from './HuffmanTree';

export default class HuffmanTreeBuilder {
    static fromCounter(counter: Counter): HuffmanTree {
        const forest = counter.count.map((v: [string, number]) => {
            const [symb, count] = v;
            return new HuffmanTree(symb, count);
        }).sort(HuffmanTree.compare);

        while (forest.length > 1){
            const mini1 = forest.shift() as HuffmanTree;
            const mini2 = forest.shift() as HuffmanTree;
            forest.push(new HuffmanTree(undefined, undefined, [mini1, mini2]));
            forest.sort(HuffmanTree.compare); // sorted set will get this more quickly
        }

        return forest[0]; // name is forest but just one tree
    }

    static fromString(str: string): HuffmanTree {
        return HuffmanTreeBuilder.fromCounter(new Counter(str));
    }
}
