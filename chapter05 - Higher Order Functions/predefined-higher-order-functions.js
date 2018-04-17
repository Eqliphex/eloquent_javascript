const scripts = require('./scriptDataSet');             // File with predefined dataset.

// Function for filtering a dataset: implemented with standard array.filter()
function filter(array, test) {                          // Takes an array and a test function.
    let passed = [];                                    // Array for all passed elements.
    for (let element of array) {                        // Run through all entries in array.
        if (test(element)) {                            // Use the provided test function as flow control.
            passed.push(element);                       // Push the passed element into array.
        }
    }

    return passed;                                      // Return passed elements.
}

//console.log(filter(SCRIPTS, script => script.living));    // Filteres the list with the "living" true/false property.

// Predefined array filter
//console.log(SCRIPTS.filter(s => s.direction == 'ttb'));


// applies function to all array elements and creates a new one from the returned values.
function map(array, transform) {                        // Takes an array and a transform function.
    let mapped = [];                                    // Array for mapped(transformed) elements.
    for (let element of array) {                        // Runs through all elements.
        mapped.push(transform(element));                // Applies the transform method.
    }

    return mapped;                                      // Returns the mapped elements in a new array.
}

let rtlScripts = SCRIPTS.filter(s => s.direction === 'rtl'); // Initial filtering.
//console.log(map(rtlScripts, s => s.name));              // selects desired properties from filtered list.


// Summarizing with reduce:

function reduce(array, combine, start) {                // Takes an array, combine function and start index.
    let current = start;                                // Sets the initial value to start value.
    for(let element of array) {                         // Runs through all elements.
        current = combine(current, element);            // Calls the combine() on current and next value and overwrites.
    }

    return current;                                     // Returns the final product of the summation.
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
console.log(reduce([1, 2, 3, 4], (a, b) => a * b, 1));

// Using reduce to find script with most characters:
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}
