/*
A prototype is another object used for fallback source of properties.
 */

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

// Fetching object prototype
console.log(Object.getPrototypeOf({}) === Object.prototype);

// Creating an object with specific prototype:
let prototypeRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(prototypeRabbit); // Can also have null as value to indicate no ancestor.
killerRabbit.type = 'Killer';
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE'


