//Activity 1

function OddorEven(){
    let num=5
    if(num%2==0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}
OddorEven()

function Square(){
    let num=5
    return num*num
}
console.log(Square())

//Activity 2
function Max(num1,num2){
    if(num1>num2){
        console.log(num1,"is the largest")
    }else{
        console.log(num2,"is the largest")
    }
}

Max(10,5)


function StrConcat(str1,str2){
    console.log(str1+" "+str2)
}

StrConcat("Radhika","Kumbhar")


//Activity 3
const Sum=(a,b)=>{
    let result=a+b
    return result
}

console.log(Sum(10,5))

const ContainCharacter=(string ,char)=>{
    if(string.includes(char)){
        return true
    }else{
        return false
    }
}

console.log(ContainCharacter("Radhika","a"))

//Activity 4
function Product(a,b=5){
    return a*b
}

console.log(Product(4))
console.log(Product(4,6))

function Person(name,age=20){
    console.log("Hello",name,"Your age is:",age)

}

Person("Radhika")

//Activty 5

function callFunctionTimes(fn,n){
    return function(){
        for(let i=0;i<n;i++){
            fn()
        }
    }
}

function sayHello(){
    console.log("Hello")
}

const sayHellonTimes=callFunctionTimes(sayHello,5)

sayHellonTimes();

function higherOrderFunction(fn1,fn2,value){
    return fn2(fn1(value))

}

function add(x){
    return x+5
}

function multiply(x){
    return x*5
}

const result=higherOrderFunction(add,multiply,10)
console.log(result);