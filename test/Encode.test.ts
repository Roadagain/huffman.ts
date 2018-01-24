///<reference path="../node_modules/@types/power-assert/index.d.ts" />
///<reference path="../node_modules/@types/jasmine/index.d.ts" />

import Codebook from '../src/Codebook';
import Encode from '../src/Encode';
import * as assert from 'assert';

describe('encode', () => {
    it('encode from a codemap', () => {
        const str = 'encode test';
        const codeMap = new Map<string, string>([
            [' ', '1110'],
            ['c', '1111'],
            ['d', '000'],
            ['e', '10'],
            ['n', '001'],
            ['o', '010'],
            ['s', '011'],
            ['t', '110'],
        ]);
        const encoded = Encode.fromCodeMap(str, codeMap);
        const expected = '10001111101000010111011010011110';

        assert.equal(encoded, expected, 'encoder is not actual');
    });

    it('encode from a codebook', () => {
        const str = 'encode test';
        const codebook = Codebook.fromString(str);
        const encoded = Encode.fromCodebook(str, codebook);
        const expected = '10001111101000010111011010011110';

        assert.equal(encoded, expected, 'encoder is not actual');
    });

    it('encode from a string', () => {
        const str = 'encode test';
        const encoded = Encode.fromString(str);
        const expected = '10001111101000010111011010011110';

        assert.equal(encoded, expected, 'encoder is not actual');
    });
});
