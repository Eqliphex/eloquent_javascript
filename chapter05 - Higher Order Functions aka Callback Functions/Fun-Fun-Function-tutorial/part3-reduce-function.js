/*
Why learn reduce?  Is the super method if no other method is available.
 */
let orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
];

// non-higher function method:
let totalAmountForLoop = 0;
for (let i = 0; i < orders.length; i++) {
    totalAmountForLoop += orders[i].amount;
}

console.log(totalAmountForLoop);

// Higher order function:
// Reduce takes a callback function as arg0 but want an object to work with.
// Sum is the up until now handled elements. In this case the total sum up until now.
let totalAmount = orders.reduce(function (sum, order) {
    console.log('Hello', 'Current sum: ' + sum + ', going to add:', order);
    return sum + order.amount;
}, 0);

console.log(totalAmount);

// matching arrow function:
let totalAmountArrow = orders.reduce((currentSum, element) => currentSum + element.amount, 0);
console.log(totalAmountArrow);
