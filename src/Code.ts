export default class Code {
    static compare(a: Code, b: Code): number {
        if (a.symb < b.symb) {
            return -1;
        }
        if (a.symb > b.symb) {
            return 1;
        }
        return 0;
    }

    constructor(readonly symb: string, readonly body: string) {}
}
