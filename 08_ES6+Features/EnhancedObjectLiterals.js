/*
Enhanced object literals in JavaScript provide a more concise and flexible syntax for defining object properties and methods. 
This feature includes shorthand property names, method definitions, computed property names, and more. Let's explore these enhancements:
 */

//ShortHand Property names
const name = 'Radhika';
const age = 24;

const person = {
  name,
  age
};

console.log(person); // { name: 'Radhika', age: 24 }

//method def
const person1 = {
    name: 'Radhika',
    age: 24,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  person1.greet(); // Output: Hello, my name is Radhika
  
//computed property names
const prop = 'age';
const person2 = {
  name: 'Radhika',
  [prop]: 24
};

console.log(person2); // { name: 'Radhika', age: 24 }

//consize property def

const name1 = 'Radhika';
const age1 = 24;

const person5 = {
  name1,
  age1,
  greet() {
    console.log(`Hello, my name is ${this.name1}`);
  }
};

console.log(person5); // { name: 'Radhika', age: 24, greet: [Function: greet] }


