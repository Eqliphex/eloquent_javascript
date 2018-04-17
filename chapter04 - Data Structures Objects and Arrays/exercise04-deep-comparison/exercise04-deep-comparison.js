/**
 * Created by PWM on 14-04-18.
 */


let a = {value: 1, nextLevel: {a: {value: 2}}};
let b = {value: 1, nextLevel: {a: {value: 2}}};

function deepEqual(value1, value2) {

    // Case if both are objects:
    if ((typeof value1 === "object" && value1 !== null) && (typeof value2 === 'object' && value2 !== null)) {
        let value1Keys = Object.keys(value1);
        let value2Keys = Object.keys(value2);

        if (value1Keys !== value2Keys) return false;
        let isEqual = true;
        for (let i = 0; i < Object.keys(value1).length; i++) {
            let a0 = value1[value1Keys[i]];
            let a1 = value2[value2Keys[i]];
            if (!(deepEqual(a0, a1)))
                return !isEqual;

        }
    } else
        return (value1 === value2);
    return true;
}

function deepEqualJSON(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);

}
console.time('deepEqual');
console.log(deepEqual(a, b));
console.timeEnd('deepEqual');

console.time('JSONEqual');
console.log(deepEqualJSON(a, b));
console.timeEnd('JSONEqual');


module.exports = {
    deepEqual,
    deepEqualJSON
};