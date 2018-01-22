export default class HuffmanNode {
    readonly symb: string;
    readonly count: number;

    constructor(symb: string, count: number){
        this.symb = symb;
        this.count = count;
    }
}
