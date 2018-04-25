// First setup the generic poem creator function; it will be the callback function in the getUserInput function.
function genericPoemMaker(name, gender) {
    console.log(name + " is finer than fine wine");
    console.log("Altruistic and noble for modern time.");
    console.log("Always admirably adorned with the latest style.");
    console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile.");
}

function greetUser(customerName, sex) {
    let salutation = sex && sex === 'Man' ? 'Mr.':'Ms.';
    console.log("Hello, " + salutation + " " + customerName);
}


// This callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above.
function getUserInput(firstName, lastName, gender, callback) {
    let fullName = firstName + " " + lastName;

    // Make sure the callback parameter is a function:
    if(typeof callback === "function") {
        // Execute callback function and pass the parameters to it.
        callback(fullName, gender);
    }
}

getUserInput('Patrick', 'Meyer', 'Man', genericPoemMaker);
getUserInput('Patrick', 'Meyer', 'Man', greetUser);
// Remember: The function is first invoked inside the function, so i does not take any arguments when given to method.