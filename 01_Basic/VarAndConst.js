console.log("Hello")
//constant

//const = const is block-scoped, like let.
//Variables declared with const cannot be re-assigned or re-declared.
//However, if the value assigned to a const is an object or array, the properties of the object or the elements of the array can still be modified.

//Variable 

//let=let is block-scoped, meaning it's limited to the block, statement, or expression in which it's used.
//Variables declared with let can be re-assigned but not re-declared within the same scope.

//var=var is function-scoped or globally scoped if declared outside a function.
//Variables declared with var can be re-assigned and re-declared.

const accountId=144366  //cannot modified it
let accountEmail="radhika@google.com"
var accountPassword="12345"
accountCity="Kolhapur"
let accountState;  //undefined

accountEmail="rk@rk.com"
accountPassword="21345"
accountCity="Pune"

console.table([accountId,accountEmail,accountPassword,accountPassword,accountState])
//tabular format printing 

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

