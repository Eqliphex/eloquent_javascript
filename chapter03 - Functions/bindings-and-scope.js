let x = 10;
if(true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    // -> 60
}
// y is not visible here!
console.log(x + z);


// example 02
const halve = (n) => {
    return n / 2;
};

let n = 10;
console.log(halve(100));
console.log(n);

// Example 03 - Nested Scope:
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1)
            unit += 's';
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, 'can', 'chickpeas');
    ingredient(0.25, 'cup', 'thhini');
    ingredient(0.25, 'cup', 'lemon juice');
    ingredient(1, 'clove', 'garlic');
    ingredient(1, 'tablespoon', 'olive oil');
    ingredient(1, 'teaspoon', 'cumin');
}(5); // Equivalent to hummus(5);

// Declaration notation: Subtlety - a function declaration is moved to the top of the scope,
//                                  so it doesn't matter where it's located.

function square(x) {
    return x * x;
}

console.log('The future says: ', future());

function future() {
    return 'You\'ll never have flying cars...';
}