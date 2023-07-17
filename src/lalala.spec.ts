import Lalala from './lalala';

describe('Lalala', () => {

    let lalalaInstance: Lalala;

    beforeEach(() => {
        lalalaInstance = new Lalala();
    });

    test('concat fn', () => {
        const result = lalalaInstance.concat('foo', 'bar');
        expect(result).toEqual('foo bar');
    });

});