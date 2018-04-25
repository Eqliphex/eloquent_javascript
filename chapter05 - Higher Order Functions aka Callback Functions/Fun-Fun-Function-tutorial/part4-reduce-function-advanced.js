let fs = require('fs');

/*

*/
let output = fs.readFileSync('part4-text-file', 'utf8')
    .trim() // removes the last empty line
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push( {
            name: line[1],
            price: line[2],
            quantity: line[4]
        });
        return customers;
    }, {});
console.log('output', JSON.stringify(output), null, 2); //
