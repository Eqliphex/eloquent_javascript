let axios = require('axios');
/*
Promise.resolve and Promise.
reject quickly convert synchronous values into Promises,
and are especially useful for ensuring that a given function always returns a Promise.
 */

let cached;

function getUsers(fromCache) {
    if (cached) {
        return Promise.resolve(cached); // Used to resolve immediately
    }
    else if(fromCache) {
        return Promise.reject(new Error('No data in cache')) // Used to solve immediately without creating new promise.
    }
    else {
        return axios.get('https://api.github/users')
            .then(function (response) {
                cached = response.data;
                return response.data;
            });
    }
}

getUsers()
    .then(function (users) {
        console.log(users)
    })
    .catch(function (error) {
        console.log(error);
    });