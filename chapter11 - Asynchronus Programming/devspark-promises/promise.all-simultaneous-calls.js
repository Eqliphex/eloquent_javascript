/*
If the async operations don't need to execute in a specific order,
Promise.all can boost performance and handle multiple asynchronous calls easily (including error handling).
 */

let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('one');
    }, 3000);
});

// If something in Promise.all is rejected, this .then for promise1 will still be called, since it did not fail.
promise1.then(function (value) {
    console.log(value);
});

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('two');
    }, 1000);
});

let promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('three');
    }, 2000);
});
// The results are sorted in the way the promises are arranged in the array.
// If a non-promise is added to the list, then it's converted to a promise, which is immediately resolved to the value.
Promise.all([promise1, promise2, promise3])
    .then(function (values) { // If one fails in Promise.all, the .then will not be reached!!!
        console.log(values);
    })
    .catch(function (error) {
        console.log(error);
    });



// Workaround for fail-fast behavior in Promises.all:
let p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, "Everything OK in Promise 1");
});
let p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, "Everything OK in Promise 2");
});
let p3 = new Promise(function (resolve, reject) {
    setTimeout(reject, 2500, new Error("Something went wrong in Promise 3!"));
});

const toResultObject = function (promise) {
    return promise
        .then(result => ({success: true, result}))
        .catch(error => ({success: false, error}));
};

// Remember: Map creates a new array with the results from of calling the provided function on every element,
// in the calling array.
Promise.all([p1, p2, p3].map(toResultObject)).then(function (values) {
    for (let i = 0; i < values.length; ++i) {
        if (!values[i].success) {
            console.log("ERR: " + values[i].error);
        } else {
            console.log(values[i].result);
        }
    }
});
