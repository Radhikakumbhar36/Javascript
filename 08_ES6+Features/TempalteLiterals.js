//Template Literals 
/*
Template literals in JavaScript are a powerful feature that allows for easier string manipulation 
and embedding of expressions within strings. They are enclosed by backticks (``) instead of single or double quotes. 
Here are some key features and examples:
 */

const name = 'Radhika';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Radhika!

//multiline
const multiLine = `This is a string
that spans multiple
lines.`;
console.log(multiLine);


//Expression Interpolation
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Output: The sum of 5 and 10 is 15.


//Nesting Template Literals
const name1 = 'Radhika';
const greeting1 = `Hello, ${`dear ${name1}`}!`;
console.log(greeting1); // Output: Hello, dear Radhika!

//Tagged Template
function tag(strings, ...values) {
    console.log(strings); // Array of strings
    console.log(values);  // Array of values
    return 'Custom Output';
  }
  
  const result = tag`Hello, ${name}! How are you today?`;
  console.log(result); // Output: Custom Output

  //Raw String
const rawString = String.raw`This is a raw string \n with no special processing.`;
console.log(rawString); // Output: This is a raw string \n with no special processing.
