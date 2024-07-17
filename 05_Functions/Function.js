//Functions And methods in javascript
 //Function Definition
 // function functionName(){
 //do some work
//}

//function call
//functionName();

function myFunction(){
    console.log("hello")
    console.log("Radhika")
}

myFunction()

function mul(msg,n){
    console.log(msg*n)
}

mul("Radhika",5)   //Nan ----> Not a nUmber 

function sum(x,y){
    console.log("before return ")
    return x+y
    //console.log("This is not execute ")
}

let val=sum(3,4)
console.log(val)

//function parameters == local variable

//Arrow Functions
//Modern JS
const arrowSum=(a,b) =>{
    console.log(a+b)
};

arrowSum(3,4)

let Mul=(a,b)=>{
    return a*b
};

console.log(Mul(3,4))

//In the arrow function we save the function value we can do this also Mul = 5;
//it will get override 

//create a function using the " function" keyword that takes a string as an argumnent & returns number if vowels in string
function VowelString(str){
    let count=0
    for( let i of str){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count++
        }
    }
    return count
}

console.log(VowelString("Radha"))

const CountVowel=(str)=>{
    let count=0
    for( let i of str){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count++
        }
    }
    return count
}

console.log(CountVowel("Radha"))


//for each loop  in arrays 
 //method when associate with object

//A callback is a function passed as an argument to another function
// arrowSum.forEach(callBackFunction)
//here it is a function to execute for each element in the array

//val value at each idx
let arr=[1,2,3,4,5]
// arr.forEach(function printval(val){
//     console.log(val)
// })
arr.forEach((val)=>{
    console.log(val)
})

let arr2=["pune","delhi","kolhaur"]
arr2.forEach((val,idx,arr2)=>{
    console.log(val,idx,arr2)
})

// we can call forEach function as Higher order functions or higher order methods
//HOF= when a function returns or take function as a argument

//print the squares iof each value using the forEach loop

let arr3=[1,2,3,4,5]

arr3.forEach((val)=>{
    console.log(val*val)
})