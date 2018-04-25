/*
We can pass functions around like variables and return them in functions and use them in other functions.
When we pass a callback function as an argument to another function, we are only passing the function definition.
We are not executing the function in the parameter.
In other words, we aren’t passing the function with the trailing pair of executing parenthesis ()
like we do when we are executing a function.

And since the containing function has the callback function in its parameter as a function definition,
it can execute the callback anytime.

Note that the callback function is not executed immediately.
It is “called back” (hence the name) at some specified point inside the containing function’s body.
 */


// Use Named OR anonymous functions as callbacks:

// Global variable:
let allUserData = [];

// Generic logStuff function that prints to console.
function logStuff(userData) {
    if (typeof userData === 'string') {
        console.log(userData);
    }
    else if (typeof userData === 'object') {
        for (let item in userData)
            console.log(item + ':' + userData[item]);
    }
}

// Function that takes two parameters, the last one is a callback function:
function getInput(options, callback) {
    allUserData.push(options);
    // Make sure that callback is a function so we can call it:
    if (typeof callback === "function") {
        callback(options);
    }

}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will be called back(or executed) inside the getInput function.
getInput({name: 'Rick', speciality: 'JavaScript'}, logStuff);


// Problem when using methods with the this object as callback.
let clientData = {
    id: 904545,
    fullName: 'Not Set',

    // setUserName is a method on the clientdata object
    setUserName: function (firstName, lastName) {
        this.fullName = firstName + ' ' + lastName;
    }
};

function getUserInput(firstName, lastName, callback, callbackContextObject) {
    // Do other stuff to validate firstName/lastName here

    // Save names
    callback.apply(callbackContextObject, [firstName, lastName]);
}

getUserInput('Patrick', 'Meyer', clientData.setUserName, clientData);
console.log(clientData.fullName);
// → Not set??

// Use Call or Apply function to preserve this and add the callbackObject to getUserInput. This gives the correct
// context for the callback function.