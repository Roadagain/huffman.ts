import Code from './Code';
import Codebook from './Codebook';

module Encode {

    export const fromCodebook = (str: string, codes: Code[]): string => {
        const codetuples = codes.map((c: Code): [string, string] => [c.symb, c.body]);
        const codeMap = new Map<string, string>(codetuples);
        return fromCodeMap(str, codeMap);
    }

    export const fromCodeMap = (str: string, codemap: Map<string, string>): string => {
        const encoded = str.split('').map((c: string) => codemap.get(c));
        return encoded.join('');
    }

    export const fromString = (str: string): string => {
        // As usual, it can be a oneliner but too long
        return fromCodebook(str, Codebook.fromString(str));
    }

}

export default Encode;
