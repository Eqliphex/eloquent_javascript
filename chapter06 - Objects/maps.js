/*
A map is a data strcuture that associates values with other values.
 */
let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → IS toString's age known? true <-- ????
// Explaniation is that ages property is an object, and it therefore inheriting all the predefined properties in Object.
// A way to get around that is to set it as having no ancestors.
// .create(null);

// There is a catch to using this method as a map. The property names MUST be strings. If that is not the case,
// use Map()

ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false

// For finding properties in the object itself use .hasOwnProperty method
console.log({x: 1}.hasOwnProperty("x"));
// → true
console.log({x: 1}.hasOwnProperty("toString"));
// → false

