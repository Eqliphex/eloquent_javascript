// Arrow Function Notation:

const power = (base, exponent) => {
    let result = 1;
    for (let count = 1; count < exponent; count++) {
        result *= base;
    }
    return result;
};

const horn = () => {
    console.log('Toot!');
};


function greet(who) {
    console.log('Hello ' + who);
}
greet('Harry');
console.log('Bye!');


