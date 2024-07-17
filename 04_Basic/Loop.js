//printing 1 to 5
console.log();
console.log("printing using For loop:")
for(let i=1;i<=5;i++){
    console.log(i)
}

// behaviour of for loop
//1. initialise i 
//2. checking condition
//3. if true body of loop execution
//4. increment/decrement i
//5. checking condition
//6. if false break loop


//Inifinite loop never ending loop
//never add Inifinite loop in your code 


//while loop
let i=1;
console.log();
console.log("printing using  while loop:")
while(i<=5){
    console.log(i);
    i++;
}


//do while loop    //run atleasr one time
let j=1;
console.log();
console.log("printing using Do while loop:")
do{
    console.log(j);
    j++;
}while(j<=5); 

//for of loop
 //used to iterate in string and array

let str="Radha"
// for(let i of str){
//     console.log("i=",i);
// }

let size=0;
for(let i in str){
    size++
}

console.log("String size",size)


//for in loop
//used to iterate in object
let student={
    fullName:"Rahul Kumar",
    age:20,
    cgpa:8.2,
    isPass:true,
};

for(let i in student){
    console.log("Key",i,"Value",student[i])
}
//print all even numbers form 0 to 100
let n= 100
console.log("Printing all even numbers:")
for ( let i=1;i<=n;i++){
    if(i%2===0){
        console.log(i)
    }
}


//Ask User to input random no and 
// let gamenum=25;
// let count=0;
// console.log("Guess the number")
// while(count<3){
//     let num=parseInt(prompt("Enter number:"));  //we cannot use it using node 
//     if(num===gamenum){
//         console.log("Correct guess")
//         break;
//     }
//     else if(num>gamenum){
//         console.log("Number is too high")
//     }
//     else if(num<gamenum){
//         console.log("Number is too low")
//     }
//     count++;
// }


//for compare no ===
// for string ==