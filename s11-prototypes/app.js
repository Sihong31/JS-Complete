class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Bob';

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.')
  }
}

function Person() {
  this.name = 'Bob';
  this.age = 30;
}

Person.prototype.greet = function() {
  console.log(
    'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
  )
}

// Person.prototype.printAge = function() {
//     console.log(this.age);
// }

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);

const p = new Person();
const p2 = new Person();
console.log(p.__proto__ === p2.__proto__);