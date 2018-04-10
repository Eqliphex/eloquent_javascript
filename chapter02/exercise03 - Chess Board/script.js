/**
 * @summary
 * Small program to print out a chessboard in variable size.
 *
 * @author  Patrick W. Meyer
 *
 */

const SIZE = 16;

for(let i = 1; i <= SIZE; i++) {
    let chessRow = '';

    if(i % 2 !== 0) {
        for(let k = 1; k <= SIZE; k++) {
            if(k % 2 !== 0)
                chessRow += ' ';
            else
                chessRow += '#';
        }
    }
    else {
        for(let k = 1; k <= SIZE; k++) {
            if(k % 2 !== 0)
                chessRow += '#';
            else
                chessRow += ' ';
        }
    }
    console.log(chessRow);
}