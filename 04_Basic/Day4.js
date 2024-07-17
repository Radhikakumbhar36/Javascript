// Loops in javascript

// Activity 1

for(let i=1;i<11;i++){
    console.log(i)
}

let n=5;
console.log("Table of 5:")
for(let i=1;i<=11;i++){
    console.log(n,"*",i,"=",n*i);
}

//Activity 2
console.log()
console.log("Sum of first 10 numbers")
let sum=0
let i=0;
while(i<=10){
    sum+=i
    i++
}
console.log(sum)

console.log("\n printing from 10 to 1")
let j=10
while(j>0){
    console.log(j)
    j--
}

//Activity 3
console.log("\n printing from 1 to 5 using  do while loop")
let k=1
do{
    console.log(k)
    k++
}while(k<=5);

console.log("\n Calculating factorial of a number using do while loop")

let num=5
let fact=1
do{
    fact*=num
    num--
}while(num>0)
console.log(fact)


//Activity 4
let pattern=''
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        pattern+='*'
    }
    pattern+='\n'
}
console.log(pattern)


//Activity 5
for(let i=1;i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i)
}


for(let i=1;i<=10;i++){
    if(i===7){
        break;
    }
    console.log(i)
}