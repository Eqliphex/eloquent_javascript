// Function that creates a new function:
function greaterThan(n) {
    return (m) => m > n;                                        // Could omit the parenthesis, included for clarity.
}

let greaterThan10 = greaterThan(10);                            // Saves the returned function to greaterThan10.
console.log(greaterThan10(11));                                 // Calling anonymous function saved in greaterThan10.


// Functions that changes other functions:                      // ...args allows varying amounts of arguments.
function noisy(f) {
    return (...args) => {                                       // Enables us to write (3, 2, 1) after noisy(math.min).
        console.log('Calling with', args);                      // Writes the extra args (3, 2, 1).
        let result = f(...args);                                // In this case Math.min.
        console.log('Called with', args, ', returned', result); // Prints the full list of args, and prints the result.
        return result;                                          // Returns the result.
    }
}

let result = noisy(Math.min)(3, 2, 1);
console.log(result);


// Functions that makes new control flow:
function unless(test, then) {                                   // Takes a test and a function referred to as "then"
    if (!test) {                                                // If test returns false.
        then();                                                 // Execute the then method.
    }
}

repeat(3, n => {                                                // Made in "abstration.js" - takes n and action.
    unless(n % 2 === 1, () => {                                 // Use unless() as control statement and new function.
        console.log(n, 'is even');                              // "then" is executed when test is true
    });
});


// built-in array method:
['A', 'B'].forEach(l => console.log(l));                        // Takes anonymous function and iterate over each.