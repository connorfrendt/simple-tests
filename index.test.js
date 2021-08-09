const {
    addOne
} = require('./index.js');

describe('array methods', () => {

    it('adds 1 to the end of an array', () => {
        const arr = [1, 2, 3];
        const results = addOne(arr);
        
        expect(arr).toEqual([1, 2, 3, 1]);
    });

});