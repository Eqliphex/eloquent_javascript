// Old way of doing it:
function http(url, method, successCallback, errorHandler) {
    setTimeout(function () {
        let data = 'the answer';
        if (data) {
            successCallback(data);
        }
        else {
            errorHandler('No data');
        }
    }, 1000);
}

http('https://google.com', 'GET', function (data) {
    console.log(data);
}, function (error) {
    console.log(error);
});

// With Promises: returns are important to Promises.
// Advantages: Exeptionhandling, as long as we have a .catch the program is safe from uncaught exceptions
function httpPromise(url, method) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            let data = 'the answer';
            if (data) {
                resolve(data);
            }
            else {
                reject('No data');
            }
        }, 1000);
    });
    return promise;
}

httpPromise('https://google.com', 'GET')
    .then(function (data) {
        console.log(data);
        //throw new Error('Error in promise.then')
        return data.toUpperCase();
    })
    .then(function(modifiedData) {
        console.log(modifiedData);
    })
    .then(function (data) {
        console.log(data); // Undefined since no value was returned from previous .then()
    })
    .catch(function (error) {
        console.log("Catch: " + error);
    });