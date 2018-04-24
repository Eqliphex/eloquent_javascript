/*
Objects that are given to for...of loops needs to be iterable, meaning that has a method named with Symbol.iterator,
which is a standard symbol in the Symbol function.
 */

let okIterator = "OK"[Symbol.iterator](); // → Can do this since String has implemented an iterator
// → an iterator
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}


// Implementation of iterable data structure:
class Matrix {
    constructor(width, height, content = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = content(x, y);
            }
        }

        // Can also be outside of class.
        Matrix.prototype[Symbol.iterator] = function () {
            return new MatrixIterator(this);
        };
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y === this.matrix.height) return {done: true}; // End of matrix

        let value = {                                           // Current place and the value contained
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };

        this.x++;                                               // Increments deeper into x-axis
        if (this.x === this.matrix.width) {                     // Increment y-axis of reached bottom of x-axis.
            this.x = 0;
            this.y++;
        }
        return {value, done: false};                            // Get the value and end flag.
    }

    peak() {
        return {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        }
    }
}


// Execute matrix:
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
/*
for (let {x, y, value} of matrix) {
    console.log(x, y, value);
}*/

// W.I.P:
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].peak());
    matrix.next();
}

module.exports = {
  Matrix
};