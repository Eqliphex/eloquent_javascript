for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Can be abstracted away to:
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

// And if we want to do something other than log:
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);

// Often we create a function on the spot:
let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);