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

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults;

testResults.push(5.91);
console.log(storedResults, testResults);

const testResults2 = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults2 = testResults2.slice();
testResults2.push(5.91);
console.log(storedResults2, testResults2);

const testResults3 = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
const storedResults3 = testResults3.slice(0, 2).concat([3.99, 2]);
testResults3.push(5.91);
console.log(storedResults3, testResults3);
console.log(testResults3.indexOf(1.5));
console.log(testResults3.lastIndexOf(1.5));


const personData = [{name: 'Max'}, {name: 'Manuel'}];
console.log(personData.indexOf({name: 'Manuel'}));

const manuel = personData.find((person, index, persons) => {
    return person.name === 'Manuel';
});

manuel.name = 'banana';

console.log(manuel);

const maxIndex = personData.findIndex((person, index, persons) => {
    return person.name === 'Max';
});

console.log(maxIndex);