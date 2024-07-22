/*
Destructuring is a convenient way of extracting values from arrays or 
objects into distinct variables in JavaScript. 
This syntax simplifies the process of unpacking values from data structures.
 */

//Array Destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3


//Default values
const number = [1, 2];
const [one, two, three = 3] = numbers;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

//Swapping Variables
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1


//Object Destructuring
const person = {
    name: 'Radhika',
    age: 24,
  };
  
  const { name, age } = person;
  
  console.log(name); // Radhika
  console.log(age);  // 24

  
  //Renaming Var
  const person1 = {
    name: 'Radhika',
    age: 24,
  };
  
  const { name: fullName, age: years } = person1;
  
  console.log(fullName); // Radhika
  console.log(years);    // 24
  
//Nested Destructuring

const person2 = {
    name1: 'Radhika',
    address: {
      city: 'Pune',
      country: 'India'
    }
  };
  
  const { name1, address: { city, country } } = person2;
  
  console.log(name1);    // Radhika
  console.log(city);    // Pune
  console.log(country); // India
  
//Destructuring with function
function displayPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  const person4 = {
    name: 'Radhika',
    age: 24,
  };
  
  displayPerson(person4); // Name: Radhika, Age: 24

//combining rest with destructuring

const person5 = {
    name3: 'Radhika',
    age: 24,
    profession: 'Developer'
  };
  
  const { name3, ...details } = person;
  
  console.log(name3);    // Radhika
  console.log(details); // { age: 24, profession: 'Developer' }
  