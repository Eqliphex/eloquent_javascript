function min(a, b) {
    if(isNaN(a) && b !== undefined)
        return b;
    else if(isNaN(b) && a !== undefined)
        return a;

    if(a < b)
        return a;
    else
        return b;
}

console.log(min(1, 2));
console.log(min(2, 1));
console.log(min('cake', 2));
