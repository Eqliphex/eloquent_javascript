/*
Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
 */
/*let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function test(data) {
    console.log("Data: " + data);
    return Promise.all(data.map(value => {
        return new Promise((resolve, reject) => {
            let message = "The number: " + value;
            resolve(message);
        });
    })).then(() => {
        console.log("done");
    });
}


test(data);*/


let promiseArray = [];
for (let i = 0; i < 20; i++) {

    let newPromise = new Promise((resolve, reject) => {
        if (i % 2 === 0)
            resolve(i + " is even");
        else
            reject(i + " is odd");
    })
        .then((value) => {
            console.log(value + " Successful");
        })
        .catch((value) => {
            console.log(value + " Failure");
            console.timestamp
        });

    promiseArray.push(newPromise);
}

console.log(promiseArray);

/*
for (let i = 0; i < 20; i++) {
    let newPromise = new Promise((resolve, reject) => {
            if (i % 2 === 0) {
                resolve(i + " is even!");
            } else {
                const reason = new Error(i + "Is odd");
                reject(reason);
            }
        }
    )
        .then()
        .catch();
    promiseResults.push(newPromise);
}*/
