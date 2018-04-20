function loop(start, testFunction, updateFunction, bodyFunction) {
    for(let value = start; testFunction(value); value = updateFunction(value)) {
        bodyFunction(value)
    }
}
loop(3, n => n > 0, n => n - 1, console.log);
