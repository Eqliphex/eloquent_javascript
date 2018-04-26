let request = require('request');

function http(url, method) {
    method = method.toLowerCase();

    let options = {
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    };

    return new Promise((resolve, reject) => {
        // Bracket notation is used, since we cannot use variables with dot notation, bc all property keys are strings.
        request[method](options, (error, response, body) => { // method could be GET,POST,DELETE etc, hence brackets.
            if (error) {
                reject(error);
            }
            if (body) {
                resolve(JSON.parse(body));
            }
        });
    });
}

console.log('fetching users');
http('https://api.github.com/users?since=1364725', 'GET')
    .then(function (users) {
        console.log('fetching repos');
        let user = users[0];
        return http(user.repos_url, 'GET'); // This call could also have a .then/.catch chain since a promise!
    })
    .then(function (repos) { // Has access to the return value of the previous .then
        console.log('fetching languages');
        let repo = repos[0];
        return http(repo.languages_url, 'GET');
    })
    .then(function (languages) {
        console.log(languages);
    })
    .catch(function (error) { // Best practice to have a catch in the chain.
        console.log('Caught Error: ' + error);
    });