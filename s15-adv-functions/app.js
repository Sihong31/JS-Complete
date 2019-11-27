// PURE FUNCTION
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));


// IMPURE FUNCTION
function addRandom(num1) {
  return num1 + Math.random()
}

console.log(addRandom(5));

let previousResult = 0;

// IMPURE FUNCTION
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

// IMPURE FUNCTION
function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

// FACTORY FUNCTION
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100))
console.log(calculateVatAmount(200));

let userName = 'Bob';

function greetUser() {
  let name = 'George';
  console.log('Hi ' + name);
}

let name = 'Bob';

userName = 'Helen';

greetUser();

// function powerOf(x, power) {
//   let result = 1;

//   for (let i = 0; i < power; i++) {
//     result *= x;
//   }

//   return result;
// }

function powerOf(x, power) {
  if (power === 1) {
    return x;
  }
  return x * powerOf(x, power - 1);
}

console.log(powerOf(2, 3));

const myself = {
  name: 'Bob',
  friends: [
    {
      name: 'Phil',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Halbert'
            },
            {
              name: 'Amilia'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));