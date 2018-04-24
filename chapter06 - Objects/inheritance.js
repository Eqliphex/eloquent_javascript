/*
To take into account that we want to derive a new special case from an already existing class,
we can use inheritance to reuse a lot of code.
 */

let Matrix = require('./iterator-interface').Matrix;

// SymmetricMatrix is not derived from Object but Matrix.
class SymmetricMatrix extends Matrix{
    constructor(size, content = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return content(y, x);
            else return content(x, y);
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
        if (x !== y) {
            super.set(y, x, value);
        }
    }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));

// instanceOf operator:
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
// → true since it's the same class
console.log(new SymmetricMatrix(2) instanceof Matrix);
// → true since it's derived from Matrix
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// → false since it's a generalization of SymmetricalMatrix
console.log([1] instanceof Array);
// → true
