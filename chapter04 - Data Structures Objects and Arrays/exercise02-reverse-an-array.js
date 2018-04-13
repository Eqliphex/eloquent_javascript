/**
 * Created by PWM on 13-04-18.
 */

function reverseArray(inputArray) {
    let newArray = [];
    for(let i = inputArray.length-1; i >= 0; i--) {
        newArray.push(inputArray[i]);
    }
    return newArray;
}

let orderedArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(orderedArray);
console.log(reversedArray);

function reverseArrayInPlace(inputArray) {
    let startPivot = 0;
    let endPivot = inputArray.length - 1;

    while(startPivot !== endPivot) {
        let temp = inputArray[startPivot];
        inputArray[startPivot] = inputArray[endPivot];
        inputArray[endPivot] = temp;

        startPivot++;
        endPivot--;
    }

    return inputArray;
}

let orderedArrayTwo = [6, 7, 8, 9, 10];
let reversedArrayTwo = reverseArrayInPlace(orderedArrayTwo);
console.log(reversedArrayTwo);