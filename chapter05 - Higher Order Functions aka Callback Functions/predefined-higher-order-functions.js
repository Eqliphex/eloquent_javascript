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

console.log(filter(SCRIPTS, script => script.living));  // Filteres the list with the "living" true/false property.

// Predefined array filter
console.log(SCRIPTS.filter(s => s.direction == 'ttb'));


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
    for (let element of array) {                        // Runs through all elements.
        current = combine(current, element);            // Calls the combine() on current and next value and overwrites.
    }

    return current;                                     // Returns the final product of the summation.
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
console.log(reduce([1, 2, 3, 4], (a, b) => a * b, 1));

// Using reduce to find script with most characters:
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => { // takes the ranges in SCRIPTS and reduces them with function.
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

// Writing the previous without higher order functions:
let biggest = null;
for (let script of SCRIPTS) {
    if (biggest == null || characterCount(biggest) < characterCount(script)) {
        biggest = script;
    }
}

// Composability:
function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average( // Rounds the average, filters out all the living scripts, selects the remaining entries year.
    SCRIPTS.filter(s => !s.living).map(s => s.year))));

console.log(Math.round(average( // Rounds the average, filters out all the non-living scripts, selects the remaining entries year.
    SCRIPTS.filter(s => s.living).map(s => s.year))));

// The less abstract implementation.
let total = 0, count = 0;
for (let script of SCRIPTS) {
    if (script.living) {
        total += script.year;
        count += 1;
    }
}

console.log(Math.round(total / count));

// 1st. implementation builds new arrays when running filter and map.
// 2nd computes some numbers.
// If heavy program, the second would be more viable.


// Strings and character codes:

// Searches through an array in each script, containing character code ranges:
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => { // some() takes  a test function
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

console.log(characterScript(121));
