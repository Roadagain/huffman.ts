export default class Code {
    constructor(readonly symb: string, readonly body: string) {}

    static cmp(a: Code, b: Code): number {
        if (a.symb < b.symb) {
            return -1;
        }
        if (a.symb > b.symb) {
            return 1;
        }
        return 0;
    }
}
