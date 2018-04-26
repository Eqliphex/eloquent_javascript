let started = new Date();
console.timestamp = function () {
    let now = new Date();
    let args = Array.prototype.slice.call(arguments, 0);
    args.unshift(now - started, "ms.");
    console.log(args.join(' '));
};

function delay(ms) {
    console.timestamp('start delay', ms);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.timestamp('finished delay', ms);
            resolve(ms);
        }, ms);
    });
}

// Execute single chain of promises:
let delays = [10000, 3000, 3000, 3000];
function pickUpNextTask() {
    if (delays.length) {
        return delay(delays.shift());
    }
}
function startChain() {
    return Promise.resolve().then(function next() {
        console.log(delays);
        return pickUpNextTask().then(next);
    });
}

startChain();

//Parallel execution:
let tasks = delays.map((d) => {
   return delay(d);
});

Promise.all(tasks).finally(() => console.log("Done"));
