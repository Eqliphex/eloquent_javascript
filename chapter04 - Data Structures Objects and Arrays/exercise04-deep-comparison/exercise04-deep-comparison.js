/**
 * Created by PWM on 14-04-18.
 */


let a = {value: 1, value2: 2};
let b = {value: 1, value2: 2};
let indexValue1 = -1;
let indexValue2 = -1;

function deepEqual(value1, value2) {
    // if((Object.keys(value1) === Object.keys(value2)));

    // for(Object.keys(value1))
    if ((typeof value1 === "object" && value1 !== null) && (typeof value2 === 'object' && value2 !== null)) {
        indexValue1++;
        indexValue2++;
        let value1Keys = Object.keys(value1);
        let value2Keys = Object.keys(value2);

        return deepEqual(value1[value1Keys[indexValue1]], value2[value2Keys[indexValue2]]);
    } else
        return (value1 === value2);
}


module.exports = {
    deepEqual
};