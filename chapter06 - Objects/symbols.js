/*
Symbols are designed to handle the situation when different objects wants to do different things with the same property.
For example an object cannot both conform to the standard toString method meanwhile having its own implementation of
toString. This is because they each are unique, even if they hold the same name.
 */

let sym = Symbol('name');
console.log(sym === Symbol('name')); // Cannot create the same symbol twice.
// → false

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55

let toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm. of blue yarn`;
};

console.log([1, 2].toString());
// → 1, 2
console.log([1, 2][toStringSymbol]());
// → 2 cm. of blue yarn

// Can include symbol properties in object expressions and classes by using square brackets access notation:
let stringObject = {
    [toStringSymbol]() {return "a jute rope";}
};
console.log(stringObject[toStringSymbol]());
// → a jute rope