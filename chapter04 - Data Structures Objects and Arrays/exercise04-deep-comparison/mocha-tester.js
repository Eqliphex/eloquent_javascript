let assert = require('assert');
let deepEqual = require('./exercise04-deep-comparison').deepEqual;


// Rerun all: Alt + Shift + R
describe('DeepComparison', function () {
    describe('two equal variables', function () {
        it('should return true when two equal variables are given', function () {
            assert.equal(deepEqual(1, 1), true, 'IsTrue');
        });
    });

    describe('two unequal variables', function () {
        it('should return false when two not equal values', function () {
           assert.equal(deepEqual(1, 2), false, 'isFalse');
        });
    });

    describe('value1 is null', function () {
        it('should return false when one is null', function () {
            assert.equal(deepEqual(null, 1), false);
        });
    });

    describe('value2 is null', function () {
        it('should return false when one is null', function () {
            assert.equal(deepEqual(1, null), false);
        });
    });
});
