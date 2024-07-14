//comment single line 
/*  multi line commnets*/

//Operators
//Arithmetic Operators
// + - * /    Modulus Expnential Increment Decrement

let a=5
let b=2
console.log("a + b",a+b)
console.log("a - b",a-b)
console.log("a * b",a*b)
console.log("a / b",a/b)   //2.5
console.log("a % b",a%b)   //gives reminder 
console.log("a ** b",a**b) //not supported in javascript

//Unary Operators
console.log("a++",a++) //post increment
console.log("a--",a--) //post decrement
console.log("++a",++a) //pre increment
console.log("--a",--a) //pre decrement

//Assignment Operators
// = += -= *= %= **=


//comparison operator
// Equal to ==
// Not equal to !=
// Equal to & type ===   (strict version and also check datatype)
// Not equal to & type  !==
// >  >=  < <=

let c=5  //number
let d="5" //string - number 
console.log("c == d",c==d) //true
console.log("c === d",c===d) //false
console.log("c!= d", c!=d)  //false
console.log("c !== d", c!==d) //true


// Logical operators
// logical AND &&
//logical OR || 
// Logical Not !    reverse  false - true   or true - false 

//Ternary Operator
a?b:c  //if a is true then b else c
let age=20
age>18?console.log("adult"):console.log("minor")
//if age is greater than 18 then adult else minor`


