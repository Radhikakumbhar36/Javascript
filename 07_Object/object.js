//singleton 
//when created as constructor then singleton otherwide not 
//Object.create   ---- singleton

//object literals 

const mySym=Symbol("key1")
const JsUser={
    name:"Radhika",
    age:20,
    [mySym]:"key1",   //declaring as symbol
    location:"Kolhapur",
    email:"radhika@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser[mySym])

JsUser.email="radhiks@chatgpt.com"
// Object.freeze(JsUser)   

JsUser.email="radhika@google.com"   //donot override

console.log(JsUser)


JsUser.greeting=function(){
    console.log("hello")
}

JsUser.greetingTwo=function(){
    console.log(`hello JS user,${this.name}`)
}

console.log(JsUser.greeting())  //due to freeze it will not work
console.log(JsUser.greetingTwo())


//singleton object
// const mySingleton=new Object()

const mySingleton={}  // literal object

mySingleton.name="Radhika"
mySingleton.age=20
mySingleton.location="Kolhapur"
console.log(mySingleton)


const regularUser={
    email:"son@gmail.com",
    fullName:{
        userfullname:{
            firstName:"Radhika",
            lastName:"Kumbhar"
        }
    }

}

console.log(regularUser.fullName.userfullname.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}   //instead

console.log(obj3)

const User=[
    {
        name:"Radhika",
        email:"radha@gmail.com"
    },
    {
        name:"Hari",
        email:"Hari@gmail.com"
    }
]

console.log(User[0].name)
console.log(mySingleton)
console.log(Object.keys(mySingleton))  // converted in array 
console.log(Object.values(mySingleton))
console.log(Object.entries(mySingleton))

console.log(mySingleton.hasOwnProperty('isLoggedIn'))

//destructuring Objects
const course={
    coursename:"Js",
    duration:"2 months",
    fees:"Rs 2000",
    courseInstructor:"hitesh"
}

//course.courseInstructor
const{courseInstructor: Instructor}=course

console.log(Instructor)

// const navbar=({company})=>{
//     //in react {company} is the destrcturng
// }
// navbar(company="hitesh")


//rest operator ...num
function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(1,2,3,4,5,6,7,8,9,10))  //gives array

const user={
    name:"Radhika",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

handleObject(user)

handleObject({
    username:"Sam",
    price:200
})

