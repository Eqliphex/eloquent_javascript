/*
Why functional-programming:
- Less bugs
    > Easier to reason about.
- Less time
    > Reuse more code
 */

/*
In javascript functions is values
 */
let triple = function (x) { // <-- Anonymous function
    return x * 3;
};

let waffle = triple;
waffle(30);
// → 90

/*
Why higher order functions?
composition meaning that we can define small functions and put them together.
 */
// Filter example:
// Takes a function as its test. Expects either true or false as return value and adds element to new array if true.
let animals = [
    {name: 'Fluffykins', species: 'rabbbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
];

// Without functional programming:
let dogsForLoop = [];
for (let i = 0; i < animals.length; i++) {
    if(animals.species === 'dog')
        dogsForLoop.push(animals[i]);
}

// Function notation:
// Predecate test function:
let isDog = function (animal) {
    return animal.species === 'dog';
};

// filtering with predefined predecate function:
let dogs = animals.filter(isDog); // added if true. (only dogs)
let otherAnimals = animals.reject(isDog); // added if false (all but dogs)

// Arrow notation:
let dogsArrow = animals.filter(x => x.species === 'dog');
let otherAnimals = animals.reject(animal => animal.species === 'dog');
