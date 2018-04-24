
/*
Prototypes until 2015 was the way to define classes, which lies in the heart of OOP.
 */

// Old notation
function makeRabbit(type) {
    let rabbit = Object.create(prototypeRabbit);
    rabbit.type = type;
    return rabbit;
}


// → The killer rabbit says 'SKREEEE'
