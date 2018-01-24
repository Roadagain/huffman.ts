import Codebook from "./Codebook";
import Code from "./Code";

module CodeMap {
    export const fromCodebook = (codebook: Code[]): Map<string, string> => {
        const tuplized = codebook.map((c: Code): [string, string] => [c.symb, c.body]);
        return new Map<string, string>(tuplized);
    };

    export const fromString = (str: string): Map<string, string> => {
        // As usual, onelinerize will takes too long
        return fromCodebook(Codebook.fromString(str));
    }
}

export default CodeMap;
