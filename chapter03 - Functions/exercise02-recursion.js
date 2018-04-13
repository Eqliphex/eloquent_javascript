function isEven(n) {
    return (n % 2 === 0)
}

console.log(isEven(50));
console.log(isEven(75));

function isEvenRecursive(n) {
    if(n === 0 || n === 1)
        return n % 2 === 0;
    else
        return isEvenRecursive(n - 2);
}

console.log(isEvenRecursive(50));
console.log(isEvenRecursive(75));


