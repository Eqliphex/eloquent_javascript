/*
Promise.race resolves or rejects as soon as any of the given Promises resolves or rejects.
This can be useful if it is not important to wait for all values to resolve,
and can provide an even greater performance boost.

All promises still go through each of their own resolve .then flow
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
        resolve('two');
    }, 1000);
});

let promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('three');
    }, 2000);
});
// The results are sorted in the way the promises are arranged in the array.
// If a non-promise is added to the list, then it's converted to a promise, which is immediately resolved to the value.
// The non promise will always win in Promise.race
Promise.all([promise1, promise2, promise3])
    .then(function (value) { // If one fails in Promise.all, the .then will not be reached!!!
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    });
