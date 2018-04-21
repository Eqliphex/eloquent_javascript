/*
Higher order functions:

 */
const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2003},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2003},
    {name: 'Company Four', category: 'Retail', start: 1980, end: 2003},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2003},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2003},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 2003},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2003},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 2003}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach - Better way to loop through an array.
// Normal way:
// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }
//
// // Higher-order function
// companies.forEach(function(company) { //Synchronous callback
//     console.log(company.name);
// });

// Filter

// Normal for-loop filter:
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21)
//         canDrink.push(ages[i]);
// }
//
// console.log(canDrink);

//  The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// // Higher-order function
// let canDrinkTwo = ages.filter(function (age) {
//     if (age >= 21)
//         return true;
// });
//
// console.log(canDrinkTwo);
//
// // Higher-order funciton ES6
let canDrinkThree = ages.filter(age => age >= 21);

//
// console.log(canDrinkThree);

// Filter Retail old:

// let retailCom = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });
//
// console.log(retailCom);
//
// // Filter Retail ES6:
// let retailCompanies = companies.filter(companies => companies.category === 'Retail');
//
// console.log(retailCompanies);
//
// let eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);
