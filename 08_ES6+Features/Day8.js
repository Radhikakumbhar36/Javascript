//Activity 1
//Template Literals

const name='Radhika'
const age=21
const greeting =`Hello , ${name} You are ${age} yrs old`
console.log(greeting)

const multiline=`Hello My name is Radhika ,
I am currently pursuing Btech from KITCOEK`;
console.log(multiline)


//Activity 2
//Destructuring

const array=[1,2,3,4,5,6,7]
const [first,second]=array
console.log(first,second)

const book={
    Title:"Not without my daughter",
    author:"J.K Rowling",
    year:2000,
    copies:20
}

const {Title,author}=book
console.log(Title,author)


//Activity 3
//Spread Operator And rest operator
const arr1=[2,3,4]
const arr2=[...arr1]     //spread operator
console.log(arr2)

function Sum(...val){
    let sum=0
    for(let i=0;i<val.length;i++){
        sum+=val[i]
    }
    return sum
}

console.log(Sum(1,2,3,4,5))

//Activity 4
//Default Parameters
function product(num1,num2=1){
    return num1*num2
}
console.log(product(3,4))
console.log("with default parameter")
console.log(product(3))


//Activity 5
//Enhanced Object Literals 
const person={
    name:"Radhika",
    age:20,
    greet(){
        console.log(`Hello ${name} You are ${age} yrs old`)
    }
}

console.log(person)

const key='favouriteFood'
const value='Pizza'

const user={
    name:"Radhika",
    age:20,
    [key]:value,
    
}

console.log(user)


