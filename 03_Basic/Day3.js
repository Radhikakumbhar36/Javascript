// Activity 1
let number =50
if (number >0){
    console.log("Positive number")
}
else if(number < 0){
    console.log("Negative number")
}else{
    console.log("Zero")
}

let age=20
if(age>=18){
    console.log("You can vote")
    }else{
        console.log("You can't vote")
        }

//Activity 2
let num1=20
let num2=16
let num3=40
if(num1>num2 ){
    if(num1>num3){
        console.log("num1 is the largest")
        }
    else{
        if(num2>num3){
            console.log("num2 is the largest")
        }
        else{
            console.log("num3 is the largest")
            }
    }

}

//Activity 3
//1)
let day=2
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid day")
        break;
}

//2)

let score = 60;
let grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}

switch (grade) {
    case 'A':
        console.log("A");
        break;
    case 'B':
        console.log("B");
        break;
    case 'C':
        console.log("C");
        break;
    case 'D':
        console.log("D");
        break;
    case 'F':
        console.log("F");
        break;
    default:
        console.log("Invalid score");
        break;
}

//Activity 4
let num=4
num %2 ? console.log("Even"):console.log("Odd")

//Activity 5
let year = 2024;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap year");
        } else {
            console.log("Not a leap year");
        }
    } else {
        console.log("Leap year");
    }
} else {
    console.log("Not a leap year");
}

