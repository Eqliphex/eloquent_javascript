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
        })
    });

    describe('one object, one null', function () {
        it('should return false when one is null', function () {
            let value1 = {value: 1};
            let value2 = null;

            assert.equal(deepEqual(value1, value2, null), false);
        })
    });

    describe('two equal objects', function () {

        let value1 = {data1: 1, data2: 2};
        let value2 = {data1: 1, data2: 2};

        it('should return true when both are equal', function () {
            assert.equal(deepEqual(value1, value2), true);
        })
    });
});
