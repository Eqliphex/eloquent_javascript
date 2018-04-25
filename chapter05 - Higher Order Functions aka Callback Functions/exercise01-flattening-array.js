let arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// reduce have the accumulator and the current as the two first arguements.
let arrays = arrayOfArrays.reduce((processedArray, nextArray) => processedArray.concat(nextArray), []);
console.log(arrays);

function explainingFunction(incomingArray) {
    // reduce iterates over all elements in array. Takes function and initial value.
    return incomingArray.reduce(function (processedArray, currentArray, currentIndex, providedArray) {
        console.log('Run:' + (currentIndex + 1));
        console.log('Processed array: ');
        console.log(processedArray);
        console.log('Currently pointing at:');
        console.log(currentArray);
        console.log('Current index: ' + currentIndex);
        console.log('Array which we run over: ');
        console.log(providedArray);
        console.log();

        return processedArray.concat(currentArray);
    }, [])
}


let testArrayTwo = explainingFunction(arrayOfArrays);
console.log(testArrayTwo);

// Only with concat
let res = [].concat.apply([], arrayOfArrays);
console.log(res);

