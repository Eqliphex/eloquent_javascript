/**
 * Created by PWM on 13-04-18.
 */

function range(start, end) {
    let result = [];
    for(start; start <= end; start++)
        result.push(start);

    return result;
}

function sum(inputArray) {
    let sum = 0;
    for(let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }

    return sum;
}

let array = range(1, 10);
console.log(sum(array));