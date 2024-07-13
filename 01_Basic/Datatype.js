//Datatype

"use strict" //treat all Js code as newer version

//alert (3+3)  //we are using nodejs,not browser

console.log(3+3)
console.log("Radhika")
/*
7 primitive datatype
number => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value
undefined
symbol => unique
object => Collection of values ( array, function) non-primitive datatype
*/

console.log(typeof "Hitesh")   //String
console.log(typeof 3)  //Number
console.log(typeof true)  //Boolean
console.log(typeof null)  //Object
console.log(typeof undefined)  //undefined
console.log(typeof Boolean)  //function

const student={
    fullName:"Rahul Kumar",
    age:20,
    cgpa:8.2,
    isPass:true,

}

console.log(student)
console.log(typeof student)
console.log(student["age"])
console.log(student.fullName)

student["age"]+=1
console.log(student["age"])