/*
Map is a higher-order function.
Unlike filter, it does not throw the elements away, but transforms them.
 */

// We want to transform the array to show specific information:
let animals = [
    {name: 'Fluffykins', species: 'rabbbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
];

// Normal non-function way:
let namesForLoop = [];
for (let i = 0; i < animals.length; i++) {
    namesForLoop.push(animals[i].name);
}

// Map expects a callback that transforms the element. Can also create new objects.
let names = animals.map(function (animal) {
    return animal.name + ' is a ' + animal.species;
});

// Map with arrow notation if only one line:
let namesArrow = animals.map(animal => animal.name + ' is a ' + animal.species);
console.log(namesArrow);

