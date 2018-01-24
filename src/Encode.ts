import Code from "./Code";
import CodeMap from "./CodeMap";

module Encode {

    export const fromCodeMap = (str: string, codemap: Map<string, string>): string => {
        const encoded = str.split("").map((c: string) => codemap.get(c));
        return encoded.join("");
    }

    export const fromString = (str: string): string => {
        // As usual, it can be a oneliner but too long
        return fromCodeMap(str, CodeMap.fromString(str));
    }

}

export default Encode;
