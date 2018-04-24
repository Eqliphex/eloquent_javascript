function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

let g = gen();

for (let i = 0; i < 5; i++) {
    let val = g.next().value;
    console.log(val);
}

function* genForLoop() {
    let index = 1;
    while(index <= 5)
        yield index++;
}

let gen2 = genForLoop();

console.log("run 1", gen2.next());
console.log("run 2", gen2.next());
console.log("run 3", gen2.next());
console.log("run 4", gen2.next());
console.log("run 5", gen2.next());
console.log("run 6", gen2.next());