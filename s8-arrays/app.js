// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');

// // const arrayString = Array.from('Hi!');
// // console.log(arrayString)
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// const hobbies = ['Sports', 'Cooking'];
// const pushedLength = hobbies.push('Reading');
// const unshiftLength = hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// const shiftedValue = hobbies.shift();
// console.log(hobbies, poppedValue, shiftedValue, pushedLength, unshiftLength);

// hobbies[1] = 'Coding';
// hobbies[5] = 'Reading';
// console.log(hobbies, hobbies[4]);

// // hobbies.splice(0, 0, 'Good Food');
// // console.log(hobbies);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// // const removedElements = hobbies.splice(-1, 1);
// // console.log(hobbies, removedElements);

// const removedElements = hobbies.splice(0, 1);
// console.log(hobbies, removedElements);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults;

// testResults.push(5.91);
// console.log(storedResults, testResults);

// const testResults2 = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults2 = testResults2.slice();
// testResults2.push(5.91);
// console.log(storedResults2, testResults2);

// const testResults3 = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults3 = testResults3.slice(0, 2).concat([3.99, 2]);
// testResults3.push(5.91);
// console.log(storedResults3, testResults3);
// console.log(testResults3.indexOf(1.5));
// console.log(testResults3.lastIndexOf(1.5));


// const personData = [{name: 'Max'}, {name: 'Manuel'}];
// console.log(personData.indexOf({name: 'Manuel'}));

// const manuel = personData.find((person, index, persons) => {
//     return person.name === 'Manuel';
// });

// manuel.name = 'banana';

// console.log(manuel);

// const maxIndex = personData.findIndex((person, index, persons) => {
//     return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// // prices.forEach((price, idx, prices) => {
// //     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
// //     taxAdjustedPrices.push(priceObj);
// // });

// const taxAdjustedPrices2 = prices.map((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
//     return priceObj;
// });

// console.log(taxAdjustedPrices, taxAdjustedPrices2);

// const sortedPrices = prices.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedPrices);

// const filteredArray = prices.filter((price, index, prices) => {
//     return price > 6;
// });

// console.log(filteredArray);

// // let sum = 0;
// // prices.forEach((price) => {
// //     sum += price;
// // });

// // console.log(sum);

// const sum = prices.reduce((prevValue, currentValue, currentIndex, prices) => {
//     return prevValue + currentValue;
// }, 0);

// console.log(sum);

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');
// console.log(transformedData);

// const nameFragments = ['Max', 'Tax'];
// const name = nameFragments.join(' ');

// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(1, 5, -3));
// console.log(Math.min(...prices));

// const persons = [{name: 'Max', age: 30}, {name: 'Manuel', age: 29}];
// const copiedPersons = [...persons];
// const copiedPersons2 = persons.map(person => {
//     return {
//         name: person.name, 
//         age: person.age
//     }
// });

// persons.push({name: 'Alex', age: 31});
// persons[0].age = 31;

// console.log(persons, copiedPersons, copiedPersons2);

const nameData = ['Max', 'Tax', 'Mr', 30];
const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);