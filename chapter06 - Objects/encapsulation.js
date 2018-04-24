/*
OOP's main idea is to divide programs into smaller pieces, maneging their own state.
These are realized in classes.
Normally there are public and private access modifiers, but JavaScript does not support that.
supposed private properties are prefixed with an (_).
 */

// Methods:

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");
// →

// For explicit function call with (this):
speak.call(hungryRabbit, "Burp!");

// (this.) points to the object which the methods belongs to:
function normalize() {
    console.log(this.coords.map(n => n / this.length)); // Will not work with normal function keyword
}

