const defineFunctions = function (x) {
    return x * x;
};

console.log(defineFunctions(12));

const makeNoise = function() {
    console.log("Pling!");
};

console.log(makeNoise());

const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));