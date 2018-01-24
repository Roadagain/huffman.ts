import Codebook from './Codebook';
import Code from './Code';

module CodeMap {
    type CodeMap = Map<string, string>;

    export const fromCodebook = (str: string, codebook: Code[]): CodeMap => {
        const tuplized = codebook.map((c: Code): [string, string] => [c.symb, c.body]);
        return new CodeMap(tuplized);
    };

    export const fromString = (str: string): CodeMap => {
        // As usual, onelinerize will takes too long
        return fromCodebook(str, Codebook.fromString(str));
    }
}

export default CodeMap;
