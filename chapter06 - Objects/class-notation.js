/*
Newer class notation for JavaScript after 2015.
Is equivalent to the old prototype notation, but it looks nicer.
Remember! Prototype is just another object used as fallback source of properties for
instantiated objects.
 */

class Rabbit {
    // The same as →    function Rabbit(type) {
    //                      this.type;
    //                  }
    constructor(type) {
        this.type = type;
    }

    // The same as → Rabbit.prototype.speak = function(line) {...}
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}

let killerRabbit = new Rabbit('killer');
let blackRabbit = new Rabbit('black');

// Overridíng derived properties:
Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = 'long, sharp and bloody';
console.log(killerRabbit.teeth);
// → long, sharp and bloody.

console.log(blackRabbit.teeth);
// → small

console.log(Rabbit.prototype.teeth);
// → small

// Overriding is useful for example in arrays, (which are a derivative of object) for specifying a
// custom toString method.

console.log(Array.prototype.toString === Object.prototype.toString); // Checks for equality of the two methods.
// → false.

// Arrays toString method, is similar to .join(',')
console.log([1, 2].toString());
// → 1, 2

// Objects toString method, does not know how to format an incoming array:
console.log(Object.prototype.toString.call([1, 2]));
// → [object Array]


// Polymorphism:
Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`
};
console.log(String(blackRabbit));
// → a black rabbit

